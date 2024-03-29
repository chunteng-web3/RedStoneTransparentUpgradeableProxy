import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { RedstoneConsumerNumericBase, RedstoneConsumerNumericBaseInterface } from "../../../../../@redstone-finance/evm-connector/contracts/core/RedstoneConsumerNumericBase";
export declare class RedstoneConsumerNumericBase__factory {
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
        readonly name: "CanNotPickMedianOfEmptyArray";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DataPackageTimestampMustNotBeZero";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DataPackageTimestampsMustBeEqual";
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
        readonly name: "GetDataServiceIdNotImplemented";
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
        readonly inputs: readonly [];
        readonly name: "RedstonePayloadMustHaveAtLeastOneDataPackage";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receivedSigner";
            readonly type: "address";
        }];
        readonly name: "SignerNotAuthorised";
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }];
        readonly name: "aggregateValues";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "extractTimestampsAndAssertAllAreEqual";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "extractedTimestamp";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receivedSigner";
            readonly type: "address";
        }];
        readonly name: "getAuthorisedSignerIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDataServiceId";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getUniqueSignersThreshold";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "receivedTimestampMilliseconds";
            readonly type: "uint256";
        }];
        readonly name: "validateTimestamp";
        readonly outputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): RedstoneConsumerNumericBaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RedstoneConsumerNumericBase;
}
