import { BuidlerRuntimeEnvironment } from '@nomiclabs/buidler/types';
import BigNumber from 'bignumber.js';
import { isZeroAddress } from 'ethereumjs-util';
import { ContractTransaction, Wallet } from 'ethers';
import { isAddress } from 'ethers/lib/utils';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { SignerWithAddress } from '../test-suites/test-sio2/helpers/make-suite';
import { WAD } from './constants';
import { usingTenderly } from './tenderly-utils';
import {
  ICommonConfiguration,
  IIncentiveRewardStrategy,
  eAstarNetwork,
  eEthereumNetwork,
  eNetwork,
  tEthereumAddress,
} from './types';

import BN = require('bn.js');
import {
  getSToken,
  getSiO2IncentivesController,
  getSiO2ProtocolDataProvider,
} from './contracts-getters';
import { getParamPerNetwork } from './contracts-helpers';
import { ConfigNames, loadPoolConfig } from './configuration';

export const toWad = (value: string | number) => new BigNumber(value).times(WAD).toFixed();

export const bnToBigNumber = (amount: BN): BigNumber => new BigNumber(<any>amount);
export const stringToBigNumber = (amount: string): BigNumber => new BigNumber(amount);

export const getDb = () => low(new FileSync('./deployed-contracts.json'));

export const DB_LAST_BLK_HT = 'lastBlkHeight';
export const DB_USERS = 'users';
export const DB_PROFITS = 'profits';

export const getUsersDb = async () => {
  const db = low(new FileSync('./users.json'));
  if (!db.get(DB_LAST_BLK_HT).value()) {
    db.set(DB_LAST_BLK_HT, 0);
  }
  if (!db.get(DB_USERS).value()) {
    db.set(DB_USERS, {});
  }
  return db;
};

export const getProfitsDb = async () => {
  const db = low(new FileSync('./profits.json'));
  if (!db.get(DB_PROFITS).value()) {
    db.set(DB_PROFITS, []);
  }
  return db;
};

export type BigNumberValue = string | number | BigNumber;

export const BigNumberZD = BigNumber.clone({
  DECIMAL_PLACES: 0,
  ROUNDING_MODE: BigNumber.ROUND_DOWN,
});

export function valueToBigNumber(amount: BigNumberValue): BigNumber {
  return new BigNumber(amount);
}
export function valueToZDBigNumber(amount: BigNumberValue): BigNumber {
  return new BigNumberZD(amount);
}

export function normalize(n: BigNumberValue, decimals: number): string {
  return new BigNumber(n).dividedBy(new BigNumber('10').pow(decimals)).toString(10);
}

export function normalizeNoDecimals(n: BigNumberValue, decimals: number): string {
  return new BigNumber(n)
    .dividedBy(new BigNumber('10').pow(decimals))
    .decimalPlaces(0)
    .toString(10);
}

export let DRE: HardhatRuntimeEnvironment | BuidlerRuntimeEnvironment;

export const setDRE = (_DRE: HardhatRuntimeEnvironment | BuidlerRuntimeEnvironment) => {
  DRE = _DRE;
};

export const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const createRandomAddress = () => Wallet.createRandom().address;

export const evmSnapshot = async () => await DRE.ethers.provider.send('evm_snapshot', []);

export const evmRevert = async (id: string) => DRE.ethers.provider.send('evm_revert', [id]);

export const timeLatest = async () => {
  const block = await DRE.ethers.provider.getBlock('latest');
  return new BigNumber(block.timestamp);
};

export const advanceBlock = async (timestamp: number) =>
  await DRE.ethers.provider.send('evm_mine', [timestamp]);

export const increaseTime = async (secondsToIncrease: number) => {
  await DRE.ethers.provider.send('evm_increaseTime', [secondsToIncrease]);
  await DRE.ethers.provider.send('evm_mine', []);
};

// Workaround for time travel tests bug: https://github.com/Tonyhaenn/hh-time-travel/blob/0161d993065a0b7585ec5a043af2eb4b654498b8/test/test.js#L12
export const advanceTimeAndBlock = async function (forwardTime: number) {
  const currentBlockNumber = await DRE.ethers.provider.getBlockNumber();
  const currentBlock = await DRE.ethers.provider.getBlock(currentBlockNumber);

  if (currentBlock === null) {
    /* Workaround for https://github.com/nomiclabs/hardhat/issues/1183
     */
    await DRE.ethers.provider.send('evm_increaseTime', [forwardTime]);
    await DRE.ethers.provider.send('evm_mine', []);
    //Set the next blocktime back to 15 seconds
    await DRE.ethers.provider.send('evm_increaseTime', [15]);
    return;
  }
  const currentTime = currentBlock.timestamp;
  const futureTime = currentTime + forwardTime;
  await DRE.ethers.provider.send('evm_setNextBlockTimestamp', [futureTime]);
  await DRE.ethers.provider.send('evm_mine', []);
};

