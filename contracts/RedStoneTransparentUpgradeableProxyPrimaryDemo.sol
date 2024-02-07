// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.8.13;

import "@redstone-finance/evm-connector/contracts/data-services/PrimaryDemoDataServiceConsumerBase.sol";
import "@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol";

error IncorrectRedStonePayloadLength(
    string message,
    address redStonePriceExtractor,
    uint256 redStonePayloadLength,
    uint256 msgDataLength
);

/**
 * @title RedStoneTransparentUpgradeableProxy
 * @author chunteng-web3
 * @dev Extends TransparentUpgradeableProxy to inject the RedStone price extraction logic, allowing the usage of RedStone data service without global revamps. Should also support the migration from non-upgradeable contracts.
 * @notice "0xc4ff2e43c5439a0b50b5169661141171ada35af635a629a5048f96c7a3f701e6" is the keccak256 result of UTF-8 string "_REDSTONE_PRICE_EXTRACTOR_SLOT",  "0x992c3240af1124d7e0e7d96dd0848ed3280961e23ee388c07e753c02b6721437" is the keccak256 result of UTF-8 string "_REDSTONE_PAYLOAD_LENGTH_SLOT, and "0xf01a3707d01753a887a82e3d456da3b48d768008b5d2f97fbd68310b61d5653d" is the keccak256 result of UTF-8 string "_MIGRATION_RECORDS_SLOT", all encoded at https://emn178.github.io/online-tools/keccak_256.html.
 */

