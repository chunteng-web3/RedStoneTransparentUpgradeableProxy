// import "hardhat-contract-sizer";
// import '@typechain/hardhat'
import "@nomiclabs/hardhat-waffle";
// import "@nomiclabs/hardhat-etherscan";
// import "@nomiclabs/hardhat-truffle5";
import "@nomiclabs/hardhat-ethers";
import 'dotenv/config';
import { HardhatUserConfig } from "hardhat/config";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
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

export default config;