export const waitForTx = async (tx: ContractTransaction) => await tx.wait(1);

export const filterMapBy = (raw: { [key: string]: any }, fn: (key: string) => boolean) =>
  Object.keys(raw)
    .filter(fn)
    .reduce<{ [key: string]: any }>((obj, key) => {
      obj[key] = raw[key];
      return obj;
    }, {});

export const chunk = <T>(arr: Array<T>, chunkSize: number): Array<Array<T>> => {
  return arr.reduce(
    (prevVal: any, currVal: any, currIndx: number, array: Array<T>) =>
      !(currIndx % chunkSize)
        ? prevVal.concat([array.slice(currIndx, currIndx + chunkSize)])
        : prevVal,
    []
  );
};

interface DbEntry {
  [network: string]: {
    deployer: string;
    address: string;
  };
}

export const printContracts = () => {
  const network = DRE.network.name;
  const db = getDb();
  console.log('Contracts deployed at', network);
  console.log('---------------------------------');

  const entries = Object.entries<DbEntry>(db.getState()).filter(([_k, value]) => !!value[network]);

  const contractsPrint = entries.map(
    ([key, value]: [string, DbEntry]) => `${key}: ${value[network].address}`
  );

  console.log('N# Contracts:', entries.length);
  console.log(contractsPrint.join('\n'), '\n');
};

export const notFalsyOrZeroAddress = (address: tEthereumAddress | null | undefined): boolean => {
  if (!address) {
    return false;
  }
  return isAddress(address) && !isZeroAddress(address);
};

export const impersonateAddress = async (address: tEthereumAddress): Promise<SignerWithAddress> => {
  if (!usingTenderly()) {
    await (DRE as HardhatRuntimeEnvironment).network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: [address],
    });
  }
  const signer = await DRE.ethers.provider.getSigner(address);

  return {
    signer,
    address,
  };
};

export const omit = <T extends object, U extends keyof T>(obj: T, keys: U[]): Omit<T, U> =>
  (Object.keys(obj) as U[]).reduce(
    (acc, curr) => (keys.includes(curr) ? acc : { ...acc, [curr]: obj[curr] }),
    {} as Omit<T, U>
  );

export const impersonateAccountsHardhat = async (accounts: string[]) => {
  if (process.env.TENDERLY === 'true') {
    return;
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const account of accounts) {
    // eslint-disable-next-line no-await-in-loop
    await (DRE as HardhatRuntimeEnvironment).network.provider.request({
      method: 'hardhat_impersonateAccount',
      params: [account],
    });
  }
};