contract RedStoneTransparentUpgradeableProxyPrimaryDemo is
    TransparentUpgradeableProxy,
    PrimaryDemoDataServiceConsumerBase
{
    bytes32 private constant _REDSTONE_PRICE_EXTRACTOR_SLOT =
        0xc4ff2e43c5439a0b50b5169661141171ada35af635a629a5048f96c7a3f701e6;
    bytes32 private constant _REDSTONE_PAYLOAD_LENGTH_SLOT =
        0x992c3240af1124d7e0e7d96dd0848ed3280961e23ee388c07e753c02b6721437;
    bytes32 private constant _MIGRATION_RECORDS_SLOT =
        0xf01a3707d01753a887a82e3d456da3b48d768008b5d2f97fbd68310b61d5653d;

    event FailedInjectedExtraction(
        string message,
        address redStonePriceExtractor,
        uint256 redStonePayloadLength,
        uint256 msgDataLength,
        bool delegatedCallResult,
        bytes _calldata,
        bytes _redStonePayload,
        bytes delegatedReturnedData
    );

    event MigratedFromNonUpgradeableContract(
        address nonUpgradeableContract,
        bytes[] args,
        string message
    );

    constructor(
        address _logic,
        address admin_,
        bytes memory _data
    ) TransparentUpgradeableProxy(_logic, admin_, _data) {}

    /**
     * @dev Set the RedStone price extractor contract address if you want to inject the price extraction logic; otherwise, leave it as 0x0 and it would be the same as TransparentUpgradeableProxy.
     * @notice Manually storing and retrieval procedures on specific slots are required for proxy.
     */
    function _setRedStonePriceExtractor(address redStonePriceExtractor) public {
        require(msg.sender == admin());
        require(
            Address.isContract(redStonePriceExtractor),
            "redStonePriceExtractor is not a contract"
        );
        StorageSlot
            .getAddressSlot(_REDSTONE_PRICE_EXTRACTOR_SLOT)
            .value = redStonePriceExtractor;
    }

    function _getRedstonePriceExtractor() public view returns (address) {
        return StorageSlot.getAddressSlot(_REDSTONE_PRICE_EXTRACTOR_SLOT).value;
    }

    /**
     * @dev Call this function from a wrapped contract to automatically set the length of the RedStone payload. This is required if the datafeedIDs array is changed for your RedStone price extractor contract.
     */
    function _autoSetRedStonePayloadLength() public {
        require(msg.sender == admin());
        uint256 redStonePayloadLength = msg.data.length - 4;
        StorageSlot
            .getUint256Slot(_REDSTONE_PAYLOAD_LENGTH_SLOT)
            .value = redStonePayloadLength;
    }

    function _getRedStonePayloadLength() public view returns (uint256) {
        return StorageSlot.getUint256Slot(_REDSTONE_PAYLOAD_LENGTH_SLOT).value;
    }

    /**
     * @dev This function injects the RedStone price extraction logic. It will automatically skip if the RedStone price extractor is not set.
     */
    function _updatePriceThroughRedStoneInjection() internal {
        address redStonePriceExtractorAddress = _getRedstonePriceExtractor();
        if (redStonePriceExtractorAddress != address(0)) {
            if (_getRedStonePayloadLength() == 0) {
                revert IncorrectRedStonePayloadLength({
                    message: "RedStoneTransparentUpgradeableProxy: RedStonePriceExtractor is set, but the payload length is not set.",
                    redStonePriceExtractor: redStonePriceExtractorAddress,
                    redStonePayloadLength: _getRedStonePayloadLength(),
                    msgDataLength: msg.data.length
                });
            }
            // READ: This condition is able to tell if the calldata is contains RedStone payload unless the original calldata is longer than the RedStone payload. In this case, it would always try to extract price.
            if (msg.data.length >= _getRedStonePayloadLength() + 8) {
                bytes memory redStonePayload = msg.data[(msg.data.length -
                    _getRedStonePayloadLength()):];
                bytes memory updateLatestValuesSelector = abi
                    .encodeWithSignature("extractPrice()");
                bytes memory modifiedCalldata = bytes.concat(
                    updateLatestValuesSelector,
                    redStonePayload
                );
                (
                    bool success,
                    bytes memory data
                ) = redStonePriceExtractorAddress.call(modifiedCalldata);
                if (!success) {
                    emit FailedInjectedExtraction({
                        message: "RedStoneTransparentUpgradeableProxy: Injected extraction failed at RedStonePriceExtractor.",
                        redStonePriceExtractor: redStonePriceExtractorAddress,
                        redStonePayloadLength: _getRedStonePayloadLength(),
                        msgDataLength: msg.data.length,
                        delegatedCallResult: success,
                        _calldata: msg.data,
                        _redStonePayload: redStonePayload,
                        delegatedReturnedData: data
                    });
                }
            }
        }
    }

    /**
     * @dev This function overrides the TransparentUpgradeableProxy's _delegate function to inject the RedStone price extraction logic.
     */
    function _delegate(address implementation) internal override {
        _updatePriceThroughRedStoneInjection();
        assembly {
            // This is identitical to the original TransparentUpgradeableProxy's _delegate function
            // Copy msg.data. We take full control of memory in this inline assembly
            // block because it will not return to Solidity code. We overwrite the
            // Solidity scratch pad at memory position 0.
            // Redstone payload appended at the end of the calldata does not need to be pruned for a successful delegate call.
            calldatacopy(0, 0, calldatasize())

            // Call the implementation.
            // out and outsize are 0 because we don't know the size yet.
            let result := delegatecall(
                gas(),
                implementation,
                0,
                calldatasize(),
                0,
                0
            )

            // Copy the returned data.
            returndatacopy(0, 0, returndatasize())

            switch result
            // delegatecall returns 0 on error.
            case 0 {
                revert(0, returndatasize())
            }
            default {
                return(0, returndatasize())
            }
        }
    }

    function admin() public view returns (address) {
        return _getAdmin();
    }

    function _setMigrationRecordsAsTrue() internal {
        bytes32 _INDIVIDUAL_MIGRATION_RECORD_SLOT = keccak256(
            abi.encodePacked(_MIGRATION_RECORDS_SLOT, msg.sender)
        );
        StorageSlot
            .getBooleanSlot(_INDIVIDUAL_MIGRATION_RECORD_SLOT)
            .value = true;
    }

    function _getMigrationRecord() internal view returns (bool) {
        bytes32 _INDIVIDUAL_MIGRATION_RECORD_SLOT = keccak256(
            abi.encodePacked(_MIGRATION_RECORDS_SLOT, msg.sender)
        );
        return
            StorageSlot.getBooleanSlot(_INDIVIDUAL_MIGRATION_RECORD_SLOT).value;
    }

    /**
     * @dev Call this function from a wrapped contract to migrate from a non-upgradeable contract.
     * @notice Override _executeMigrationLogic to implement the migration logic.
     */
    function migrateFromNonUpgradeableContract(
        address nonUpgradeableContract,
        bytes[] memory args
    ) public {
        _updatePriceThroughRedStoneInjection();
        require(
            !_getMigrationRecord(),
            "RedStoneTransparentUpgradeableProxy: Migration has already been done."
        );
        (
            bool success,
            bytes memory data,
            string memory message
        ) = _executeMigrationLogic(nonUpgradeableContract, args);
        if (!success) {
            revert(
                string(
                    abi.encodePacked(
                        "RedStoneTransparentUpgradeableProxy: Migration failed at ",
                        nonUpgradeableContract,
                        " with error message: ",
                        data
                    )
                )
            );
        }
        emit MigratedFromNonUpgradeableContract({
            nonUpgradeableContract: nonUpgradeableContract,
            args: args,
            message: message
        });
        _setMigrationRecordsAsTrue();
    }

    /**
     * @dev Override this function to implement the migration logic, or it would just mock a successful call.
     */
    function _executeMigrationLogic(
        address nonUpgradeableContract,
        bytes[] memory //args
    )
        internal
        virtual
        returns (bool success, bytes memory data, string memory message)
    {
        success = true;
        data = abi.encodePacked(
            "Example return data of Migration logic",
            nonUpgradeableContract
        );
        message = "RedStoneTransparentUpgradeableProxy: Migration succeeded, but the migration logic has not been implemented as it was not overriden, so nothing really happened.";
    }
}
