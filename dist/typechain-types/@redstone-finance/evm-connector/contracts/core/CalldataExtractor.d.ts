import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface CalldataExtractorInterface extends utils.Interface {
    functions: {
        "extractTimestampsAndAssertAllAreEqual()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "extractTimestampsAndAssertAllAreEqual"): FunctionFragment;
    encodeFunctionData(functionFragment: "extractTimestampsAndAssertAllAreEqual", values?: undefined): string;
    decodeFunctionResult(functionFragment: "extractTimestampsAndAssertAllAreEqual", data: BytesLike): Result;
    events: {};
}
export interface CalldataExtractor extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CalldataExtractorInterface;
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
        extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<[BigNumber] & {
            extractedTimestamp: BigNumber;
        }>;
    };
    extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
