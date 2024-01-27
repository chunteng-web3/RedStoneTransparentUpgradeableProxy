import {
  DefaultReserveInterestRateStrategyFactory,
  GenericLogicFactory,
  RedStoneTransparentUpgradeableProxyFactory,
  LendingPoolAddressesProviderFactory,
  LendingPoolAddressesProviderRegistryFactory,
  LendingPoolCollateralManagerFactory,
  LendingPoolConfiguratorFactory,
  LendingPoolFactory,
  LendingRateOracleFactory,
  STokenFactory,
  STokensAndRatesHelperFactory,
  MintableERC20Factory,
  MockFlashLoanReceiverFactory,
  MockSTokenFactory,
  MockStableDebtTokenFactory,
  MockVariableDebtTokenFactory,
  PriceOracleFactory,
  ReserveLogicFactory,
  SelfdestructTransferFactory,
  StableAndVariableTokensHelperFactory,
  StableDebtTokenFactory,
  SiO2FallbackOracleFactory,
  SiO2OracleFactory,
  SiO2ProtocolDataProviderFactory,
  VariableDebtTokenFactory,
  WalletBalanceProviderFactory,
  WETH9MockedFactory,
  WETHGatewayFactory,
  UiPoolDataProviderV2Factory,
  UiIncentiveDataProviderV2Factory,
  StakeUIHelperFactory,
  FlashLiquidationAdapterFactory,
  MockedSiO2IncentivesControllerFactory,
  PriceAggregatorAdapterRedStoneImplFactory,
} from '../types';
import { IDistributionManagerFactory } from '../types/IDistributionManagerFactory';
import { ISiO2IncentivesControllerFactory } from '../types/ISiO2IncentivesControllerFactory';
import { IERC20DetailedFactory } from '../types/IERC20DetailedFactory';
import { getEthersSigners, MockTokenMap } from './contracts-helpers';
import { DRE, getDb, notFalsyOrZeroAddress, omit } from './misc-utils';
import { IUniswapV2FactoryFactory } from '../types/IUniswapV2FactoryFactory';
import { IUniswapV2Router02Factory } from '../types/IUniswapV2Router02Factory';
import { eContractid, PoolConfiguration, tEthereumAddress, TokenContractId } from './types';

export const getFirstSigner = async () => (await getEthersSigners())[0];

export const getFlashLiquidationAdapter = async (address?: tEthereumAddress) => {
  return await FlashLiquidationAdapterFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.FlashLiquidationAdapter}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );
};

export const getIUniswapV2Factory = async (address?: tEthereumAddress) => {
  return await IUniswapV2FactoryFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.IUniswapV2Factory}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );
};

export const getIUniswapV2Router02 = async (address?: tEthereumAddress) => {
  return await IUniswapV2Router02Factory.connect(
    address ||
      (
        await getDb().get(`${eContractid.IUniswapV2Router02}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );
};

export const getLendingPoolAddressesProvider = async (address?: tEthereumAddress) => {
  return await LendingPoolAddressesProviderFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.LendingPoolAddressesProvider}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );
};

export const getLendingPoolConfiguratorProxy = async (address?: tEthereumAddress) => {
  return await LendingPoolConfiguratorFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.LendingPoolConfigurator}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );
};

export const getLendingPool = async (address?: tEthereumAddress) =>
  await LendingPoolFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.LendingPool}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getPriceOracle = async (address?: tEthereumAddress) =>
  await PriceOracleFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.PriceOracle}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getSiO2FallbackOracle = async (address?: tEthereumAddress) =>
  await SiO2FallbackOracleFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.SiO2FallbackOracle}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getSToken = async (address?: tEthereumAddress) =>
  await STokenFactory.connect(
    address || (await getDb().get(`${eContractid.SToken}.${DRE.network.name}`).value()).address,
    await getFirstSigner()
  );

export const getStableDebtToken = async (address?: tEthereumAddress) =>
  await StableDebtTokenFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.StableDebtToken}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getVariableDebtToken = async (address?: tEthereumAddress) =>
  await VariableDebtTokenFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.VariableDebtToken}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getMintableERC20 = async (address: tEthereumAddress) =>
  await MintableERC20Factory.connect(
    address ||
      (
        await getDb().get(`${eContractid.MintableERC20}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getIErc20Detailed = async (address: tEthereumAddress) =>
  await IERC20DetailedFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.IERC20Detailed}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getSiO2ProtocolDataProvider = async (address?: tEthereumAddress) =>
  await SiO2ProtocolDataProviderFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.SiO2ProtocolDataProvider}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getInterestRateStrategy = async (address?: tEthereumAddress) =>
  await DefaultReserveInterestRateStrategyFactory.connect(
    address ||
      (
        await getDb()
          .get(`${eContractid.DefaultReserveInterestRateStrategy}.${DRE.network.name}`)
          .value()
      ).address,
    await getFirstSigner()
  );

export const getMockFlashLoanReceiver = async (address?: tEthereumAddress) =>
  await MockFlashLoanReceiverFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.MockFlashLoanReceiver}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getMockedSiO2IncentiveController = async (address?: tEthereumAddress) =>
  await MockedSiO2IncentivesControllerFactory.connect(
    address ||
      (
        await getDb()
          .get(`${eContractid.MockedSiO2IncentivesController}.${DRE.network.name}`)
          .value()
      ).address,
    await getFirstSigner()
  );

export const getLendingRateOracle = async (address?: tEthereumAddress) =>
  await LendingRateOracleFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.LendingRateOracle}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getMockedTokens = async (config: PoolConfiguration) => {
  const tokenSymbols = Object.keys(config.ReservesConfig);
  const db = getDb();
  const tokens: MockTokenMap = await tokenSymbols.reduce<Promise<MockTokenMap>>(
    async (acc, tokenSymbol) => {
      const accumulator = await acc;
      const address = db.get(`${tokenSymbol.toUpperCase()}.${DRE.network.name}`).value().address;
      accumulator[tokenSymbol] = await getMintableERC20(address);
      return Promise.resolve(acc);
    },
    Promise.resolve({})
  );
  return tokens;
};

