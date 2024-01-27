import { DataServiceWrapper } from "@redstone-finance/evm-connector/dist/src/wrappers/DataServiceWrapper"
import { convertStringToBytes32 } from "@redstone-finance/protocol/dist/src/common/utils";
import { deployContract, getContract } from "../helpers/contracts-helpers";
import { ZERO_ADDRESS } from "../helpers/constants";
import BigNumber from "bignumber.js";
import { getEthersSigners } from "../helpers/contracts-helpers";
import { expect } from 'chai';
import { ProtocolErrors } from '../helpers/types';
import { makeSuite, TestEnv } from './helpers/make-suite';
import { FormatTypes, Interface, isBytes } from "ethers/lib/utils";
import { Contract } from "ethers";
import { WrapperBuilder } from "@redstone-finance/evm-connector";
import '@nomiclabs/hardhat-ethers'
import { ethers } from "hardhat";
import { RedStoneTransparentProxyWrapperBuilder, setupRedStoneTransparentProxy } from "../helpers/redstone-transparent-proxy-helpers";
import { PriceAggregatorAdapterRedStoneImplFactory, RedStoneTransparentUpgradeableProxyFactory, UiPoolDataProviderV2Factory } from "../types";
import { RedStonePriceExtractor } from "../typechain-types/contracts/RedStonePriceExtractor";
import { RedStonePriceExtractor__factory } from "../typechain-types/factories/contracts/RedStonePriceExtractor__factory";
import { getAllMockedTokens, getMintableERC20 } from "../helpers/contracts-getters";
import { deployRedStoneTransparentUpgradeableProxy, deployUiPoolDataProviderV2 } from "../helpers/contracts-deployments";


