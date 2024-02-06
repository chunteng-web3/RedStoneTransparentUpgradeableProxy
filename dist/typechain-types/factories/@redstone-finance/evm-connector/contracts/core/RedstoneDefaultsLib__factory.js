"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedstoneDefaultsLib__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "receivedTimestampSeconds",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "blockTimestamp",
                type: "uint256",
            },
        ],
        name: "TimestampFromTooLongFuture",
        type: "error",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "receivedTimestampSeconds",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "blockTimestamp",
                type: "uint256",
            },
        ],
        name: "TimestampIsTooOld",
        type: "error",
    },
];
const _bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220e70364bf65cbefb73c70562f7efd6b08fcd48cfe8ea72812c4997b69bebc27ba64736f6c63430008150033";
const isSuperArgs = (xs) => xs.length > 1;
class RedstoneDefaultsLib__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.RedstoneDefaultsLib__factory = RedstoneDefaultsLib__factory;
RedstoneDefaultsLib__factory.bytecode = _bytecode;
RedstoneDefaultsLib__factory.abi = _abi;