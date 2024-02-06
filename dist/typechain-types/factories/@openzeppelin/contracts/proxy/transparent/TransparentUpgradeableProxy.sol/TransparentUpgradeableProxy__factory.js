"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransparentUpgradeableProxy__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_logic",
                type: "address",
            },
            {
                internalType: "address",
                name: "admin_",
                type: "address",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        stateMutability: "payable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "previousAdmin",
                type: "address",
            },
            {
                indexed: false,
                internalType: "address",
                name: "newAdmin",
                type: "address",
            },
        ],
        name: "AdminChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "beacon",
                type: "address",
            },
        ],
        name: "BeaconUpgraded",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "implementation",
                type: "address",
            },
        ],
        name: "Upgraded",
        type: "event",
    },
    {
        stateMutability: "payable",
        type: "fallback",
    },
    {
        stateMutability: "payable",
        type: "receive",
    },
];
const _bytecode = "0x608060405260405162000e3a38038062000e3a833981016040819052620000269162000424565b828162000036828260006200004d565b50620000449050826200007f565b50505062000557565b6200005883620000f1565b600082511180620000665750805b156200007a5762000078838362000133565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f620000c160008051602062000df3833981519152546001600160a01b031690565b604080516001600160a01b03928316815291841660208301520160405180910390a1620000ee8162000162565b50565b620000fc8162000200565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606200015b838360405180606001604052806027815260200162000e136027913962000297565b9392505050565b6001600160a01b038116620001cd5760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b8060008051602062000df38339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b6001600160a01b0381163b6200026f5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401620001c4565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc620001df565b6060600080856001600160a01b031685604051620002b6919062000504565b600060405180830381855af49150503d8060008114620002f3576040519150601f19603f3d011682016040523d82523d6000602084013e620002f8565b606091505b5090925090506200030c8683838762000316565b9695505050505050565b606083156200038a57825160000362000382576001600160a01b0385163b620003825760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401620001c4565b508162000396565b6200039683836200039e565b949350505050565b815115620003af5781518083602001fd5b8060405162461bcd60e51b8152600401620001c4919062000522565b80516001600160a01b0381168114620003e357600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200041b57818101518382015260200162000401565b50506000910152565b6000806000606084860312156200043a57600080fd5b6200044584620003cb565b92506200045560208501620003cb565b60408501519092506001600160401b03808211156200047357600080fd5b818601915086601f8301126200048857600080fd5b8151818111156200049d576200049d620003e8565b604051601f8201601f19908116603f01168101908382118183101715620004c857620004c8620003e8565b81604052828152896020848701011115620004e257600080fd5b620004f5836020830160208801620003fe565b80955050505050509250925092565b6000825162000518818460208701620003fe565b9190910192915050565b602081526000825180602084015262000543816040850160208701620003fe565b601f01601f19169190910160400192915050565b61088c80620005676000396000f3fe60806040523661001357610011610017565b005b6100115b61001f610169565b6001600160a01b0316330361015f5760606001600160e01b0319600035166364d3180d60e11b810161005a5761005361019c565b9150610157565b63587086bd60e11b6001600160e01b031982160161007a576100536101f3565b63070d7c6960e41b6001600160e01b031982160161009a57610053610239565b621eb96f60e61b6001600160e01b03198216016100b95761005361026a565b63a39f25e560e01b6001600160e01b03198216016100d9576100536102aa565b60405162461bcd60e51b815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f78792074617267606482015261195d60f21b608482015260a4015b60405180910390fd5b815160208301f35b6101676102be565b565b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b546001600160a01b0316919050565b60606101a66102ce565b60006101b53660048184610683565b8101906101c291906106c9565b90506101df816040518060200160405280600081525060006102d9565b505060408051602081019091526000815290565b60606000806102053660048184610683565b81019061021291906106fa565b91509150610222828260016102d9565b604051806020016040528060008152509250505090565b60606102436102ce565b60006102523660048184610683565b81019061025f91906106c9565b90506101df81610305565b60606102746102ce565b600061027e610169565b604080516001600160a01b03831660208201529192500160405160208183030381529060405291505090565b60606102b46102ce565b600061027e61035c565b6101676102c961035c565b61036b565b341561016757600080fd5b6102e28361038f565b6000825111806102ef5750805b15610300576102fe83836103cf565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61032e610169565b604080516001600160a01b03928316815291841660208301520160405180910390a1610359816103fb565b50565b60006103666104a4565b905090565b3660008037600080366000845af43d6000803e80801561038a573d6000f35b3d6000fd5b610398816104cc565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606103f4838360405180606001604052806027815260200161083060279139610560565b9392505050565b6001600160a01b0381166104605760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b606482015260840161014e565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b80546001600160a01b0319166001600160a01b039290921691909117905550565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc61018d565b6001600160a01b0381163b6105395760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840161014e565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc610483565b6060600080856001600160a01b03168560405161057d91906107e0565b600060405180830381855af49150503d80600081146105b8576040519150601f19603f3d011682016040523d82523d6000602084013e6105bd565b606091505b50915091506105ce868383876105d8565b9695505050505050565b60608315610647578251600003610640576001600160a01b0385163b6106405760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161014e565b5081610651565b6106518383610659565b949350505050565b8151156106695781518083602001fd5b8060405162461bcd60e51b815260040161014e91906107fc565b6000808585111561069357600080fd5b838611156106a057600080fd5b5050820193919092039150565b80356001600160a01b03811681146106c457600080fd5b919050565b6000602082840312156106db57600080fd5b6103f4826106ad565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561070d57600080fd5b610716836106ad565b9150602083013567ffffffffffffffff8082111561073357600080fd5b818501915085601f83011261074757600080fd5b813581811115610759576107596106e4565b604051601f8201601f19908116603f01168101908382118183101715610781576107816106e4565b8160405282815288602084870101111561079a57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60005b838110156107d75781810151838201526020016107bf565b50506000910152565b600082516107f28184602087016107bc565b9190910192915050565b602081526000825180602084015261081b8160408501602087016107bc565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212207d7994fa7ecb7fbd2b03da95c08ab119d8c17951d59bf2e4fcb83dd834860e7264736f6c63430008150033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";
const isSuperArgs = (xs) => xs.length > 1;
class TransparentUpgradeableProxy__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_logic, admin_, _data, overrides) {
        return super.deploy(_logic, admin_, _data, overrides || {});
    }
    getDeployTransaction(_logic, admin_, _data, overrides) {
        return super.getDeployTransaction(_logic, admin_, _data, overrides || {});
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
exports.TransparentUpgradeableProxy__factory = TransparentUpgradeableProxy__factory;
TransparentUpgradeableProxy__factory.bytecode = _bytecode;
TransparentUpgradeableProxy__factory.abi = _abi;
