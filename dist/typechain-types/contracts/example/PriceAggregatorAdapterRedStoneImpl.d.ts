import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace RedStonePriceExtractor {
    type TimedPriceStruct = {
        dataFeedIDinString: string;
        blockNumber: BigNumberish;
        blockTimestamp: BigNumberish;
        price: BigNumberish;
    };
    type TimedPriceStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        dataFeedIDinString: string;
        blockNumber: BigNumber;
        blockTimestamp: BigNumber;
        price: BigNumber;
    };
}
export interface PriceAggregatorAdapterRedStoneImplInterface extends utils.Interface {
    functions: {
        "MAX_TIMESTAMP_DIFFERENCE()": FunctionFragment;
        "aggregateValues(uint256[])": FunctionFragment;
        "currentPrice(address)": FunctionFragment;
        "dataFeedIDs(uint256)": FunctionFragment;
        "extractPrice()": FunctionFragment;
        "extractTimestampsAndAssertAllAreEqual()": FunctionFragment;
        "fallbackFixedPrices(address)": FunctionFragment;
        "getAuthorisedSignerIndex(address)": FunctionFragment;
        "getDataServiceId()": FunctionFragment;
        "getUniqueSignersThreshold()": FunctionFragment;
        "latestTimedPrice(address)": FunctionFragment;
        "manualUpdatePrices()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setAssetSources(address[],string[])": FunctionFragment;
        "setDataFeedIDs(string[])": FunctionFragment;
        "setFallbackFixedPrice(address,uint256)": FunctionFragment;
        "symbols(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "validateTimestamp(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "MAX_TIMESTAMP_DIFFERENCE" | "aggregateValues" | "currentPrice" | "dataFeedIDs" | "extractPrice" | "extractTimestampsAndAssertAllAreEqual" | "fallbackFixedPrices" | "getAuthorisedSignerIndex" | "getDataServiceId" | "getUniqueSignersThreshold" | "latestTimedPrice" | "manualUpdatePrices" | "owner" | "renounceOwnership" | "setAssetSources" | "setDataFeedIDs" | "setFallbackFixedPrice" | "symbols" | "transferOwnership" | "validateTimestamp"): FunctionFragment;
    encodeFunctionData(functionFragment: "MAX_TIMESTAMP_DIFFERENCE", values?: undefined): string;
    encodeFunctionData(functionFragment: "aggregateValues", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "currentPrice", values: [string]): string;
    encodeFunctionData(functionFragment: "dataFeedIDs", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "extractPrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "extractTimestampsAndAssertAllAreEqual", values?: undefined): string;
    encodeFunctionData(functionFragment: "fallbackFixedPrices", values: [string]): string;
    encodeFunctionData(functionFragment: "getAuthorisedSignerIndex", values: [string]): string;
    encodeFunctionData(functionFragment: "getDataServiceId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUniqueSignersThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "latestTimedPrice", values: [string]): string;
    encodeFunctionData(functionFragment: "manualUpdatePrices", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAssetSources", values: [string[], string[]]): string;
    encodeFunctionData(functionFragment: "setDataFeedIDs", values: [string[]]): string;
    encodeFunctionData(functionFragment: "setFallbackFixedPrice", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "symbols", values: [string]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "validateTimestamp", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "MAX_TIMESTAMP_DIFFERENCE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "aggregateValues", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dataFeedIDs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extractPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extractTimestampsAndAssertAllAreEqual", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fallbackFixedPrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAuthorisedSignerIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDataServiceId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUniqueSignersThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestTimedPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "manualUpdatePrices", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAssetSources", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDataFeedIDs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFallbackFixedPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbols", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateTimestamp", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PriceAggregatorAdapterRedStoneImpl extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PriceAggregatorAdapterRedStoneImplInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        MAX_TIMESTAMP_DIFFERENCE(overrides?: CallOverrides): Promise<[BigNumber]>;
        aggregateValues(values: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber]>;
        currentPrice(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        dataFeedIDs(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        extractPrice(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<[BigNumber] & {
            extractedTimestamp: BigNumber;
        }>;
        fallbackFixedPrices(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getAuthorisedSignerIndex(signerAddress: string, overrides?: CallOverrides): Promise<[number]>;
        getDataServiceId(overrides?: CallOverrides): Promise<[string]>;
        getUniqueSignersThreshold(overrides?: CallOverrides): Promise<[number]>;
        latestTimedPrice(asset: string, overrides?: CallOverrides): Promise<[RedStonePriceExtractor.TimedPriceStructOutput]>;
        manualUpdatePrices(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setAssetSources(assets: string[], tokenSymbols: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setDataFeedIDs(_dataFeedIDsInString: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setFallbackFixedPrice(asset: string, price: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        symbols(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        validateTimestamp(receivedTimestampMilliseconds: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
    };
    MAX_TIMESTAMP_DIFFERENCE(overrides?: CallOverrides): Promise<BigNumber>;
    aggregateValues(values: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
    currentPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    dataFeedIDs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    extractPrice(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<BigNumber>;
    fallbackFixedPrices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    getAuthorisedSignerIndex(signerAddress: string, overrides?: CallOverrides): Promise<number>;
    getDataServiceId(overrides?: CallOverrides): Promise<string>;
    getUniqueSignersThreshold(overrides?: CallOverrides): Promise<number>;
    latestTimedPrice(asset: string, overrides?: CallOverrides): Promise<RedStonePriceExtractor.TimedPriceStructOutput>;
    manualUpdatePrices(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setAssetSources(assets: string[], tokenSymbols: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setDataFeedIDs(_dataFeedIDsInString: string[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setFallbackFixedPrice(asset: string, price: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    symbols(arg0: string, overrides?: CallOverrides): Promise<string>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    validateTimestamp(receivedTimestampMilliseconds: BigNumberish, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        MAX_TIMESTAMP_DIFFERENCE(overrides?: CallOverrides): Promise<BigNumber>;
        aggregateValues(values: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        currentPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        dataFeedIDs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        extractPrice(overrides?: CallOverrides): Promise<void>;
        extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<BigNumber>;
        fallbackFixedPrices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAuthorisedSignerIndex(signerAddress: string, overrides?: CallOverrides): Promise<number>;
        getDataServiceId(overrides?: CallOverrides): Promise<string>;
        getUniqueSignersThreshold(overrides?: CallOverrides): Promise<number>;
        latestTimedPrice(asset: string, overrides?: CallOverrides): Promise<RedStonePriceExtractor.TimedPriceStructOutput>;
        manualUpdatePrices(overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setAssetSources(assets: string[], tokenSymbols: string[], overrides?: CallOverrides): Promise<void>;
        setDataFeedIDs(_dataFeedIDsInString: string[], overrides?: CallOverrides): Promise<void>;
        setFallbackFixedPrice(asset: string, price: BigNumberish, overrides?: CallOverrides): Promise<void>;
        symbols(arg0: string, overrides?: CallOverrides): Promise<string>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        validateTimestamp(receivedTimestampMilliseconds: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        MAX_TIMESTAMP_DIFFERENCE(overrides?: CallOverrides): Promise<BigNumber>;
        aggregateValues(values: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        currentPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        dataFeedIDs(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        extractPrice(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<BigNumber>;
        fallbackFixedPrices(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAuthorisedSignerIndex(signerAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        getDataServiceId(overrides?: CallOverrides): Promise<BigNumber>;
        getUniqueSignersThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        latestTimedPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
        manualUpdatePrices(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setAssetSources(assets: string[], tokenSymbols: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setDataFeedIDs(_dataFeedIDsInString: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setFallbackFixedPrice(asset: string, price: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        symbols(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        validateTimestamp(receivedTimestampMilliseconds: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        MAX_TIMESTAMP_DIFFERENCE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        aggregateValues(values: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        currentPrice(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        dataFeedIDs(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extractPrice(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fallbackFixedPrices(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAuthorisedSignerIndex(signerAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDataServiceId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUniqueSignersThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestTimedPrice(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        manualUpdatePrices(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setAssetSources(assets: string[], tokenSymbols: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setDataFeedIDs(_dataFeedIDsInString: string[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setFallbackFixedPrice(asset: string, price: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        symbols(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        validateTimestamp(receivedTimestampMilliseconds: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