export const validateIncentiveRewardStrategy = async (
  initialTotalSupply: BigNumber,
  incentivesControllerAddress: string,
  pool: ConfigNames,
  network: eNetwork,
  candidateIncentiveRewardStrategy?: IIncentiveRewardStrategy
): Promise<boolean> => {
  // READ: This is only intended to validate IncentiveRewardStrategy with no stable rate lending.
  interface IncentiveRewardDetails {
    symbol: string;
    incentiveIntialSupply: BigNumber;
    incentiveInflationStart: BigNumber;
    incentiveDecayRatio: BigNumber;
    sIncentivesLastUpdateTimestamp: BigNumber;
    decayCounter: number;
    decayedSupply: BigNumber;
  }
  const helpersContract = await getSiO2ProtocolDataProvider();
  const poolConfig = loadPoolConfig(pool);
  const { IncentiveRewardStrategy } = poolConfig as ICommonConfiguration;

  // READ: We are directly using configurations from astar network for hardhat network.
  if (network === eEthereumNetwork.hardhat) {
    network = eAstarNetwork.astar;
  }
  const incentiveRewardStrategy = getParamPerNetwork(IncentiveRewardStrategy, network);

  const incentivesController = await getSiO2IncentivesController(incentivesControllerAddress);
  const allSTokens = await helpersContract.getAllSTokens();

  let allIncentiveRewardDetails: IncentiveRewardDetails[] = [];
  for (const sToken of allSTokens) {
    const sTokenContract = await getSToken(sToken.tokenAddress);
    let config = incentiveRewardStrategy[sToken.symbol.substring(1)];
    if (['WBNB', 'WDOT'].includes(sToken.symbol.substring(1))) {
      config = incentiveRewardStrategy[sToken.symbol.substring(2)];
    }
    let localInitialSupply: string, localDecayRatio: string;
    const reponseAssetData = await incentivesController.assets(sTokenContract.address);
    const incentiveIntialSupply = reponseAssetData[0];
    const incentiveInflationStart = reponseAssetData[1];
    const incentiveDecayRatio = reponseAssetData[2];
    const sIncentivesLastUpdateTimestamp = reponseAssetData[3];
    // TODO: Spin the mockedIncentiveController.
    if (sToken.symbol === 'sNEW') {
      // Accomodating for test `add-new-assets.spec.ts`.
      localInitialSupply = incentiveIntialSupply.toString();
      localDecayRatio = incentiveDecayRatio.toString();
    } else {
      localInitialSupply = config['Deposit'].intialSupply;
      localDecayRatio = config['Deposit'].decayRatio;
    }
    const startDate = new Date(Number(incentiveInflationStart) * 1000);
    const endDate = new Date(Number(sIncentivesLastUpdateTimestamp) * 1000);
    if (incentiveIntialSupply && localInitialSupply !== incentiveIntialSupply.toString()) {
      console.log(
        `Local initial supply (${localInitialSupply}) does not match incentive initial supply (${incentiveIntialSupply}) for configured asset ${sToken.symbol}. If this is not a new asset, please check your configuration. `
      );
    }
    if (incentiveDecayRatio && localDecayRatio !== incentiveDecayRatio.toString()) {
      console.log(
        `Local decay ratio (${localDecayRatio}) does not match incentive decay ratio (${incentiveDecayRatio}) for configured asset ${sToken.symbol}. If this is not a new asset, please check your configuration. `
      );
    }
    // READ: Such conversion is necessary as there was a mixture of using 'bignumber.js' and 'BigNumber' from 'ethers'.
    const incentiveIntialSupplyBigNumber = new BigNumber(incentiveIntialSupply.toString());
    const incentiveDecayRatioBigNumber = new BigNumber(incentiveDecayRatio.toString());
    const sIncentivesLastUpdateTimestampBigNumber = new BigNumber(
      sIncentivesLastUpdateTimestamp.toString()
    );
    const incentiveInflationStartBigNumber = new BigNumber(incentiveInflationStart.toString());
    allIncentiveRewardDetails.push({
      symbol: sToken.symbol,
      incentiveIntialSupply: incentiveIntialSupplyBigNumber,
      incentiveInflationStart: incentiveInflationStartBigNumber,
      incentiveDecayRatio: incentiveDecayRatioBigNumber,
      sIncentivesLastUpdateTimestamp: sIncentivesLastUpdateTimestampBigNumber,
      decayCounter:
        endDate.getMonth() -
        startDate.getMonth() +
        (endDate.getFullYear() - startDate.getFullYear()) * 12,
      decayedSupply: new BigNumber(
        Number(incentiveIntialSupply) *
          Math.pow(
            Number(incentiveDecayRatio) / 10e18,
            endDate.getMonth() -
              startDate.getMonth() +
              (endDate.getFullYear() - startDate.getFullYear()) * 12
          )
      ),
    });
  }
  if (candidateIncentiveRewardStrategy) {
    const candidateSymbol = Object.keys(candidateIncentiveRewardStrategy)[0];
    const candidateInitialSupplyBigNumber = new BigNumber(
      candidateIncentiveRewardStrategy[candidateSymbol]['Deposit'].intialSupply.toString()
    );
    const candidateIncentiveDecayRatioBigNumber = new BigNumber(
      candidateIncentiveRewardStrategy[candidateSymbol]['Deposit'].decayRatio.toString()
    );
    allIncentiveRewardDetails.push({
      symbol: candidateSymbol,
      incentiveIntialSupply: candidateInitialSupplyBigNumber,
      incentiveInflationStart: new BigNumber(Date.now()),
      incentiveDecayRatio: candidateIncentiveDecayRatioBigNumber,
      sIncentivesLastUpdateTimestamp: new BigNumber(Date.now()),
      decayCounter: 0,
      decayedSupply: candidateInitialSupplyBigNumber,
    });
  }
  const genesisDecayCounter = allIncentiveRewardDetails.reduce(
    (largest, sToken) => Math.max(sToken.decayCounter, largest),
    0
  );
  const sumInitialSupplies = allIncentiveRewardDetails.reduce(
    (sum, sToken) => sum.plus(sToken.incentiveIntialSupply),
    new BigNumber(0)
  );
  const sumDecayedSupplies = allIncentiveRewardDetails.reduce(
    (sum, sToken) => sum.plus(sToken.decayedSupply),
    new BigNumber(0)
  );
  if (sumInitialSupplies.eq(sumDecayedSupplies)) {
    console.log(
      'Warning: Detected no decay of supplies. This would be normal only if no decaying has happened.'
    );
  } else {
    console.log('Decay detected: the genesisDecayCounter is ', genesisDecayCounter);
  }

  const expectedMaxSupply = new BigNumber(initialTotalSupply).multipliedBy(
    new BigNumber(Math.pow(10, 18) * Math.pow(0.98, genesisDecayCounter))
  );
  return expectedMaxSupply.gte(sumDecayedSupplies);
};
