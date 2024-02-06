import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MintableERC20, MintableERC20Interface } from "../../../contracts/example/MintableERC20";
type MintableERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MintableERC20__factory extends ContractFactory {
    constructor(...args: MintableERC20ConstructorParams);
    deploy(name: string, symbol: string, _decimals: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<MintableERC20>;
    getDeployTransaction(name: string, symbol: string, _decimals: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): MintableERC20;
    connect(signer: Signer): MintableERC20__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b5060405162000c8b38038062000c8b833981016040819052620000349162000139565b828260036200004483826200024d565b5060046200005382826200024d565b50506005805460ff191660ff93909316929092179091555062000319915050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200009c57600080fd5b81516001600160401b0380821115620000b957620000b962000074565b604051601f8301601f19908116603f01168101908282118183101715620000e457620000e462000074565b816040528381526020925086838588010111156200010157600080fd5b600091505b8382101562000125578582018301518183018401529082019062000106565b600093810190920192909252949350505050565b6000806000606084860312156200014f57600080fd5b83516001600160401b03808211156200016757600080fd5b62000175878388016200008a565b945060208601519150808211156200018c57600080fd5b506200019b868287016200008a565b925050604084015160ff81168114620001b357600080fd5b809150509250925092565b600181811c90821680620001d357607f821691505b602082108103620001f457634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200024857600081815260208120601f850160051c81016020861015620002235750805b601f850160051c820191505b8181101562000244578281556001016200022f565b5050505b505050565b81516001600160401b0381111562000269576200026962000074565b62000281816200027a8454620001be565b84620001fa565b602080601f831160018114620002b95760008415620002a05750858301515b600019600386901b1c1916600185901b17855562000244565b600085815260208120601f198616915b82811015620002ea57888601518255948401946001909101908401620002c9565b5085821015620003095787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61096280620003296000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a082311461014757806395d89b4114610170578063a0712d6814610178578063a457c2d71461018b578063a9059cbb1461019e578063dd62ed3e146101b157600080fd5b806306fdde03146100b9578063095ea7b3146100d757806318160ddd146100fa57806323b872dd1461010c578063313ce5671461011f5780633950935114610134575b600080fd5b6100c16101c4565b6040516100ce9190610793565b60405180910390f35b6100ea6100e53660046107fd565b610256565b60405190151581526020016100ce565b6002545b6040519081526020016100ce565b6100ea61011a366004610827565b610270565b60055460405160ff90911681526020016100ce565b6100ea6101423660046107fd565b610294565b6100fe610155366004610863565b6001600160a01b031660009081526020819052604090205490565b6100c16102b6565b6100ea610186366004610885565b6102c5565b6100ea6101993660046107fd565b6102d9565b6100ea6101ac3660046107fd565b610359565b6100fe6101bf36600461089e565b610367565b6060600380546101d3906108d1565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906108d1565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b5050505050905090565b600033610264818585610392565b60019150505b92915050565b60003361027e8582856104b6565b610289858585610530565b506001949350505050565b6000336102648185856102a78383610367565b6102b1919061090b565b610392565b6060600480546101d3906108d1565b60006102d133836106d4565b506001919050565b600033816102e78286610367565b90508381101561034c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102898286868403610392565b600033610264818585610530565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166103f45760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610343565b6001600160a01b0382166104555760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610343565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006104c28484610367565b9050600019811461052a578181101561051d5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610343565b61052a8484848403610392565b50505050565b6001600160a01b0383166105945760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610343565b6001600160a01b0382166105f65760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610343565b6001600160a01b0383166000908152602081905260409020548181101561066e5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610343565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a361052a565b6001600160a01b03821661072a5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610343565b806002600082825461073c919061090b565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600060208083528351808285015260005b818110156107c0578581018301518582016040015282016107a4565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b03811681146107f857600080fd5b919050565b6000806040838503121561081057600080fd5b610819836107e1565b946020939093013593505050565b60008060006060848603121561083c57600080fd5b610845846107e1565b9250610853602085016107e1565b9150604084013590509250925092565b60006020828403121561087557600080fd5b61087e826107e1565b9392505050565b60006020828403121561089757600080fd5b5035919050565b600080604083850312156108b157600080fd5b6108ba836107e1565b91506108c8602084016107e1565b90509250929050565b600181811c908216806108e557607f821691505b60208210810361090557634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561026a57634e487b7160e01b600052601160045260246000fdfea2646970667358221220bc55f0846bf2014ce030b33602833adc145bba9b323ea716dc2f25076ac48aa264736f6c63430008150033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }, {
            readonly internalType: "uint8";
            readonly name: "_decimals";
            readonly type: "uint8";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): MintableERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): MintableERC20;
}
export {};