makeSuite('Redstone Injection with RedStoneTransparentUpgradeableProxy and RedStonePriceExtractor', (testEnv: TestEnv) => {
  const { CT_CALLER_MUST_BE_LENDING_POOL } = ProtocolErrors;
  const { deployer, users, pool, helpersContract, addressesProvider } = testEnv;

  let priceAggregatorAdapterRedStoneImpl: Contract;
  let mockedMintableERC20Impl: Contract;
  let mockedMintableERC20Proxy: Contract;
  let mockedMintableERC20: Contract;
  let usdcContract: Contract;

  const dataFeedIDs: string[] = ["BTC", "ETH", "USDC", "USDT"];

  beforeEach(async () => {
    const { deployer, usdc, sio2, weth } = testEnv;
    priceAggregatorAdapterRedStoneImpl = await deployContract("PriceAggregatorAdapterRedStoneImpl", [100]);
    await priceAggregatorAdapterRedStoneImpl.setDataFeedIDs(dataFeedIDs);
    await priceAggregatorAdapterRedStoneImpl.setAssetSources([usdc.address, weth.address], ["USDC", "WETH"])
    await priceAggregatorAdapterRedStoneImpl.setFallbackFixedPrice(sio2.address, BigInt(0.02 * 10 ** 8));
    // READ(C14): "mockedMintableERC20Impl" can be replaced by any contract that we want to inject Redstone price update logic.
    mockedMintableERC20Impl = await deployContract("MintableERC20", ["Mocked MintableERC20", "MOCKED", 18]);
    mockedMintableERC20Proxy = await deployContract("RedStoneTransparentUpgradeableProxy", [mockedMintableERC20Impl.address, deployer.address, new Uint8Array()])
    usdcContract = await getContract("MintableERC20", usdc.address);
  });

  it("Should be able to update prices through RedStone with RedStoneTransparentUpgradeableProxy and RedStonePriceExtractor (without helper)", async function () {
    const { weth } = testEnv;
    console.log("MockedMintableERC20(Implementation) deployed at: ", mockedMintableERC20Impl.address);
    console.log("MockedMintableERC20(Proxy) deployed at: ", mockedMintableERC20Proxy.address);
    console.log("PriceAggregatorRedStoneImpl deployed at: ", priceAggregatorAdapterRedStoneImpl.address);
    mockedMintableERC20 = await getContract("MintableERC20", mockedMintableERC20Proxy.address);

    const mockedMintableERC20InterfaceObject = JSON.parse(mockedMintableERC20.interface.format(FormatTypes.json) as string);
    const mockedMintableERC20ProxyInterfaceObject = JSON.parse(mockedMintableERC20Proxy.interface.format(FormatTypes.json) as string);
    const combinedInterfaceObject = [
      ...mockedMintableERC20InterfaceObject,
      ...mockedMintableERC20ProxyInterfaceObject
    ];

    const wrappableMockedMintableERC20ContractForProxyAdmin = new ethers.Contract(mockedMintableERC20Proxy.address, new Interface(combinedInterfaceObject), await ethers.getSigner(deployer.address));
    const wrappedMockedMintableERC20ContractForProxyAdmin = WrapperBuilder.wrap(wrappableMockedMintableERC20ContractForProxyAdmin).usingDataService(
      {
        dataFeeds: dataFeedIDs
      },
    );

    await wrappedMockedMintableERC20ContractForProxyAdmin._autoSetRedStonePayloadLength()
    await wrappedMockedMintableERC20ContractForProxyAdmin._setRedstonePriceExtractor(priceAggregatorAdapterRedStoneImpl.address);

    const wrappableMockedMintableERC20Contract = new ethers.Contract(mockedMintableERC20Proxy.address, new Interface(combinedInterfaceObject), await ethers.getSigner(users[1].address));
    const wrappedMockedMintableERC20Contract = WrapperBuilder.wrap(wrappableMockedMintableERC20Contract).usingDataService(
      {
        dataFeeds: dataFeedIDs
      },
    );

    const wethSymbol = await priceAggregatorAdapterRedStoneImpl.symbols(weth.address);
    console.log("Symbol for !", wethSymbol);
    // READ(C14): To actually update the price with the injection, we need to call a transaction function on the wrapped contract (i.e, not just a view function).
    await wrappedMockedMintableERC20Contract.mint(100);
    console.log("Attempt to retrieve price for USDC at", usdcContract.address);
    const USDC_PRICE = await priceAggregatorAdapterRedStoneImpl.currentPrice(usdcContract.address)
    console.log("USDC_PRICE", USDC_PRICE.toString());
  });
  it("Should be able to update prices through RedStone with RedStoneTransparentUpgradeableProxy and RedStonePriceExtractor with helper", async function () {
    /**
     * @dev Setup RedStoneTransparentUpgradeableProxy with RedStonePriceExtractor as proxy admin in the deployment script with helper
     */
    console.log("MockedMintableERC20(Implementation) deployed at: ", mockedMintableERC20Impl.address);
    console.log("MockedMintableERC20(Proxy) deployed at: ", mockedMintableERC20Proxy.address);
    console.log("PriceAggregatorRedStoneImpl deployed at: ", priceAggregatorAdapterRedStoneImpl.address);
    const TypedRedStonePriceExtractor = RedStonePriceExtractorFactory.connect(priceAggregatorAdapterRedStoneImpl.address, await ethers.getSigner(deployer.address));
    mockedMintableERC20 = (await getContract("MintableERC20", mockedMintableERC20Proxy.address)).connect(await ethers.getSigner(deployer.address));
    await setupRedStoneTransparentProxy(mockedMintableERC20, await ethers.getSigner(deployer.address), TypedRedStonePriceExtractor, dataFeedIDs);



    /**
     * @dev Call a regular contract as regular user with helper in frontend in a way that would update the price through RedStone
     */
    mockedMintableERC20 = mockedMintableERC20.connect(await ethers.getSigner(users[1].address));
    const wrappedMockedMintableERC20Contract = RedStoneTransparentProxyWrapperBuilder.wrapForRedStoneTransparentProxy(mockedMintableERC20).usingDataService(
      {
        dataFeeds: dataFeedIDs
      },
    );

    const symbol = await priceAggregatorAdapterRedStoneImpl.symbols(usdcContract.address);
    console.log("Symbol!", symbol);
    // READ(C14): To actually update the price with the injection, we need to call a transaction function on the wrapped contract (i.e, not just a view function).
    await wrappedMockedMintableERC20Contract.mint(100);
    console.log("Attempt to retrieve price for USDC at", usdcContract.address);
    const USDC_PRICE = await priceAggregatorAdapterRedStoneImpl.currentPrice(usdcContract.address)
    console.log("USDC_PRICE", USDC_PRICE.toString());
  });

  it("Should be able to fetch price directly from PriceAggregatorAdapterRedStoneImpl with query only", async function () {
    console.log("PriceAggregatorRedStoneImpl deployed at: ", priceAggregatorAdapterRedStoneImpl.address);
    const typedPriceAggregatorAdapterRedStoneImpl = PriceAggregatorAdapterRedStoneImplFactory.connect(priceAggregatorAdapterRedStoneImpl.address, await ethers.getSigner(deployer.address));

    // READ(C14): In this case, since you're not calling through a RedStoneTransparentUpgradeableProxy, you just need to use the regular RedStone WrapperBuilder.
    const wrappedPriceAggregatorAdapterRedStoneImpl = WrapperBuilder.wrap(typedPriceAggregatorAdapterRedStoneImpl).usingDataService(
      {
        dataFeeds: dataFeedIDs
      },
    );
    // READ(C14): In this case, since a direct call for the price is not a transaction but just a query call, you get the price but it would not be stored.
    try {
      const usdcPrice = await wrappedPriceAggregatorAdapterRedStoneImpl.currentPrice(usdcContract.address);
      console.log("USDC Price", usdcPrice.toString());
    } catch (error) {
      console.log("Error!", error);
    }
  });

  it("Should be able to get price for assets with fixed price and revert when neither parsed or fixed price is available", async function () {
    const { deployer, pool, helpersContract, addressesProvider, usdc, sio2 } = testEnv;
    const sio2PriceWithoutWrapper = await priceAggregatorAdapterRedStoneImpl.currentPrice(sio2.address);

    const typedPriceAggregatorAdapterRedStoneImpl = PriceAggregatorAdapterRedStoneImplFactory.connect(priceAggregatorAdapterRedStoneImpl.address, await ethers.getSigner(deployer.address));
    const wrappedPriceAggregatorAdapterRedStoneImpl = WrapperBuilder.wrap(typedPriceAggregatorAdapterRedStoneImpl).usingDataService(
      {
        dataFeeds: dataFeedIDs
      },
    );
    const sio2PriceWithWrapper = await wrappedPriceAggregatorAdapterRedStoneImpl.currentPrice(sio2.address);
    console.log("SIO2 Price without wrapper", sio2PriceWithoutWrapper.toString());
    console.log("SIO2 Price with wrapper", sio2PriceWithWrapper.toString());
    
    await expect(priceAggregatorAdapterRedStoneImpl.currentPrice(deployer.address)).to.be.revertedWith("Price is not available");
  });

  it("Should be able to getReservesData for UIPoolDataProviderV2", async function () {
    const { deployer, pool, helpersContract, addressesProvider, usdc, sio2 } = testEnv;
    const uiPoolDataProviderImpl = await deployUiPoolDataProviderV2(priceAggregatorAdapterRedStoneImpl.address, sio2.address);
    const uiPoolDataProviderProxy = await deployRedStoneTransparentUpgradeableProxy([uiPoolDataProviderImpl.address, deployer.address, []])
    let uiPoolDataProvider = (await getContract("UiPoolDataProviderV2", uiPoolDataProviderProxy.address)).connect(await ethers.getSigner(deployer.address));
    const TypedRedStonePriceExtractor = RedStonePriceExtractorFactory.connect(priceAggregatorAdapterRedStoneImpl.address, await ethers.getSigner(deployer.address));
    await setupRedStoneTransparentProxy(uiPoolDataProvider, await ethers.getSigner(deployer.address), TypedRedStonePriceExtractor, dataFeedIDs);

    uiPoolDataProvider = uiPoolDataProvider.connect(await ethers.getSigner(users[1].address));
    const wrappedUiPoolDataProvider = RedStoneTransparentProxyWrapperBuilder.wrapForRedStoneTransparentProxy(uiPoolDataProvider).usingDataService(
      {
        dataFeeds: dataFeedIDs
      },
    );

    const reservesData = await wrappedUiPoolDataProvider.getReservesData(addressesProvider.address);
  });

});
