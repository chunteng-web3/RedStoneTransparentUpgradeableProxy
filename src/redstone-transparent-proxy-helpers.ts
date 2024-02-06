import { WrapperBuilder } from "@redstone-finance/evm-connector";
import { BaseContract, Contract, Signer, ethers } from "ethers";
import { RedStoneTransparentUpgradeableProxy__factory } from "../typechain-types/factories/contracts/RedStoneTransparentUpgradeableProxy__factory";
import { RedStonePriceExtractor } from "../typechain-types/contracts/RedStonePriceExtractor";
import { FormatTypes } from "ethers/lib/utils";

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
        const proxyInterfaceObject = JSON.parse(RedStoneTransparentUpgradeableProxy__factory.createInterface().format(FormatTypes.json) as string);
        const redStoneTransparentProxyContract = new Contract(contract.address, proxyInterfaceObject, signer);
        const combinedInterfaceObject = [
            ...contractInterfaceObject,
            ...proxyInterfaceObject
        ];
        const wrappableCombinedContract = new ethers.Contract(redStoneTransparentProxyContract.address, combinedInterfaceObject, signer);
        const wrappedCombinedContract = WrapperBuilder.wrap(wrappableCombinedContract as T);
        return wrappedCombinedContract;
    }
}

export async function setupRedStoneTransparentProxy<T extends Contract>(contract: T, proxyAdminSigner: Signer, redStonePriceExtractor: RedStonePriceExtractor, dataFeedIDs: string[]) {
    let txCount = await proxyAdminSigner.getTransactionCount();
    const wrappedCombinedContractForProxyAdmin = RedStoneTransparentProxyWrapperBuilder.wrapForRedStoneTransparentProxy(contract, proxyAdminSigner).usingDataService(
        {
            dataFeeds: dataFeedIDs
        });
    await wrappedCombinedContractForProxyAdmin._autoSetRedStonePayloadLength({nonce: txCount++});
    await wrappedCombinedContractForProxyAdmin._setRedStonePriceExtractor(redStonePriceExtractor.address, {nonce: txCount++});
}

