import { WrapperBuilder } from "@redstone-finance/evm-connector";
import { Contract, Signer, ethers } from "ethers";
import { RedStoneTransparentUpgradeableProxy__factory } from "../typechain-types/factories/contracts/RedStoneTransparentUpgradeableProxy__factory";
import { RedStonePriceExtractor } from "../typechain-types/contracts/RedStonePriceExtractor";
import { FormatTypes, Interface } from "ethers/lib/utils";

/**
 * This class is a wrapper builder for RedStoneTransparentUpgradeableProxy for frontend. 
 */
export class RedStoneTransparentProxyWrapperBuilder<T extends Contract> extends WrapperBuilder<T> {
    static wrapForRedStoneTransparentProxy<T extends Contract>(contract: T, signer?: Signer): WrapperBuilder<T> {
        if (!signer) {
            signer = contract.signer;
        }
        if (!signer) {
            throw new Error('Signer is not provided');
        }
        const contractInterfaceObject = JSON.parse(contract.interface.format(FormatTypes.json) as string);
        const redStoneTransparentProxyContract = RedStoneTransparentUpgradeableProxy__factory.connect(contract.address, signer);
        const proxyInterfaceObject = JSON.parse(redStoneTransparentProxyContract.interface.format(FormatTypes.json) as string);
        const combinedInterfaceObject = [
            ...contractInterfaceObject,
            ...proxyInterfaceObject
        ];
        const wrappableCombinedContract = new ethers.Contract(redStoneTransparentProxyContract.address, new Interface(combinedInterfaceObject), signer) as T;
        const wrappedCombinedContract = WrapperBuilder.wrap(wrappableCombinedContract);
        return wrappedCombinedContract;
    }
}

export async function setupRedStoneTransparentProxy<T extends Contract>(contract: T, proxyAdminSigner: Signer, redStonePriceExtractor: RedStonePriceExtractor, dataFeedIDs: string[]) {
    const wrappedCombinedContractForProxyAdmin = RedStoneTransparentProxyWrapperBuilder.wrapForRedStoneTransparentProxy(contract, proxyAdminSigner).usingDataService(
        {
            dataFeeds: dataFeedIDs
        });
    await wrappedCombinedContractForProxyAdmin._autoSetRedStonePayloadLength();
    await wrappedCombinedContractForProxyAdmin._setRedstonePriceExtractor(redStonePriceExtractor.address);
}