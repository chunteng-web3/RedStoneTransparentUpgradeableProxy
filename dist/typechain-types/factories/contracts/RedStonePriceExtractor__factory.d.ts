import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { RedStonePriceExtractor, RedStonePriceExtractorInterface } from "../../contracts/RedStonePriceExtractor";
export declare class RedStonePriceExtractor__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "message";
            readonly type: "string";
        }, {
            readonly internalType: "string[]";
            readonly name: "dataFeedIDsinString";
            readonly type: "string[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "prices";
            readonly type: "uint256[]";
        }];
        readonly name: "AfterExtractPriceNotImplemented";
        readonly type: "error";
    }, {
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
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "MAX_TIMESTAMP_DIFFERENCE";
        readonly outputs: readonly [{
            readonly internalType: "uint64";
            readonly name: "";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "dataFeedIDs";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "extractPrice";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "fallbackFixedPrices";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "signerAddress";
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
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "_dataFeedIDsInString";
            readonly type: "string[]";
        }];
        readonly name: "setDataFeedIDs";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "price";
            readonly type: "uint256";
        }];
        readonly name: "setFallbackFixedPrice";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
    static createInterface(): RedStonePriceExtractorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RedStonePriceExtractor;
}
