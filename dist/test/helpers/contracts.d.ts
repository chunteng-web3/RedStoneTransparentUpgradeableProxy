import { Contract, ContractTransaction, Signer } from "ethers";
export interface SignerWithAddress {
    signer: Signer;
    address: string;
}
export declare const getEthersSigners: () => Promise<Signer[]>;
export declare const getFirstSigner: () => Promise<Signer>;
export declare const waitForTx: (tx: ContractTransaction) => Promise<import("ethers").ContractReceipt>;
export declare const deployContract: <ContractType extends Contract>(contractName: string, args: any[]) => Promise<ContractType>;
export declare const getContract: <ContractType extends Contract>(contractName: string, address: string) => Promise<ContractType>;
