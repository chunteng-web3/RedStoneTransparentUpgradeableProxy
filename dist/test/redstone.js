"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const evm_connector_1 = require("@redstone-finance/evm-connector");
require("@nomiclabs/hardhat-ethers");
const hardhat_1 = require("hardhat");
const redstone_transparent_proxy_helpers_1 = require("../src/redstone-transparent-proxy-helpers");
const contracts_1 = require("./helpers/contracts");
const typechain_types_1 = require("../typechain-types");
const utils_1 = require("ethers/lib/utils");
describe('Redstone Injection with RedStoneTransparentUpgradeableProxy and RedStonePriceExtractor', () => {
    let priceAggregatorAdapterRedStoneImpl;
    let mockedMintableERC20Impl;
    let mockedMintableERC20Proxy;
    let mockedMintableERC20;
    let usdcContract;
    let deployer;
    let users = [];
    let wethContract;
    /* Mock contract for testing fallback price*/
    let whatContract;
    const dataFeedIDs = ["BTC", "ETH", "USDC", "USDT"];
    beforeEach(async () => {
        deployer = {
            signer: await (0, contracts_1.getFirstSigner)(),
            address: await (await (0, contracts_1.getFirstSigner)()).getAddress()
        };
        const [_deployer, ...restSigners] = await (0, contracts_1.getEthersSigners)();
        for (const signer of restSigners) {
            users.push({
                signer,
                address: await signer.getAddress(),
            });
        }
        usdcContract = await (0, contracts_1.deployContract)("MintableERC20", ["Mocked USDC", "USDC", 6]);
        wethContract = await (0, contracts_1.deployContract)("MintableERC20", ["Mocked WETH", "WETH", 18]);
        whatContract = await (0, contracts_1.deployContract)("MintableERC20", ["Mocked WHAT", "WHAT", 18]);
        priceAggregatorAdapterRedStoneImpl = await (0, contracts_1.deployContract)("PriceAggregatorAdapterRedStoneImpl", [100]);
        await priceAggregatorAdapterRedStoneImpl.setDataFeedIDs(dataFeedIDs);
        await priceAggregatorAdapterRedStoneImpl.setAssetSources([usdcContract.address, wethContract.address], ["USDC", "WETH"]);
        await priceAggregatorAdapterRedStoneImpl.setFallbackFixedPrice(whatContract.address, BigInt(0.02 * 10 ** 8));
        // READ: "mockedMintableERC20Impl" can be replaced by any contract that we want to inject Redstone price update logic.
        mockedMintableERC20Impl = await (0, contracts_1.deployContract)("MintableERC20", ["Mocked MintableERC20", "MOCKED", 18]);
        mockedMintableERC20Proxy = await (0, contracts_1.deployContract)("RedStoneTransparentUpgradeableProxy", [mockedMintableERC20Impl.address, deployer.address, new Uint8Array()]);
    });
    it("Should be able to update prices through RedStone with RedStoneTransparentUpgradeableProxy and RedStonePriceExtractor (without helper)", async function () {
        console.log("MockedMintableERC20(Implementation) deployed at: ", mockedMintableERC20Impl.address);
        console.log("MockedMintableERC20(Proxy) deployed at: ", mockedMintableERC20Proxy.address);
        console.log("PriceAggregatorRedStoneImpl deployed at: ", priceAggregatorAdapterRedStoneImpl.address);
        mockedMintableERC20 = await (0, contracts_1.getContract)("MintableERC20", mockedMintableERC20Proxy.address);
        const mockedMintableERC20InterfaceObject = JSON.parse(mockedMintableERC20.interface.format(utils_1.FormatTypes.json));
        const mockedMintableERC20ProxyInterfaceObject = JSON.parse(mockedMintableERC20Proxy.interface.format(utils_1.FormatTypes.json));
        const combinedInterfaceObject = [
            ...mockedMintableERC20InterfaceObject,
            ...mockedMintableERC20ProxyInterfaceObject
        ];
        const wrappableMockedMintableERC20ContractForProxyAdmin = new hardhat_1.ethers.Contract(mockedMintableERC20Proxy.address, combinedInterfaceObject, deployer.signer);
        const wrappedMockedMintableERC20ContractForProxyAdmin = evm_connector_1.WrapperBuilder.wrap(wrappableMockedMintableERC20ContractForProxyAdmin).usingDataService({
            dataFeeds: dataFeedIDs
        });
        await wrappedMockedMintableERC20ContractForProxyAdmin._autoSetRedStonePayloadLength();
        await wrappedMockedMintableERC20ContractForProxyAdmin._setRedStonePriceExtractor(priceAggregatorAdapterRedStoneImpl.address);
        const wrappableMockedMintableERC20Contract = new hardhat_1.ethers.Contract(mockedMintableERC20Proxy.address, combinedInterfaceObject, await hardhat_1.ethers.getSigner(users[1].address));
        const wrappedMockedMintableERC20Contract = evm_connector_1.WrapperBuilder.wrap(wrappableMockedMintableERC20Contract).usingDataService({
            dataFeeds: dataFeedIDs
        });
        const wethSymbol = await priceAggregatorAdapterRedStoneImpl.symbols(wethContract.address);
        (0, chai_1.expect)(wethSymbol).to.be.equal("ETH");
        // READ: To actually update the price with the injection, we need to call a transaction function on the wrapped contract (i.e, not just a view function).
        await wrappedMockedMintableERC20Contract.mint(100);
        console.log("Attempt to retrieve price for USDC at", usdcContract.address);
        const USDC_PRICE = await priceAggregatorAdapterRedStoneImpl.currentPrice(usdcContract.address);
        const WETH_PRICE = await priceAggregatorAdapterRedStoneImpl.currentPrice(wethContract.address);
        console.log("USDC_PRICE", USDC_PRICE.toString());
        console.log("WETH_PRICE", WETH_PRICE.toString());
    });
    it("Should be able to update prices through RedStone with RedStoneTransparentUpgradeableProxy and RedStonePriceExtractor with helper", async function () {
        /**
         * @dev Setup RedStoneTransparentUpgradeableProxy with RedStonePriceExtractor as proxy admin in the deployment script with helper
         */
        console.log("MockedMintableERC20(Implementation) deployed at: ", mockedMintableERC20Impl.address);
        console.log("MockedMintableERC20(Proxy) deployed at: ", mockedMintableERC20Proxy.address);
        console.log("PriceAggregatorRedStoneImpl deployed at: ", priceAggregatorAdapterRedStoneImpl.address);
        const TypedRedStonePriceExtractor = typechain_types_1.RedStonePriceExtractor__factory.connect(priceAggregatorAdapterRedStoneImpl.address, await hardhat_1.ethers.getSigner(deployer.address));
        mockedMintableERC20 = (await (0, contracts_1.getContract)("MintableERC20", mockedMintableERC20Proxy.address)).connect(await hardhat_1.ethers.getSigner(deployer.address));
        await (0, redstone_transparent_proxy_helpers_1.setupRedStoneTransparentProxy)(mockedMintableERC20, await hardhat_1.ethers.getSigner(deployer.address), TypedRedStonePriceExtractor, dataFeedIDs);
        /**
         * @dev Call a regular contract as regular user with helper in frontend in a way that would update the price through RedStone
         */
        mockedMintableERC20 = mockedMintableERC20.connect(await hardhat_1.ethers.getSigner(users[1].address));
        const wrappedMockedMintableERC20Contract = redstone_transparent_proxy_helpers_1.RedStoneTransparentProxyWrapperBuilder.wrapForRedStoneTransparentProxy(mockedMintableERC20).usingDataService({
            dataFeeds: dataFeedIDs
        });
        const symbol = await priceAggregatorAdapterRedStoneImpl.symbols(usdcContract.address);
        (0, chai_1.expect)(symbol).to.be.equal("USDC");
        // READ(C14): To actually update the price with the injection, we need to call a transaction function on the wrapped contract (i.e, not just a view function).
        await wrappedMockedMintableERC20Contract.mint(100);
        console.log("Attempt to retrieve price for USDC at", usdcContract.address);
        const USDC_PRICE = await priceAggregatorAdapterRedStoneImpl.currentPrice(usdcContract.address);
        console.log("USDC_PRICE", USDC_PRICE.toString());
    });
    it("Should be able to fetch price directly from PriceAggregatorAdapterRedStoneImpl with query only", async function () {
        console.log("PriceAggregatorRedStoneImpl deployed at: ", priceAggregatorAdapterRedStoneImpl.address);
        const typedPriceAggregatorAdapterRedStoneImpl = typechain_types_1.PriceAggregatorAdapterRedStoneImpl__factory.connect(priceAggregatorAdapterRedStoneImpl.address, await hardhat_1.ethers.getSigner(deployer.address));
        // READ: In this case, since you're not calling through a RedStoneTransparentUpgradeableProxy, you just need to use the regular RedStone WrapperBuilder.
        const wrappedPriceAggregatorAdapterRedStoneImpl = evm_connector_1.WrapperBuilder.wrap(typedPriceAggregatorAdapterRedStoneImpl).usingDataService({
            dataFeeds: dataFeedIDs
        });
        // READ: In this case, since a direct call for the price is not a transaction but just a query call, you get the price but it would not be stored.
        try {
            const usdcPrice = await wrappedPriceAggregatorAdapterRedStoneImpl.currentPrice(usdcContract.address);
            console.log("USDC Price", usdcPrice.toString());
        }
        catch (error) {
            console.log("Error!", error);
        }
    });
    it("Should be able to get price for assets with fixed price and revert when neither parsed or fixed price is available", async function () {
        const whatPriceWithoutWrapper = await priceAggregatorAdapterRedStoneImpl.currentPrice(whatContract.address);
        const typedPriceAggregatorAdapterRedStoneImpl = typechain_types_1.PriceAggregatorAdapterRedStoneImpl__factory.connect(priceAggregatorAdapterRedStoneImpl.address, await hardhat_1.ethers.getSigner(deployer.address));
        const wrappedPriceAggregatorAdapterRedStoneImpl = evm_connector_1.WrapperBuilder.wrap(typedPriceAggregatorAdapterRedStoneImpl).usingDataService({
            dataFeeds: dataFeedIDs
        });
        const whatPriceWithWrapper = await wrappedPriceAggregatorAdapterRedStoneImpl.currentPrice(whatContract.address);
        console.log("WHAT Price without wrapper", whatPriceWithoutWrapper.toString());
        console.log("WHAT Price with wrapper", whatPriceWithWrapper.toString());
        await (0, chai_1.expect)(priceAggregatorAdapterRedStoneImpl.currentPrice(deployer.address)).to.be.revertedWith("PriceNotAvailable");
    });
});
