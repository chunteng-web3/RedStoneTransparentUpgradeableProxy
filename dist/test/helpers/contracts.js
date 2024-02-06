"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContract = exports.deployContract = exports.waitForTx = exports.getFirstSigner = exports.getEthersSigners = void 0;
const hardhat_1 = __importDefault(require("hardhat"));
const getEthersSigners = async () => {
    const ethersSigners = await Promise.all(await hardhat_1.default.ethers.getSigners());
    // if (usingDefender()) {
    //   const [, ...users] = ethersSigners;
    //   return [await getDefenderRelaySigner(), ...users];
    // }
    return ethersSigners;
};
exports.getEthersSigners = getEthersSigners;
const getFirstSigner = async () => (await (0, exports.getEthersSigners)())[0];
exports.getFirstSigner = getFirstSigner;
const waitForTx = async (tx) => await tx.wait(1);
exports.waitForTx = waitForTx;
const deployContract = async (contractName, args) => {
    const contract = (await (await hardhat_1.default.ethers.getContractFactory(contractName))
        .connect(await (0, exports.getFirstSigner)())
        .deploy(...args));
    await (0, exports.waitForTx)(contract.deployTransaction);
    return contract;
};
exports.deployContract = deployContract;
const getContract = async (contractName, address) => (await hardhat_1.default.ethers.getContractAt(contractName, address));
exports.getContract = getContract;
