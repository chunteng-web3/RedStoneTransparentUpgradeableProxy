// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.8.21;
import {IPriceAggregatorAdapter} from './IPriceAggregatorAdapter.sol';
import {Ownable} from '@openzeppelin/contracts/access/Ownable.sol';
import {RedStonePriceExtractor} from '../RedStonePriceExtractor.sol';
import 'hardhat/console.sol';

error PriceNotAvailable(string message, address asset);
error PriceTooOld(string message, address asset);

/// @title PriceAggregatorAdapterRedStoneImpl
/// @author chunteng-web3
/// @notice Price aggregator with RedStone data service implementation. It would serve as the RedstoneExtractor and store prices updated through  `RedStoneTransparentupgradableProxy`. Read https://docs.redstone.finance/docs/smart-contract-devs/get-started/redstone-core
contract PriceAggregatorAdapterRedStoneImpl is
  IPriceAggregatorAdapter,
  Ownable,
  RedStonePriceExtractor
{
  mapping(address => TimedPrice) private assetPrices;
  mapping(bytes32 => address) private dataFeedIDToAsset;
  mapping(address => string) public symbols;

  constructor(uint64 maxTimestampDifference) RedStonePriceExtractor(maxTimestampDifference) {}

  /// @dev Get current price of the asset
  /// @notice You can either get price for your RedStoneTransparentProxy through the delegated process of updating the storage of price, or you can get price directly by calling this function after you wrap your function with RedStone WrapBuilder.
  function currentPrice(address asset) external view override returns (int256) {
    uint256[] memory _directAccessPrices;
    if (msg.data.length > 1000) {
      _directAccessPrices = getOracleNumericValuesFromTxMsg(dataFeedIDs);
      for (uint256 i = 0; i < dataFeedIDs.length; i++) {
        if (dataFeedIDToAsset[dataFeedIDs[i]] == asset) {
          return int256(_directAccessPrices[i]);
        }
      }
    }
    TimedPrice memory latestPrice = assetPrices[asset];
    if (latestPrice.price == 0) {
      uint256 fixedPrice = fallbackFixedPrices[asset];
      if (fixedPrice == 0) {
        revert PriceNotAvailable({
          message: 'PriceAggregatorAdapterRedStoneImpl: Price is not available nor fixed in the fallback prices for the asset',
          asset: asset
        });
      }
      return int256(fixedPrice);
    }
    if (block.timestamp - latestPrice.blockTimestamp > MAX_TIMESTAMP_DIFFERENCE) {
      revert PriceTooOld({
        message: 'PriceAggregatorAdapterRedStoneImpl: Price retrieved from storage but it iss too old. If you are trying to get price with direct calls, please wrap your call with RedStone WrapBuilder.',
        asset: asset
      });
    }
    return int256(latestPrice.price);
  }

  function latestTimedPrice(address asset) external view returns (TimedPrice memory) {
    return assetPrices[asset];
  }

  function manualUpdatePrices() public {
    uint256[] memory _manualUpdatePrices;
    if (msg.data.length > 1000) {
      _manualUpdatePrices = getOracleNumericValuesFromTxMsg(dataFeedIDs);
      _afterExtractPrice(_manualUpdatePrices);
    } else {
      revert('PriceAggregatorAdapterRedStoneImpl: Unable to updated prices with the calldata.');
    }
  }

  /// @notice External function called by the SiO2 governance to set or replace sources of assets
  /// @param assets The addresses of the assets
  /// @param tokenSymbols The symbol of the source of each asset
  function setAssetSources(
    address[] calldata assets,
    string[] calldata tokenSymbols
  ) external onlyOwner {
    _setAssetsSources(assets, tokenSymbols);
  }

  /// @notice Internal function to set the sources for each asset
  /// @param assets The addresses of the assets
  /// @param tokenSymbols The symbol of the source of each asset
  function _setAssetsSources(address[] calldata assets, string[] calldata tokenSymbols) internal {
    require(assets.length == tokenSymbols.length, 'INCONSISTENT_PARAMS_LENGTH');
    for (uint256 i = 0; i < assets.length; i++) {
      string memory tokenSymbol = tokenSymbols[i];
      if (stringToBytes32(tokenSymbol) == stringToBytes32("WETH")) {
        tokenSymbol = "ETH";
      }
      symbols[assets[i]] = tokenSymbol;
      bytes32 dataFeedID = stringToBytes32(tokenSymbol);
      dataFeedIDToAsset[dataFeedID] = assets[i];
    }
  }

  function _afterExtractPrice(uint256[] memory prices) internal override {
    for (uint256 i = 0; i < prices.length; i++) {
      address asset = dataFeedIDToAsset[dataFeedIDs[i]];
      if (asset == address(0)) {
        continue;
      }
      TimedPrice memory timedPrice = TimedPrice({
        dataFeedIDinString: bytes32ToString(dataFeedIDs[i]),
        blockNumber: uint64(block.number),
        blockTimestamp: uint64(block.timestamp),
        price: prices[i]
      });
      assetPrices[asset] = timedPrice;
    }
  }
}
