/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CalldataExtractor,
  CalldataExtractorInterface,
} from "../../../../../@redstone-finance/evm-connector/contracts/core/CalldataExtractor";

const _abi = [
  {
    inputs: [],
    name: "CalldataMustHaveValidPayload",
    type: "error",
  },
  {
    inputs: [],
    name: "CalldataOverOrUnderFlow",
    type: "error",
  },
  {
    inputs: [],
    name: "DataPackageTimestampMustNotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "DataPackageTimestampsMustBeEqual",
    type: "error",
  },
  {
    inputs: [],
    name: "EachSignerMustProvideTheSameValue",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyCalldataPointersArr",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectUnsignedMetadataSize",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedSignersCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredSignersCount",
        type: "uint256",
      },
    ],
    name: "InsufficientNumberOfUniqueSigners",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidCalldataPointer",
    type: "error",
  },
  {
    inputs: [],
    name: "RedstonePayloadMustHaveAtLeastOneDataPackage",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receivedSigner",
        type: "address",
      },
    ],
    name: "SignerNotAuthorised",
    type: "error",
  },
  {
    inputs: [],
    name: "extractTimestampsAndAssertAllAreEqual",
    outputs: [
      {
        internalType: "uint256",
        name: "extractedTimestamp",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610394806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806355a547d514610030575b600080fd5b61003861004a565b60405190815260200160405180910390f35b600080610055610162565b9050600061006282610210565b61ffff1690508060000361008957604051632154bfcf60e21b815260040160405180910390fd5b610094600283610308565b915060005b8181101561015c5760006100ac8461024a565b90506000806100bc606887610308565b905060006100ca823661031b565b9050803592508265ffffffffffff166000036100f957604051630336dc9d60e41b815260040160405180910390fd5b87600003610111578265ffffffffffff169750610139565b878365ffffffffffff16146101395760405163d9d1f46560e01b815260040160405180910390fd5b6101438488610308565b96505050505080806101549061032e565b915050610099565b50505090565b60006602ed57011e0000601f1936013581161480610193576040516373bb264f60e11b815260040160405180910390fd5b600036602911156101b757604051632bcb7bc560e11b815260040160405180910390fd5b50602819360135600060096101d2600362ffffff8516610308565b6101dc9190610308565b9050366101ea600283610308565b11156102095760405163c30a7bd760e01b815260040160405180910390fd5b9392505050565b60008061021e602084610308565b90503681111561024157604051632bcb7bc560e11b815260040160405180910390fd5b36033592915050565b600080600061025884610286565b9092509050604e61026a826020610308565b6102749084610347565b61027e9190610308565b949350505050565b600080808080610297604187610308565b905060006102b06102a9602084610308565b36906102dd565b8035945090506102c18160036102dd565b62ffffff9490941697933563ffffffff16965092945050505050565b60006102e9828461031b565b90505b92915050565b634e487b7160e01b600052601160045260246000fd5b808201808211156102ec576102ec6102f2565b818103818111156102ec576102ec6102f2565b600060018201610340576103406102f2565b5060010190565b80820281158282048414176102ec576102ec6102f256fea2646970667358221220ae6616c253c7e24a0b16d8f685c72adaf390cf7e469555cf6abc858dc4bbd68864736f6c63430008150033";

type CalldataExtractorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CalldataExtractorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CalldataExtractor__factory extends ContractFactory {
  constructor(...args: CalldataExtractorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<CalldataExtractor> {
    return super.deploy(overrides || {}) as Promise<CalldataExtractor>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CalldataExtractor {
    return super.attach(address) as CalldataExtractor;
  }
  override connect(signer: Signer): CalldataExtractor__factory {
    return super.connect(signer) as CalldataExtractor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CalldataExtractorInterface {
    return new utils.Interface(_abi) as CalldataExtractorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CalldataExtractor {
    return new Contract(address, _abi, signerOrProvider) as CalldataExtractor;
  }
}
