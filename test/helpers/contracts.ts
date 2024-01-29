import { Contract, ContractTransaction, Signer } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";

export interface SignerWithAddress {
  signer: Signer;
  address: string;
}

export let HRE: HardhatRuntimeEnvironment

export const getEthersSigners = async (): Promise<Signer[]> => {
  const ethersSigners = await Promise.all(await HRE.ethers.getSigners());
  // if (usingDefender()) {
  //   const [, ...users] = ethersSigners;
  //   return [await getDefenderRelaySigner(), ...users];
  // }
  return ethersSigners;
};

export const getFirstSigner = async () => (await getEthersSigners())[0];
export const waitForTx = async (tx: ContractTransaction) => await tx.wait(1);

export const deployContract = async <ContractType extends Contract>(
  contractName: string,
  args: any[]
): Promise<ContractType> => {
  const contract = (await (await HRE.ethers.getContractFactory(contractName))
    .connect(await getFirstSigner())
    .deploy(...args)) as ContractType;
  await waitForTx(contract.deployTransaction);
  return contract;
};

export const getContract = async <ContractType extends Contract>(
  contractName: string,
  address: string
): Promise<ContractType> => (await HRE.ethers.getContractAt(contractName, address)) as ContractType;