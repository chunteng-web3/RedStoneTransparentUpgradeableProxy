import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RedstoneConstants, RedstoneConstantsInterface } from "../../../../../@redstone-finance/evm-connector/contracts/core/RedstoneConstants";
type RedstoneConstantsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RedstoneConstants__factory extends ContractFactory {
    constructor(...args: RedstoneConstantsConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<RedstoneConstants>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): RedstoneConstants;
    connect(signer: Signer): RedstoneConstants__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212208ffaf398ad238e7f0e01d93bc571357c386cd073d6f18151718268ab7ee48cd164736f6c63430008150033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "CalldataMustHaveValidPayload";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CalldataOverOrUnderFlow";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "EachSignerMustProvideTheSameValue";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "EmptyCalldataPointersArr";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "IncorrectUnsignedMetadataSize";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "receivedSignersCount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "requiredSignersCount";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientNumberOfUniqueSigners";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCalldataPointer";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receivedSigner";
            readonly type: "address";
        }];
        readonly name: "SignerNotAuthorised";
        readonly type: "error";
    }];
    static createInterface(): RedstoneConstantsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RedstoneConstants;
}
export {};
