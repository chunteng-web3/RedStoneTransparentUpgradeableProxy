import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface IPriceAggregatorAdapterInterface extends utils.Interface {
    functions: {
        "currentPrice(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "currentPrice"): FunctionFragment;
    encodeFunctionData(functionFragment: "currentPrice", values: [string]): string;
    decodeFunctionResult(functionFragment: "currentPrice", data: BytesLike): Result;
    events: {};
}
export interface IPriceAggregatorAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPriceAggregatorAdapterInterface;
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
        currentPrice(asset: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    currentPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        currentPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        currentPrice(asset: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        currentPrice(asset: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
