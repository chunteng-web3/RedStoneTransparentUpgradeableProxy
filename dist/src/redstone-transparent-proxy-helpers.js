"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRedStoneTransparentProxy = exports.RedStoneTransparentProxyWrapperBuilder = void 0;
const evm_connector_1 = require("@redstone-finance/evm-connector");
const ethers_1 = require("ethers");
const RedStoneTransparentUpgradeableProxy__factory_1 = require("../typechain-types/factories/contracts/RedStoneTransparentUpgradeableProxy__factory");
const utils_1 = require("ethers/lib/utils");
/**
 * This class is a wrapper builder for RedStoneTransparentUpgradeableProxy for frontend.
 */
class RedStoneTransparentProxyWrapperBuilder extends evm_connector_1.WrapperBuilder {
    static wrapForRedStoneTransparentProxy(contract, signer) {
        if (!signer) {
            signer = contract.signer;
        }
        if (!signer) {
            throw new Error('Signer is not provided');
        }
        const contractInterfaceObject = JSON.parse(contract.interface.format(utils_1.FormatTypes.json));
        const proxyInterfaceObject = JSON.parse(RedStoneTransparentUpgradeableProxy__factory_1.RedStoneTransparentUpgradeableProxy__factory.createInterface().format(utils_1.FormatTypes.json));
        const redStoneTransparentProxyContract = new ethers_1.Contract(contract.address, proxyInterfaceObject, signer);
        const combinedInterfaceObject = [
            ...contractInterfaceObject,
            ...proxyInterfaceObject
        ];
        const wrappableCombinedContract = new ethers_1.ethers.Contract(redStoneTransparentProxyContract.address, combinedInterfaceObject, signer);
        const wrappedCombinedContract = evm_connector_1.WrapperBuilder.wrap(wrappableCombinedContract);
        return wrappedCombinedContract;
    }
}
exports.RedStoneTransparentProxyWrapperBuilder = RedStoneTransparentProxyWrapperBuilder;
async function setupRedStoneTransparentProxy(contract, proxyAdminSigner, redStonePriceExtractor, dataFeedIDs) {
    let txCount = await proxyAdminSigner.getTransactionCount();
    const wrappedCombinedContractForProxyAdmin = RedStoneTransparentProxyWrapperBuilder.wrapForRedStoneTransparentProxy(contract, proxyAdminSigner).usingDataService({
        dataFeeds: dataFeedIDs
    });
    await wrappedCombinedContractForProxyAdmin._autoSetRedStonePayloadLength({ nonce: txCount++ });
    await wrappedCombinedContractForProxyAdmin._setRedStonePriceExtractor(redStonePriceExtractor.address, { nonce: txCount++ });
}
exports.setupRedStoneTransparentProxy = setupRedStoneTransparentProxy;
