"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import "hardhat-contract-sizer";
// import '@typechain/hardhat'
require("@nomiclabs/hardhat-waffle");
// import "@nomiclabs/hardhat-etherscan";
// import "@nomiclabs/hardhat-truffle5";
require("@nomiclabs/hardhat-ethers");
require("dotenv/config");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config = {
    solidity: {
        version: "0.8.21",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
};
exports.default = config;
