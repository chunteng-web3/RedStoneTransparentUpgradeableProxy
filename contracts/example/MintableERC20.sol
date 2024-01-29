// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.8.21;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title ERC20Mintable
 * @dev ERC20 minting logic
 */
contract MintableERC20 is ERC20 {
  uint8 private DECIMALS;
  constructor(
    string memory name,
    string memory symbol,
    uint8 _decimals
  ) ERC20(name, symbol) {
    DECIMALS = _decimals;
  }

  /**
   * @dev Function to mint tokens
   * @param value The amount of tokens to mint.
   * @return A boolean that indicates if the operation was successful.
   */
  function mint(uint256 value) public returns (bool) {
    _mint(_msgSender(), value);
    return true;
  }

  /**
   * @dev Returns the number of decimals used to get its user representation. It is overridden according to https://docs.openzeppelin.com/contracts/5.x/api/token/erc20#ERC20-decimals--
   * 
   */
  function decimals() public view virtual override returns (uint8) {
    return DECIMALS;
  }
}