// SPDX-License-Identifier: agpl-3.0
pragma solidity ^0.8.13;

import './RedStoneTransparentUpgradeableProxy.sol';

contract ExampleRedStoneTransparentUpgradeableProxy is RedStoneTransparentUpgradeableProxy {
    constructor(address _logic, address admin_, bytes memory _data) RedStoneTransparentUpgradeableProxy(_logic, admin_, _data) {}

    function _executeMigrationLogic(
        address nonUpgradeableContract,
        bytes[] memory //args
    )
        internal
        override
        returns (bool success, bytes memory data, string memory message)
    {
        
    }
}