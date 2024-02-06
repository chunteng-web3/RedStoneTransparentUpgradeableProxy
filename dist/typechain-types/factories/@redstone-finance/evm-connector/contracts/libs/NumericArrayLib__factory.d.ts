import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NumericArrayLib, NumericArrayLibInterface } from "../../../../../@redstone-finance/evm-connector/contracts/libs/NumericArrayLib";
type NumericArrayLibConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NumericArrayLib__factory extends ContractFactory {
    constructor(...args: NumericArrayLibConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<NumericArrayLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): NumericArrayLib;
    connect(signer: Signer): NumericArrayLib__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208c0ebee31475268e3349ab2d83b77f2267a317e4b0d9f8b5b585fd402c61a71164736f6c63430008150033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "CanNotPickMedianOfEmptyArray";
        readonly type: "error";
    }];
    static createInterface(): NumericArrayLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NumericArrayLib;
}
export {};
