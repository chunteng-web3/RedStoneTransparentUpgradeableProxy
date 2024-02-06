import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RedstoneDefaultsLib, RedstoneDefaultsLibInterface } from "../../../../../@redstone-finance/evm-connector/contracts/core/RedstoneDefaultsLib";
type RedstoneDefaultsLibConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RedstoneDefaultsLib__factory extends ContractFactory {
    constructor(...args: RedstoneDefaultsLibConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<RedstoneDefaultsLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): RedstoneDefaultsLib;
    connect(signer: Signer): RedstoneDefaultsLib__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220e70364bf65cbefb73c70562f7efd6b08fcd48cfe8ea72812c4997b69bebc27ba64736f6c63430008150033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "receivedTimestampSeconds";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "blockTimestamp";
            readonly type: "uint256";
        }];
        readonly name: "TimestampFromTooLongFuture";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "receivedTimestampSeconds";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "blockTimestamp";
            readonly type: "uint256";
        }];
        readonly name: "TimestampIsTooOld";
        readonly type: "error";
    }];
    static createInterface(): RedstoneDefaultsLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RedstoneDefaultsLib;
}
export {};
