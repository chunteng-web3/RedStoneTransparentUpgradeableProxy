import { WrapperBuilder } from "@redstone-finance/evm-connector";
import { Contract, Signer } from "ethers";
import { RedStonePriceExtractor } from "../typechain-types/contracts/RedStonePriceExtractor";
/**
 * This class is a wrapper builder for RedStoneTransparentUpgradeableProxy for frontend.
 */
export declare class RedStoneTransparentProxyWrapperBuilder<T extends Contract> extends WrapperBuilder<T> {
    static wrapForRedStoneTransparentProxy<T extends Contract>(contract: T, signer?: Signer): WrapperBuilder<T>;
}
export declare function setupRedStoneTransparentProxy<T extends Contract>(contract: T, proxyAdminSigner: Signer, redStonePriceExtractor: RedStonePriceExtractor, dataFeedIDs: string[]): Promise<void>;
