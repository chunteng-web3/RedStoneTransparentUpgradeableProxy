import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPriceAggregatorAdapter, IPriceAggregatorAdapterInterface } from "../../../contracts/example/IPriceAggregatorAdapter";
export declare class IPriceAggregatorAdapter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "asset";
            readonly type: "address";
        }];
        readonly name: "currentPrice";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IPriceAggregatorAdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPriceAggregatorAdapter;
}
