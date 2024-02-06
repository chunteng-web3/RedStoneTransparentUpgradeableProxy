import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PrimaryProdDataServiceConsumerBase, PrimaryProdDataServiceConsumerBaseInterface } from "../../../../../@redstone-finance/evm-connector/contracts/data-services/PrimaryProdDataServiceConsumerBase";
type PrimaryProdDataServiceConsumerBaseConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PrimaryProdDataServiceConsumerBase__factory extends ContractFactory {
    constructor(...args: PrimaryProdDataServiceConsumerBaseConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string;
    }): Promise<PrimaryProdDataServiceConsumerBase>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string;
    }): TransactionRequest;
    attach(address: string): PrimaryProdDataServiceConsumerBase;
    connect(signer: Signer): PrimaryProdDataServiceConsumerBase__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506108de806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80633ce142f51461006757806355a547d514610091578063b24ebfcc146100a7578063c274583a146100ba578063f50b2efe146100f1578063f90c492414610106575b600080fd5b61007a610075366004610684565b61010d565b60405160ff90911681526020015b60405180910390f35b610099610214565b604051908152602001610088565b6100996100b53660046106c3565b61032c565b60408051808201825260158152741c99591cdd1bdb994b5c1c9a5b585c9e4b5c1c9bd9605a1b602082015290516100889190610781565b6101046100ff3660046107cf565b61033d565b005b600361007a565b60006001600160a01b038216738bb8f32df04c8b654987daaed53d6b6091e3b7740361013b57506000919050565b6001600160a01b03821673deb22f54738d54976c4c0fe5ce6d408e40d884990361016757506001919050565b6001600160a01b0382167351ce04be4b3e32572c4ec9135221d0691ba7d2020361019357506002919050565b6001600160a01b03821673dd682daec5a90dd295d14da4b0bec9281017b5be036101bf57506003919050565b6001600160a01b038216739c5ae89c4af6aa32ce58588dbaf90d18a855b6de036101eb57506004919050565b6040516303b1166f60e61b81526001600160a01b03831660048201526024015b60405180910390fd5b60008061021f610349565b9050600061022c826103f7565b61ffff1690508060000361025357604051632154bfcf60e21b815260040160405180910390fd5b61025e6002836107fe565b915060005b8181101561032657600061027684610431565b90506000806102866068876107fe565b905060006102948236610811565b9050803592508265ffffffffffff166000036102c357604051630336dc9d60e41b815260040160405180910390fd5b876000036102db578265ffffffffffff169750610303565b878365ffffffffffff16146103035760405163d9d1f46560e01b815260040160405180910390fd5b61030d84886107fe565b965050505050808061031e90610824565b915050610263565b50505090565b60006103378261046d565b92915050565b61034681610478565b50565b60006602ed57011e0000601f193601358116148061037a576040516373bb264f60e11b815260040160405180910390fd5b6000366029111561039e57604051632bcb7bc560e11b815260040160405180910390fd5b50602819360135600060096103b9600362ffffff85166107fe565b6103c391906107fe565b9050366103d16002836107fe565b11156103f05760405163c30a7bd760e01b815260040160405180910390fd5b9392505050565b6000806104056020846107fe565b90503681111561042857604051632bcb7bc560e11b815260040160405180910390fd5b36033592915050565b600080600061043f846104fc565b9092509050604e6104518260206107fe565b61045b908461083d565b61046591906107fe565b949350505050565b600061033782610553565b60006104866103e88361086a565b9050804210156104c857603c61049c4283610811565b11156104c45760405163b6b0916d60e01b81526004810182905242602482015260440161020b565b5050565b60b46104d48242610811565b11156104c457604051630321d0b560e01b81526004810182905242602482015260440161020b565b60008080808061050d6041876107fe565b9050600061052661051f6020846107fe565b369061061e565b80359450905061053781600361061e565b62ffffff9490941697933563ffffffff16965092945050505050565b6000815160000361057757604051639e198af960e01b815260040160405180910390fd5b6105808261062a565b600060028351610590919061086a565b9050600283516105a0919061087e565b6000036105fc5760006105ef846105b8600185610811565b815181106105c8576105c8610892565b60200260200101518584815181106105e2576105e2610892565b6020026020010151610678565b905061046560028261086a565b82818151811061060e5761060e610892565b6020026020010151915050919050565b60006103f08284610811565b8051602082016020820281019150805b8281101561067257815b8181101561066957815181518082101561065f578084528183525b5050602001610644565b5060200161063a565b50505050565b60006103f082846107fe565b60006020828403121561069657600080fd5b81356001600160a01b03811681146103f057600080fd5b634e487b7160e01b600052604160045260246000fd5b600060208083850312156106d657600080fd5b823567ffffffffffffffff808211156106ee57600080fd5b818501915085601f83011261070257600080fd5b813581811115610714576107146106ad565b8060051b604051601f19603f83011681018181108582111715610739576107396106ad565b60405291825284820192508381018501918883111561075757600080fd5b938501935b828510156107755784358452938501939285019261075c565b98975050505050505050565b600060208083528351808285015260005b818110156107ae57858101830151858201604001528201610792565b506000604082860101526040601f19601f8301168501019250505092915050565b6000602082840312156107e157600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610337576103376107e8565b81810381811115610337576103376107e8565b600060018201610836576108366107e8565b5060010190565b8082028115828204841417610337576103376107e8565b634e487b7160e01b600052601260045260246000fd5b60008261087957610879610854565b500490565b60008261088d5761088d610854565b500690565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220788ca241ca1b0ce9de2a99cfa25a26a76084d4af85b00dc6fc780bdfe2b98aba64736f6c63430008150033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "CalldataMustHaveValidPayload";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CalldataOverOrUnderFlow";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "CanNotPickMedianOfEmptyArray";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DataPackageTimestampMustNotBeZero";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DataPackageTimestampsMustBeEqual";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "EachSignerMustProvideTheSameValue";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "EmptyCalldataPointersArr";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "GetDataServiceIdNotImplemented";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "IncorrectUnsignedMetadataSize";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "receivedSignersCount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "requiredSignersCount";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientNumberOfUniqueSigners";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCalldataPointer";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "RedstonePayloadMustHaveAtLeastOneDataPackage";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receivedSigner";
            readonly type: "address";
        }];
        readonly name: "SignerNotAuthorised";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "receivedTimestampSeconds";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "blockTimestamp";
            readonly type: "uint256";
        }];
        readonly name: "TimestampFromTooLongFuture";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "receivedTimestampSeconds";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "blockTimestamp";
            readonly type: "uint256";
        }];
        readonly name: "TimestampIsTooOld";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }];
        readonly name: "aggregateValues";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "extractTimestampsAndAssertAllAreEqual";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "extractedTimestamp";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "signerAddress";
            readonly type: "address";
        }];
        readonly name: "getAuthorisedSignerIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDataServiceId";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getUniqueSignersThreshold";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "receivedTimestampMilliseconds";
            readonly type: "uint256";
        }];
        readonly name: "validateTimestamp";
        readonly outputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): PrimaryProdDataServiceConsumerBaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PrimaryProdDataServiceConsumerBase;
}
export {};