export const getAllMockedTokens = async () => {
  const db = getDb();
  const tokens: MockTokenMap = await Object.values(TokenContractId).reduce<Promise<MockTokenMap>>(
    async (acc, tokenSymbol) => {
      const accumulator = await acc;
      const address = db.get(`${tokenSymbol.toUpperCase()}.${DRE.network.name}`).value().address;
      accumulator[tokenSymbol] = await getMintableERC20(address);
      return Promise.resolve(acc);
    },
    Promise.resolve({})
  );
  return tokens;
};

export const getQuoteCurrencies = (oracleQuoteCurrency: string): string[] => {
  switch (oracleQuoteCurrency) {
    case 'USD':
      return ['USD'];
    case 'ETH':
    case 'WETH':
    default:
      return ['ETH', 'WETH'];
  }
};

export const getPairsTokenAggregator = (
  allAssetsAddresses: {
    [tokenSymbol: string]: tEthereumAddress;
  },
  aggregatorsAddresses: { [tokenSymbol: string]: tEthereumAddress },
  oracleQuoteCurrency: string
): [string[], string[]] => {
  const assetsWithoutQuoteCurrency = omit(
    allAssetsAddresses,
    getQuoteCurrencies(oracleQuoteCurrency)
  );

  const pairs = Object.entries(assetsWithoutQuoteCurrency).map(([tokenSymbol, tokenAddress]) => {
    //if (true/*tokenSymbol !== 'WETH' && tokenSymbol !== 'ETH' && tokenSymbol !== 'LpWETH'*/) {
    const aggregatorAddressIndex = Object.keys(aggregatorsAddresses).findIndex(
      (value) => value === tokenSymbol
    );
    const [, aggregatorAddress] = (
      Object.entries(aggregatorsAddresses) as [string, tEthereumAddress][]
    )[aggregatorAddressIndex];
    return [tokenAddress, aggregatorAddress];
    //}
  }) as [string, string][];

  const mappedPairs = pairs.map(([asset]) => asset);
  const mappedAggregators = pairs.map(([, source]) => source);

  return [mappedPairs, mappedAggregators];
};

export const getLendingPoolAddressesProviderRegistry = async (address?: tEthereumAddress) =>
  await LendingPoolAddressesProviderRegistryFactory.connect(
    notFalsyOrZeroAddress(address)
      ? address
      : (
          await getDb()
            .get(`${eContractid.LendingPoolAddressesProviderRegistry}.${DRE.network.name}`)
            .value()
        ).address,
    await getFirstSigner()
  );

