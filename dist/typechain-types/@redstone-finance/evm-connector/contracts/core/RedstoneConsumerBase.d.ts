import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface RedstoneConsumerBaseInterface extends utils.Interface {
    functions: {
        "aggregateValues(uint256[])": FunctionFragment;
        "extractTimestampsAndAssertAllAreEqual()": FunctionFragment;
        "getAuthorisedSignerIndex(address)": FunctionFragment;
        "getDataServiceId()": FunctionFragment;
        "getUniqueSignersThreshold()": FunctionFragment;
        "validateTimestamp(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "aggregateValues" | "extractTimestampsAndAssertAllAreEqual" | "getAuthorisedSignerIndex" | "getDataServiceId" | "getUniqueSignersThreshold" | "validateTimestamp"): FunctionFragment;
    encodeFunctionData(functionFragment: "aggregateValues", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "extractTimestampsAndAssertAllAreEqual", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAuthorisedSignerIndex", values: [string]): string;
    encodeFunctionData(functionFragment: "getDataServiceId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUniqueSignersThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "validateTimestamp", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "aggregateValues", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extractTimestampsAndAssertAllAreEqual", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAuthorisedSignerIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDataServiceId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUniqueSignersThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateTimestamp", data: BytesLike): Result;
    events: {};
}
export interface RedstoneConsumerBase extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RedstoneConsumerBaseInterface;
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
        aggregateValues(values: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber]>;
        extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<[BigNumber] & {
            extractedTimestamp: BigNumber;
        }>;
        getAuthorisedSignerIndex(receivedSigner: string, overrides?: CallOverrides): Promise<[number]>;
        getDataServiceId(overrides?: CallOverrides): Promise<[string]>;
        getUniqueSignersThreshold(overrides?: CallOverrides): Promise<[number]>;
        validateTimestamp(receivedTimestampMilliseconds: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
    };
    aggregateValues(values: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
    extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<BigNumber>;
    getAuthorisedSignerIndex(receivedSigner: string, overrides?: CallOverrides): Promise<number>;
    getDataServiceId(overrides?: CallOverrides): Promise<string>;
    getUniqueSignersThreshold(overrides?: CallOverrides): Promise<number>;
    validateTimestamp(receivedTimestampMilliseconds: BigNumberish, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        aggregateValues(values: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<BigNumber>;
        getAuthorisedSignerIndex(receivedSigner: string, overrides?: CallOverrides): Promise<number>;
        getDataServiceId(overrides?: CallOverrides): Promise<string>;
        getUniqueSignersThreshold(overrides?: CallOverrides): Promise<number>;
        validateTimestamp(receivedTimestampMilliseconds: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        aggregateValues(values: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<BigNumber>;
        getAuthorisedSignerIndex(receivedSigner: string, overrides?: CallOverrides): Promise<BigNumber>;
        getDataServiceId(overrides?: CallOverrides): Promise<BigNumber>;
        getUniqueSignersThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        validateTimestamp(receivedTimestampMilliseconds: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        aggregateValues(values: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAuthorisedSignerIndex(receivedSigner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDataServiceId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUniqueSignersThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validateTimestamp(receivedTimestampMilliseconds: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}