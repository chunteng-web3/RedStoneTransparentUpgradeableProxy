import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../common";
export interface RedStoneTransparentUpgradeableProxyInterface extends utils.Interface {
    functions: {
        "_autoSetRedStonePayloadLength()": FunctionFragment;
        "_getRedStonePayloadLength()": FunctionFragment;
        "_getRedstonePriceExtractor()": FunctionFragment;
        "_setRedStonePriceExtractor(address)": FunctionFragment;
        "admin()": FunctionFragment;
        "aggregateValues(uint256[])": FunctionFragment;
        "extractTimestampsAndAssertAllAreEqual()": FunctionFragment;
        "getAuthorisedSignerIndex(address)": FunctionFragment;
        "getDataServiceId()": FunctionFragment;
        "getUniqueSignersThreshold()": FunctionFragment;
        "migrateFromNonUpgradeableContract(address,bytes[])": FunctionFragment;
        "validateTimestamp(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_autoSetRedStonePayloadLength" | "_getRedStonePayloadLength" | "_getRedstonePriceExtractor" | "_setRedStonePriceExtractor" | "admin" | "aggregateValues" | "extractTimestampsAndAssertAllAreEqual" | "getAuthorisedSignerIndex" | "getDataServiceId" | "getUniqueSignersThreshold" | "migrateFromNonUpgradeableContract" | "validateTimestamp"): FunctionFragment;
    encodeFunctionData(functionFragment: "_autoSetRedStonePayloadLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "_getRedStonePayloadLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "_getRedstonePriceExtractor", values?: undefined): string;
    encodeFunctionData(functionFragment: "_setRedStonePriceExtractor", values: [string]): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "aggregateValues", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "extractTimestampsAndAssertAllAreEqual", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAuthorisedSignerIndex", values: [string]): string;
    encodeFunctionData(functionFragment: "getDataServiceId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getUniqueSignersThreshold", values?: undefined): string;
    encodeFunctionData(functionFragment: "migrateFromNonUpgradeableContract", values: [string, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "validateTimestamp", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "_autoSetRedStonePayloadLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_getRedStonePayloadLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_getRedstonePriceExtractor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_setRedStonePriceExtractor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "aggregateValues", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extractTimestampsAndAssertAllAreEqual", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAuthorisedSignerIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDataServiceId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUniqueSignersThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "migrateFromNonUpgradeableContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateTimestamp", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "FailedInjectedExtraction(string,address,uint256,uint256,bool,bytes,bytes,bytes)": EventFragment;
        "MigratedFromNonUpgradeableContract(address,bytes[],string)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FailedInjectedExtraction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MigratedFromNonUpgradeableContract"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface FailedInjectedExtractionEventObject {
    message: string;
    redStonePriceExtractor: string;
    redStonePayloadLength: BigNumber;
    msgDataLength: BigNumber;
    delegatedCallResult: boolean;
    _calldata: string;
    _redStonePayload: string;
    delegatedReturnedData: string;
}
export type FailedInjectedExtractionEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    boolean,
    string,
    string,
    string
], FailedInjectedExtractionEventObject>;
export type FailedInjectedExtractionEventFilter = TypedEventFilter<FailedInjectedExtractionEvent>;
export interface MigratedFromNonUpgradeableContractEventObject {
    nonUpgradeableContract: string;
    args: string[];
    message: string;
}
export type MigratedFromNonUpgradeableContractEvent = TypedEvent<[
    string,
    string[],
    string
], MigratedFromNonUpgradeableContractEventObject>;
export type MigratedFromNonUpgradeableContractEventFilter = TypedEventFilter<MigratedFromNonUpgradeableContractEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface RedStoneTransparentUpgradeableProxy extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RedStoneTransparentUpgradeableProxyInterface;
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
        _autoSetRedStonePayloadLength(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        _getRedStonePayloadLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        _getRedstonePriceExtractor(overrides?: CallOverrides): Promise<[string]>;
        _setRedStonePriceExtractor(redStonePriceExtractor: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        aggregateValues(values: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber]>;
        extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<[BigNumber] & {
            extractedTimestamp: BigNumber;
        }>;
        getAuthorisedSignerIndex(signerAddress: string, overrides?: CallOverrides): Promise<[number]>;
        getDataServiceId(overrides?: CallOverrides): Promise<[string]>;
        getUniqueSignersThreshold(overrides?: CallOverrides): Promise<[number]>;
        migrateFromNonUpgradeableContract(nonUpgradeableContract: string, args: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        validateTimestamp(receivedTimestampMilliseconds: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
    };
    _autoSetRedStonePayloadLength(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    _getRedStonePayloadLength(overrides?: CallOverrides): Promise<BigNumber>;
    _getRedstonePriceExtractor(overrides?: CallOverrides): Promise<string>;
    _setRedStonePriceExtractor(redStonePriceExtractor: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    admin(overrides?: CallOverrides): Promise<string>;
    aggregateValues(values: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
    extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<BigNumber>;
    getAuthorisedSignerIndex(signerAddress: string, overrides?: CallOverrides): Promise<number>;
    getDataServiceId(overrides?: CallOverrides): Promise<string>;
    getUniqueSignersThreshold(overrides?: CallOverrides): Promise<number>;
    migrateFromNonUpgradeableContract(nonUpgradeableContract: string, args: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    validateTimestamp(receivedTimestampMilliseconds: BigNumberish, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        _autoSetRedStonePayloadLength(overrides?: CallOverrides): Promise<void>;
        _getRedStonePayloadLength(overrides?: CallOverrides): Promise<BigNumber>;
        _getRedstonePriceExtractor(overrides?: CallOverrides): Promise<string>;
        _setRedStonePriceExtractor(redStonePriceExtractor: string, overrides?: CallOverrides): Promise<void>;
        admin(overrides?: CallOverrides): Promise<string>;
        aggregateValues(values: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<BigNumber>;
        getAuthorisedSignerIndex(signerAddress: string, overrides?: CallOverrides): Promise<number>;
        getDataServiceId(overrides?: CallOverrides): Promise<string>;
        getUniqueSignersThreshold(overrides?: CallOverrides): Promise<number>;
        migrateFromNonUpgradeableContract(nonUpgradeableContract: string, args: BytesLike[], overrides?: CallOverrides): Promise<void>;
        validateTimestamp(receivedTimestampMilliseconds: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: string | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;
        "FailedInjectedExtraction(string,address,uint256,uint256,bool,bytes,bytes,bytes)"(message?: null, redStonePriceExtractor?: null, redStonePayloadLength?: null, msgDataLength?: null, delegatedCallResult?: null, _calldata?: null, _redStonePayload?: null, delegatedReturnedData?: null): FailedInjectedExtractionEventFilter;
        FailedInjectedExtraction(message?: null, redStonePriceExtractor?: null, redStonePayloadLength?: null, msgDataLength?: null, delegatedCallResult?: null, _calldata?: null, _redStonePayload?: null, delegatedReturnedData?: null): FailedInjectedExtractionEventFilter;
        "MigratedFromNonUpgradeableContract(address,bytes[],string)"(nonUpgradeableContract?: null, args?: null, message?: null): MigratedFromNonUpgradeableContractEventFilter;
        MigratedFromNonUpgradeableContract(nonUpgradeableContract?: null, args?: null, message?: null): MigratedFromNonUpgradeableContractEventFilter;
        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
    };
    estimateGas: {
        _autoSetRedStonePayloadLength(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        _getRedStonePayloadLength(overrides?: CallOverrides): Promise<BigNumber>;
        _getRedstonePriceExtractor(overrides?: CallOverrides): Promise<BigNumber>;
        _setRedStonePriceExtractor(redStonePriceExtractor: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        aggregateValues(values: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<BigNumber>;
        getAuthorisedSignerIndex(signerAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        getDataServiceId(overrides?: CallOverrides): Promise<BigNumber>;
        getUniqueSignersThreshold(overrides?: CallOverrides): Promise<BigNumber>;
        migrateFromNonUpgradeableContract(nonUpgradeableContract: string, args: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        validateTimestamp(receivedTimestampMilliseconds: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _autoSetRedStonePayloadLength(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        _getRedStonePayloadLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _getRedstonePriceExtractor(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _setRedStonePriceExtractor(redStonePriceExtractor: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        aggregateValues(values: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extractTimestampsAndAssertAllAreEqual(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAuthorisedSignerIndex(signerAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDataServiceId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUniqueSignersThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        migrateFromNonUpgradeableContract(nonUpgradeableContract: string, args: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        validateTimestamp(receivedTimestampMilliseconds: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