export const getReserveLogic = async (address?: tEthereumAddress) =>
  await ReserveLogicFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.ReserveLogic}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getGenericLogic = async (address?: tEthereumAddress) =>
  await GenericLogicFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.GenericLogic}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getStableAndVariableTokensHelper = async (address?: tEthereumAddress) =>
  await StableAndVariableTokensHelperFactory.connect(
    address ||
      (
        await getDb()
          .get(`${eContractid.StableAndVariableTokensHelper}.${DRE.network.name}`)
          .value()
      ).address,
    await getFirstSigner()
  );

export const getSTokensAndRatesHelper = async (address?: tEthereumAddress) =>
  await STokensAndRatesHelperFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.STokensAndRatesHelper}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getWETHGateway = async (address?: tEthereumAddress) =>
  await WETHGatewayFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.WETHGateway}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getWETHMocked = async (address?: tEthereumAddress) =>
  await WETH9MockedFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.WASTRMocked}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getMockSToken = async (address?: tEthereumAddress) =>
  await MockSTokenFactory.connect(
    address || (await getDb().get(`${eContractid.MockSToken}.${DRE.network.name}`).value()).address,
    await getFirstSigner()
  );

export const getMockVariableDebtToken = async (address?: tEthereumAddress) =>
  await MockVariableDebtTokenFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.MockVariableDebtToken}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getMockStableDebtToken = async (address?: tEthereumAddress) =>
  await MockStableDebtTokenFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.MockStableDebtToken}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getSelfdestructTransferMock = async (address?: tEthereumAddress) =>
  await SelfdestructTransferFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.SelfdestructTransferMock}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getProxy = async (address: tEthereumAddress) =>
  await RedStoneTransparentUpgradeableProxyFactory.connect(address, await getFirstSigner());

export const getLendingPoolImpl = async (address?: tEthereumAddress) =>
  await LendingPoolFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.LendingPoolImpl}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getLendingPoolConfiguratorImpl = async (address?: tEthereumAddress) =>
  await LendingPoolConfiguratorFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.LendingPoolConfiguratorImpl}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getLendingPoolCollateralManagerImpl = async (address?: tEthereumAddress) =>
  await LendingPoolCollateralManagerFactory.connect(
    address ||
      (
        await getDb()
          .get(`${eContractid.LendingPoolCollateralManagerImpl}.${DRE.network.name}`)
          .value()
      ).address,
    await getFirstSigner()
  );

export const getWalletProvider = async (address?: tEthereumAddress) =>
  await WalletBalanceProviderFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.WalletBalanceProvider}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getLendingPoolCollateralManager = async (address?: tEthereumAddress) =>
  await LendingPoolCollateralManagerFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.LendingPoolCollateralManager}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getAddressById = async (id: string): Promise<tEthereumAddress | undefined> =>
  (await getDb().get(`${id}.${DRE.network.name}`).value())?.address || undefined;

export const getSiO2Oracle = async (address?: tEthereumAddress) =>
  await SiO2OracleFactory.connect(
    address || (await getDb().get(`${eContractid.SiO2Oracle}.${DRE.network.name}`).value()).address,
    await getFirstSigner()
  );

export const getPriceAggregator = async (address?: tEthereumAddress) =>
  await PriceAggregatorAdapterRedStoneImplFactory.connect(
    address ||
      (
        await getDb()
          .get(`${eContractid.PriceAggregatorAdapterRedStoneImpl}.${DRE.network.name}`)
          .value()
      ).address,
    await getFirstSigner()
  );

export const getUiIncentiveDataProviderV2 = async (address?: tEthereumAddress) =>
  await UiIncentiveDataProviderV2Factory.connect(
    address ||
      (
        await getDb().get(`${eContractid.UiIncentiveDataProviderV2}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getUiPoolDataProviderV2 = async (address?: tEthereumAddress) =>
  await UiPoolDataProviderV2Factory.connect(
    address ||
      (
        await getDb().get(`${eContractid.UiPoolDataProviderV2}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );

export const getStakeUIHelper = async (address?: tEthereumAddress) =>
  await StakeUIHelperFactory.connect(
    address ||
      (
        await getDb().get(`${eContractid.StakeUIHelper}.${DRE.network.name}`).value()
      ).address,
    await getFirstSigner()
  );
export const getDistributionManager = async (address: tEthereumAddress) =>
  await IDistributionManagerFactory.connect(address, await getFirstSigner());

export const getSiO2IncentivesController = async (address: tEthereumAddress) =>
  await ISiO2IncentivesControllerFactory.connect(address, await getFirstSigner());
