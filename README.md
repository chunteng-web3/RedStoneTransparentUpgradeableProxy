# RedStoneTransparentUpgradeableProxy

This project is an extension and combination of `RedStone` and `OpenZeppelin` transparent proxy that allows wrapping any existing or audited smart contracts to migrate to a pull-model based Oracle services without re-deployments or re-auditing, and also a one-click migration for a smooth upgrading experience.

It comes with an extension of `TransparentUpgradeableProxy` of OpenZeppelin that overrides `_delegate(address implementation)` and also implementation auxiliary functions to allow injecting the RedStone service logic when calling the proxy. It also supports one-click migration for which you can extend `RedStoneTransparentUpgradeableProxy` and override the example `_executeMigrationLogic(address nonUpgradeableContract, bytes[] memory)` to implement your own logic of migration to the new contract for scenarios where the old contract to be replaced has been used and generated data previously.

## RedStonePriceExtractor

As an extension of the official PriceExtractor, you can maximize flexibility of how you want to load the latest price from RedStone by implementing abstract contract `RedStonePriceExtractor.sol`. You can directly use the price on the fly for queries or store the price in your own contract by overriding `_afterExtractPrice` function.

## `redstone-transparent-proxy-helpers`

For frontend and script implementation, you can use `redstone-transparent-proxy-helpers` to setup and interact with the proxy contract. It is essentially an extension of the official `WrapperBuilder` from `"@redstone-finance/evm-connector"`;

Try and follow `test/redstone.ts` to see how to do so in your deployment script and frontend project.

## Notes

1. Make sure you use the compatible version of hardhat, Solidity, and Ethers.js as specified in `package.json` and `hardhat.config.js`.
