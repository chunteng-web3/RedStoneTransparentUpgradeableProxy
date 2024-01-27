// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.8.13;
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import "@redstone-finance/evm-connector/contracts/data-services/PrimaryProdDataServiceConsumerBase.sol";

error AfterExtractPriceNotImplemented(
    string message,
    string[] dataFeedIDsinString,
    uint256[] prices
);

abstract contract RedStonePriceExtractor is
    Ownable,
    PrimaryProdDataServiceConsumerBase
{
    uint64 public MAX_TIMESTAMP_DIFFERENCE;
    bytes32[] public dataFeedIDs;
    mapping(address => uint256) public fallbackFixedPrices;
    struct TimedPrice {
        string dataFeedIDinString;
        uint64 blockNumber;
        uint64 blockTimestamp;
        uint256 price;
    }

    constructor(uint64 maxTimestampDifference) Ownable() {
        MAX_TIMESTAMP_DIFFERENCE = maxTimestampDifference;
    }

    /**
     * @dev Override this function to implement the logic after the price extraction. This is just a sample implementation.
     * @param prices The prices of the data feeds
     */
    function _afterExtractPrice(uint256[] memory prices) internal virtual {
        if (prices.length != dataFeedIDs.length) {
            revert(
                "_afterExtractPrice logic has not been overriden, and the prices were not extracted successfully."
            );
        }
        string[] memory _extractedDataFeedIDs = new string[](prices.length);
        uint256[] memory _extractedPrices = new uint256[](prices.length);
        for (uint256 i = 0; i < prices.length; i++) {
            TimedPrice memory timedPrice = TimedPrice({
                dataFeedIDinString: bytes32ToString(dataFeedIDs[i]),
                blockNumber: uint64(block.number),
                blockTimestamp: uint64(block.timestamp),
                price: prices[i]
            });
            _extractedDataFeedIDs[i] = timedPrice.dataFeedIDinString;
            _extractedPrices[i] = timedPrice.price;
        }
        revert AfterExtractPriceNotImplemented({
            message: "Prices were extracted Successfully , but _afterExtractPrice logic has not been overriden. Please override this function to implement the logic after the price extraction.",
            dataFeedIDsinString: _extractedDataFeedIDs,
            prices: _extractedPrices
        });
    }

    /**
     * @dev Extract the prices from RedStone data service. This function would be injected and called by the RedStoneTransparentUpgradeableProxy.
     * @notice Override _afterExtractPrice to implement the logic after the price extraction.
     */
    function extractPrice() public {
        uint256[] memory prices = getOracleNumericValuesFromTxMsg(dataFeedIDs);
        _afterExtractPrice(prices);
    }

    /**
     * @dev Set the data feed IDs for the RedStone data service.
     * @param _dataFeedIDsInString The data feed IDs in string format
     */
    function setDataFeedIDs(
        string[] memory _dataFeedIDsInString
    ) public onlyOwner {
        bytes32[] memory newDataFeedIDs = new bytes32[](
            _dataFeedIDsInString.length
        );
        for (uint256 i = 0; i < _dataFeedIDsInString.length; i++) {
            newDataFeedIDs[i] = stringToBytes32(_dataFeedIDsInString[i]);
        }
        dataFeedIDs = newDataFeedIDs;
    }

    function setFallbackFixedPrice(
        address asset,
        uint256 price
    ) external onlyOwner {
        fallbackFixedPrices[asset] = price;
    }

    function stringToBytes32(
        string memory source
    ) internal pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
            result := mload(add(source, 32))
        }
    }

    function bytes32ToString(
        bytes32 _bytes32
    ) internal pure returns (string memory) {
        uint8 i = 0;
        while (i < 32 && _bytes32[i] != 0) {
            i++;
        }
        bytes memory bytesArray = new bytes(i);
        for (i = 0; i < 32 && _bytes32[i] != 0; i++) {
            bytesArray[i] = _bytes32[i];
        }
        return string(bytesArray);
    }
}
