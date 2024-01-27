import chai from 'chai';
// @ts-ignore
import bignumberChai from 'chai-bignumber';
import { solidity } from 'ethereum-waffle';
import { Signer } from 'ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import {
  getLendingPool,
  getLendingPoolAddressesProvider,
  getLendingPoolAddressesProviderRegistry,
  getLendingPoolConfiguratorProxy,
  getSToken,
  getMintableERC20,
  getPriceOracle,
  getSiO2ProtocolDataProvider,
  getWETHGateway,
  getWETHMocked,
  getAllMockedTokens,
} from '../../helpers/contracts-getters';
import { getEthersSigners, getParamPerNetwork } from '../../helpers/contracts-helpers';
import { DRE, evmRevert, evmSnapshot } from '../../helpers/misc-utils';
import { usingTenderly } from '../../helpers/tenderly-utils';
import { eNetwork, tEthereumAddress } from '../../helpers/types';
import { SiO2Config } from '../../markets/c14';
import { LendingPool } from '../../types/LendingPool';
import { LendingPoolAddressesProvider } from '../../types/LendingPoolAddressesProvider';
import { LendingPoolAddressesProviderRegistry } from '../../types/LendingPoolAddressesProviderRegistry';
import { LendingPoolConfigurator } from '../../types/LendingPoolConfigurator';
import { SToken } from '../../types/SToken';
import { MintableERC20 } from '../../types/MintableERC20';
import { PriceOracle } from '../../types/PriceOracle';
import { SiO2ProtocolDataProvider } from '../../types/SiO2ProtocolDataProvider';
import { WETH9Mocked } from '../../types/WETH9Mocked';
import { WETHGateway } from '../../types/WETHGateway';
import { almostEqual } from './almost-equal';

chai.use(bignumberChai());
chai.use(almostEqual());
chai.use(solidity);

export interface SignerWithAddress {
  signer: Signer;
  address: tEthereumAddress;
}
export interface TestEnv {
  deployer: SignerWithAddress;
  users: SignerWithAddress[];
  pool: LendingPool;
  configurator: LendingPoolConfigurator;
  oracle: PriceOracle;
  helpersContract: SiO2ProtocolDataProvider;
  weth: WETH9Mocked;
  sWETH: SToken;
  dai: MintableERC20;
  sDai: SToken;
  usdc: MintableERC20;
  sio2: MintableERC20;
  addressesProvider: LendingPoolAddressesProvider;
  registry: LendingPoolAddressesProviderRegistry;
  wethGateway: WETHGateway;
}

let buidlerevmSnapshotId: string = '0x1';
const setBuidlerevmSnapshotId = (id: string) => {
  buidlerevmSnapshotId = id;
};

const testEnv: TestEnv = {
  deployer: {} as SignerWithAddress,
  users: [] as SignerWithAddress[],
  pool: {} as LendingPool,
  configurator: {} as LendingPoolConfigurator,
  helpersContract: {} as SiO2ProtocolDataProvider,
  oracle: {} as PriceOracle,
  weth: {} as WETH9Mocked,
  sWETH: {} as SToken,
  usdc: {} as MintableERC20,
  sio2: {} as MintableERC20,
  addressesProvider: {} as LendingPoolAddressesProvider,
  registry: {} as LendingPoolAddressesProviderRegistry,
  wethGateway: {} as WETHGateway,
} as TestEnv;

export async function initializeMakeSuite() {
  const [_deployer, ...restSigners] = await getEthersSigners();
  const deployer: SignerWithAddress = {
    address: await _deployer.getAddress(),
    signer: _deployer,
  };

  for (const signer of restSigners) {
    testEnv.users.push({
      signer,
      address: await signer.getAddress(),
    });
  }
  testEnv.deployer = deployer;
  testEnv.pool = await getLendingPool();

  testEnv.configurator = await getLendingPoolConfiguratorProxy();

  testEnv.addressesProvider = await getLendingPoolAddressesProvider();

  if (process.env.FORK) {
    testEnv.registry = await getLendingPoolAddressesProviderRegistry(
      getParamPerNetwork(SiO2Config.ProviderRegistry, process.env.FORK as eNetwork)
    );
  } else {
    testEnv.registry = await getLendingPoolAddressesProviderRegistry();
    testEnv.oracle = await getPriceOracle();
  }
  testEnv.helpersContract = await getSiO2ProtocolDataProvider();

  const alSTokens = await testEnv.helpersContract.getAllSTokens();
  console.log(alSTokens)
  const sDaiAddress = alSTokens.find((sToken) => sToken.symbol === 'sDAI')?.tokenAddress;
  const sWETHAddress = alSTokens.find((sToken) => sToken.symbol === 'sWETH')?.tokenAddress;

  const reservesTokens = await testEnv.helpersContract.getAllReservesTokens();
  console.log(JSON.stringify(reservesTokens, null, 2))
  
  const usdcAddress = reservesTokens.find((token) => token.symbol === 'USDC')?.tokenAddress;
  const wethAddress = reservesTokens.find((token) => token.symbol === 'WETH')?.tokenAddress;
  // READ: The following lines are preventing tests from running
  // if (!lDaiAddress || !lWETHAddress) {
  //   console.log("Exiting for A")
  //   process.exit(1);
  // }
  if (!usdcAddress || !wethAddress ) {
    console.log("Exiting for B")
    process.exit(1);
  }

  testEnv.sDai = await getSToken(sDaiAddress);
  testEnv.sWETH = await getSToken(sWETHAddress);

  testEnv.usdc = await getMintableERC20(usdcAddress);
  testEnv.weth = await getWETHMocked(wethAddress);
  testEnv.wethGateway = await getWETHGateway();
  const allMockTokens = await getAllMockedTokens();
  testEnv.sio2 = await getMintableERC20(allMockTokens.SIO2.address);
}

const setSnapshot = async () => {
  const hre = DRE as HardhatRuntimeEnvironment;
  if (usingTenderly()) {
    setBuidlerevmSnapshotId((await hre.tenderlyNetwork.getHead()) || '0x1');
    return;
  }
  setBuidlerevmSnapshotId(await evmSnapshot());
};

const revertHead = async () => {
  const hre = DRE as HardhatRuntimeEnvironment;
  if (usingTenderly()) {
    await hre.tenderlyNetwork.setHead(buidlerevmSnapshotId);
    return;
  }
  await evmRevert(buidlerevmSnapshotId);
};

export function makeSuite(name: string, tests: (testEnv: TestEnv) => void) {
  describe(name, () => {
    before(async () => {
      await setSnapshot();
    });
    tests(testEnv);
    after(async () => {
      await revertHead();
    });
  });
}
