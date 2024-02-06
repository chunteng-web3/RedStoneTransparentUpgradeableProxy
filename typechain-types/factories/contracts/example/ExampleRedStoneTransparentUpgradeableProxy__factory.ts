/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ExampleRedStoneTransparentUpgradeableProxy,
  ExampleRedStoneTransparentUpgradeableProxyInterface,
} from "../../../contracts/example/ExampleRedStoneTransparentUpgradeableProxy";

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
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
    name: "CanNotPickMedianOfEmptyArray",
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
    name: "GetDataServiceIdNotImplemented",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        internalType: "address",
        name: "redStonePriceExtractor",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "redStonePayloadLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "msgDataLength",
        type: "uint256",
      },
    ],
    name: "IncorrectRedStonePayloadLength",
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
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "redStonePriceExtractor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "redStonePayloadLength",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "msgDataLength",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "delegatedCallResult",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_redStonePayload",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "delegatedReturnedData",
        type: "bytes",
      },
    ],
    name: "FailedInjectedExtraction",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "nonUpgradeableContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "args",
        type: "bytes[]",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "MigratedFromNonUpgradeableContract",
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
    inputs: [],
    name: "_autoSetRedStonePayloadLength",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "_getRedStonePayloadLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_getRedstonePriceExtractor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "redStonePriceExtractor",
        type: "address",
      },
    ],
    name: "_setRedStonePriceExtractor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "aggregateValues",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "signerAddress",
        type: "address",
      },
    ],
    name: "getAuthorisedSignerIndex",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDataServiceId",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUniqueSignersThreshold",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nonUpgradeableContract",
        type: "address",
      },
      {
        internalType: "bytes[]",
        name: "args",
        type: "bytes[]",
      },
    ],
    name: "migrateFromNonUpgradeableContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receivedTimestampMilliseconds",
        type: "uint256",
      },
    ],
    name: "validateTimestamp",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001fbc38038062001fbc83398101604081905262000034916200043e565b82828282828282816200004a8282600062000067565b506200005890508262000099565b50505050505050505062000571565b62000072836200010b565b600082511180620000805750805b1562000094576200009283836200014d565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f620000db60008051602062001f75833981519152546001600160a01b031690565b604080516001600160a01b03928316815291841660208301520160405180910390a162000108816200017c565b50565b62000116816200021a565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606062000175838360405180606001604052806027815260200162001f9560279139620002b1565b9392505050565b6001600160a01b038116620001e75760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b8060008051602062001f758339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b6001600160a01b0381163b620002895760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401620001de565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc620001f9565b6060600080856001600160a01b031685604051620002d091906200051e565b600060405180830381855af49150503d80600081146200030d576040519150601f19603f3d011682016040523d82523d6000602084013e62000312565b606091505b509092509050620003268683838762000330565b9695505050505050565b60608315620003a45782516000036200039c576001600160a01b0385163b6200039c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401620001de565b5081620003b0565b620003b08383620003b8565b949350505050565b815115620003c95781518083602001fd5b8060405162461bcd60e51b8152600401620001de91906200053c565b80516001600160a01b0381168114620003fd57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004355781810151838201526020016200041b565b50506000910152565b6000806000606084860312156200045457600080fd5b6200045f84620003e5565b92506200046f60208501620003e5565b60408501519092506001600160401b03808211156200048d57600080fd5b818601915086601f830112620004a257600080fd5b815181811115620004b757620004b762000402565b604051601f8201601f19908116603f01168101908382118183101715620004e257620004e262000402565b81604052828152896020848701011115620004fc57600080fd5b6200050f83602083016020880162000418565b80955050505050509250925092565b600082516200053281846020870162000418565b9190910192915050565b60208152600082518060208401526200055d81604085016020870162000418565b601f01601f19169190910160400192915050565b6119f480620005816000396000f3fe6080604052600436106100ab5760003560e01c8063b4ff618711610064578063b4ff61871461019e578063c274583a146101cb578063ea33febe1461020f578063f50b2efe14610224578063f851a44014610244578063f90c492414610259576100ba565b80633ce142f5146100c257806355a547d5146100f9578063660376df1461011c578063a187a6171461013c578063b0dc6b0d1461015e578063b24ebfcc1461017e576100ba565b366100ba576100b861026d565b005b6100b861026d565b3480156100ce57600080fd5b506100e26100dd366004611321565b6103bf565b60405160ff90911681526020015b60405180910390f35b34801561010557600080fd5b5061010e6104c1565b6040519081526020016100f0565b34801561012857600080fd5b506100b8610137366004611321565b6105d9565b34801561014857600080fd5b5060008051602061197f8339815191525461010e565b34801561016a57600080fd5b506100b8610179366004611419565b6106aa565b34801561018a57600080fd5b5061010e6101993660046114e4565b6107bf565b3480156101aa57600080fd5b506101b36107d0565b6040516001600160a01b0390911681526020016100f0565b3480156101d757600080fd5b5060408051808201825260158152741c99591cdd1bdb994b5c1c9a5b585c9e4b5c1c9bd9605a1b602082015290516100f091906115c5565b34801561021b57600080fd5b506100b8610803565b34801561023057600080fd5b506100b861023f3660046115d8565b610848565b34801561025057600080fd5b506101b3610854565b34801561026557600080fd5b5060036100e2565b610275610863565b6001600160a01b031633036103b55760606001600160e01b0319600035166364d3180d60e11b81016102b0576102a961088b565b91506103ad565b63587086bd60e11b6001600160e01b03198216016102d0576102a96108e2565b63070d7c6960e41b6001600160e01b03198216016102f0576102a9610928565b621eb96f60e61b6001600160e01b031982160161030f576102a9610959565b63a39f25e560e01b6001600160e01b031982160161032f576102a9610999565b60405162461bcd60e51b815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f78792074617267606482015261195d60f21b608482015260a4015b60405180910390fd5b815160208301f35b6103bd6109ad565b565b60006001600160a01b038216738bb8f32df04c8b654987daaed53d6b6091e3b774036103ed57506000919050565b6001600160a01b03821673deb22f54738d54976c4c0fe5ce6d408e40d884990361041957506001919050565b6001600160a01b0382167351ce04be4b3e32572c4ec9135221d0691ba7d2020361044557506002919050565b6001600160a01b03821673dd682daec5a90dd295d14da4b0bec9281017b5be0361047157506003919050565b6001600160a01b038216739c5ae89c4af6aa32ce58588dbaf90d18a855b6de0361049d57506004919050565b6040516303b1166f60e61b81526001600160a01b03831660048201526024016103a4565b6000806104cc6109bd565b905060006104d982610a6b565b61ffff1690508060000361050057604051632154bfcf60e21b815260040160405180910390fd5b61050b600283611607565b915060005b818110156105d357600061052384610aa5565b9050600080610533606887611607565b90506000610541823661161a565b9050803592508265ffffffffffff1660000361057057604051630336dc9d60e41b815260040160405180910390fd5b87600003610588578265ffffffffffff1697506105b0565b878365ffffffffffff16146105b05760405163d9d1f46560e01b815260040160405180910390fd5b6105ba8488611607565b96505050505080806105cb9061162d565b915050610510565b50505090565b6105e1610854565b6001600160a01b0316336001600160a01b0316146105fe57600080fd5b6001600160a01b0381163b6106665760405162461bcd60e51b815260206004820152602860248201527f72656453746f6e655072696365457874726163746f72206973206e6f7420612060448201526718dbdb9d1c9858dd60c21b60648201526084016103a4565b807fc4ff2e43c5439a0b50b5169661141171ada35af635a629a5048f96c7a3f701e65b80546001600160a01b0319166001600160a01b039290921691909117905550565b6106b2610ae1565b604080517ff01a3707d01753a887a82e3d456da3b48d768008b5d2f97fbd68310b61d5653d6020808301919091523360601b6bffffffffffffffffffffffff19168284015282516034818403018152605490920190925280519101205460ff16156107815760405162461bcd60e51b8152602060048201526045602482015260008051602061199f83398151915260448201527f6f78793a204d6967726174696f6e2068617320616c7265616479206265656e206064820152643237b7329760d91b608482015260a4016103a4565b60006060808482604051602001610799929190611646565b60408051601f198184030181529082905262461bcd60e51b82526103a4916004016115c5565b60006107ca82610d77565b92915050565b60007fc4ff2e43c5439a0b50b5169661141171ada35af635a629a5048f96c7a3f701e65b546001600160a01b0316919050565b61080b610854565b6001600160a01b0316336001600160a01b03161461082857600080fd5b600061083560043661161a565b60008051602061197f8339815191525550565b61085181610d82565b50565b600061085e610863565b905090565b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61036107f4565b6060610895610e06565b60006108a4366004818461171b565b8101906108b19190611321565b90506108ce81604051806020016040528060008152506000610e11565b505060408051602081019091526000815290565b60606000806108f4366004818461171b565b8101906109019190611745565b9150915061091182826001610e11565b604051806020016040528060008152509250505090565b6060610932610e06565b6000610941366004818461171b565b81019061094e9190611321565b90506108ce81610e3d565b6060610963610e06565b600061096d610863565b604080516001600160a01b03831660208201529192500160405160208183030381529060405291505090565b60606109a3610e06565b600061096d610e91565b6103bd6109b8610e91565b610e9b565b60006602ed57011e0000601f19360135811614806109ee576040516373bb264f60e11b815260040160405180910390fd5b60003660291115610a1257604051632bcb7bc560e11b815260040160405180910390fd5b5060281936013560006009610a2d600362ffffff8516611607565b610a379190611607565b905036610a45600283611607565b1115610a645760405163c30a7bd760e01b815260040160405180910390fd5b9392505050565b600080610a79602084611607565b905036811115610a9c57604051632bcb7bc560e11b815260040160405180910390fd5b36033592915050565b6000806000610ab384610ec7565b9092509050604e610ac5826020611607565b610acf9084611795565b610ad99190611607565b949350505050565b6000610aeb6107d0565b90506001600160a01b038116156108515760008051602061197f83398151915254600003610bd95780610b2a60008051602061197f8339815191525490565b60405163894fa41d60e01b8152608060048201526066608482015260008051602061199f83398151915260a48201527f6f78793a2052656453746f6e655072696365457874726163746f72206973207360c48201527f65742c2062757420746865207061796c6f6164206c656e677468206973206e6f60e4820152653a1039b2ba1760d11b6101048201526001600160a01b0390921660248301526044820152366064820152610124016103a4565b60008051602061197f83398151915254610bf4906008611607565b36106108515760008036610c1460008051602061197f8339815191525490565b610c1e903661161a565b610c2992829061171b565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052506040805160048152602481018252602080820180516001600160e01b031663c4d51c7160e01b179052915196975095919450610c9b93508592508691016117ac565b6040516020818303038152906040529050600080856001600160a01b031683604051610cc791906117db565b6000604051808303816000865af19150503d8060008114610d04576040519150601f19603f3d011682016040523d82523d6000602084013e610d09565b606091505b509150915081610d6f577fe8b6097431169072a35ab6a2c70382c59d983ef799126efd9bbbcd9c89d659e186610d4b60008051602061197f8339815191525490565b604051610d669291903690879060009083908d908a90611820565b60405180910390a15b505050505050565b60006107ca82610f1e565b6000610d906103e883611919565b905080421015610dd257603c610da6428361161a565b1115610dce5760405163b6b0916d60e01b8152600481018290524260248201526044016103a4565b5050565b60b4610dde824261161a565b1115610dce57604051630321d0b560e01b8152600481018290524260248201526044016103a4565b34156103bd57600080fd5b610e1a83610fe9565b600082511180610e275750805b15610e3857610e368383611029565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f610e66610863565b604080516001600160a01b03928316815291841660208301520160405180910390a16108518161104e565b600061085e6110da565b610ea3610ae1565b3660008037600080366000845af43d6000803e808015610ec2573d6000f35b3d6000fd5b600080808080610ed8604187611607565b90506000610ef1610eea602084611607565b3690611102565b803594509050610f02816003611102565b62ffffff9490941697933563ffffffff16965092945050505050565b60008151600003610f4257604051639e198af960e01b815260040160405180910390fd5b610f4b8261110e565b600060028351610f5b9190611919565b905060028351610f6b919061192d565b600003610fc7576000610fba84610f8360018561161a565b81518110610f9357610f93611941565b6020026020010151858481518110610fad57610fad611941565b6020026020010151611156565b9050610ad9600282611919565b828181518110610fd957610fd9611941565b6020026020010151915050919050565b610ff281611162565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060610a648383604051806060016040528060278152602001611958602791396111f6565b6001600160a01b0381166110b35760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084016103a4565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103610689565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6107f4565b6000610a64828461161a565b8051602082016020820281019150805b82811015610e3657815b8181101561114d578151815180821015611143578084528183525b5050602001611128565b5060200161111e565b6000610a648284611607565b6001600160a01b0381163b6111cf5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016103a4565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc610689565b6060600080856001600160a01b03168560405161121391906117db565b600060405180830381855af49150503d806000811461124e576040519150601f19603f3d011682016040523d82523d6000602084013e611253565b606091505b50915091506112648683838761126e565b9695505050505050565b606083156112dd5782516000036112d6576001600160a01b0385163b6112d65760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103a4565b5081610ad9565b610ad983838151156112f25781518083602001fd5b8060405162461bcd60e51b81526004016103a491906115c5565b6001600160a01b038116811461085157600080fd5b60006020828403121561133357600080fd5b8135610a648161130c565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561137d5761137d61133e565b604052919050565b600067ffffffffffffffff82111561139f5761139f61133e565b5060051b60200190565b600082601f8301126113ba57600080fd5b813567ffffffffffffffff8111156113d4576113d461133e565b6113e7601f8201601f1916602001611354565b8181528460208386010111156113fc57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561142c57600080fd5b82356114378161130c565b915060208381013567ffffffffffffffff8082111561145557600080fd5b818601915086601f83011261146957600080fd5b813561147c61147782611385565b611354565b81815260059190911b8301840190848101908983111561149b57600080fd5b8585015b838110156114d3578035858111156114b75760008081fd5b6114c58c89838a01016113a9565b84525091860191860161149f565b508096505050505050509250929050565b600060208083850312156114f757600080fd5b823567ffffffffffffffff81111561150e57600080fd5b8301601f8101851361151f57600080fd5b803561152d61147782611385565b81815260059190911b8201830190838101908783111561154c57600080fd5b928401925b8284101561156a57833582529284019290840190611551565b979650505050505050565b60005b83811015611590578181015183820152602001611578565b50506000910152565b600081518084526115b1816020860160208601611575565b601f01601f19169290920160200192915050565b602081526000610a646020830184611599565b6000602082840312156115ea57600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156107ca576107ca6115f1565b818103818111156107ca576107ca6115f1565b60006001820161163f5761163f6115f1565b5060010190565b60008051602061199f83398151915281527f6f78793a204d6967726174696f6e206661696c6564206174200000000000000060208201526bffffffffffffffffffffffff198360601b166039820152740103bb4ba341032b93937b91036b2b9b9b0b3b29d1605d1b604d820152600082516116c8816062850160208701611575565b919091016062019392505050565b8281101561170457607f198887030184526116f2868351611599565b955092840192908401906001016116d6565b505050505082810360408401526112648185611599565b6000808585111561172b57600080fd5b8386111561173857600080fd5b5050820193919092039150565b6000806040838503121561175857600080fd5b82356117638161130c565b9150602083013567ffffffffffffffff81111561177f57600080fd5b61178b858286016113a9565b9150509250929050565b80820281158282048414176107ca576107ca6115f1565b600083516117be818460208801611575565b8351908301906117d2818360208801611575565b01949350505050565b600082516117ed818460208701611575565b9190910192915050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b610100808252605a9082015260008051602061199f8339815191526101208201527f6f78793a20496e6a65637465642065787472616374696f6e206661696c6564206101408201527f61742052656453746f6e655072696365457874726163746f722e0000000000006101608201526001600160a01b03891660208201526040810188905260608101879052851515608082015260006101808060a08401526118cc81840187896117f7565b905082810360c08401526118e08186611599565b905082810360e08401526118f48185611599565b9b9a5050505050505050505050565b634e487b7160e01b600052601260045260246000fd5b60008261192857611928611903565b500490565b60008261193c5761193c611903565b500690565b634e487b7160e01b600052603260045260246000fdfe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564992c3240af1124d7e0e7d96dd0848ed3280961e23ee388c07e753c02b672143752656453746f6e655472616e73706172656e745570677261646561626c655072a264697066735822122098f3c87b5252dfd11d1914a8a97aa0ea25c59c60d0e4dcd2ad6c6243ed3a39a264736f6c63430008150033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

type ExampleRedStoneTransparentUpgradeableProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExampleRedStoneTransparentUpgradeableProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExampleRedStoneTransparentUpgradeableProxy__factory extends ContractFactory {
  constructor(
    ...args: ExampleRedStoneTransparentUpgradeableProxyConstructorParams
  ) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _logic: string,
    admin_: string,
    _data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ExampleRedStoneTransparentUpgradeableProxy> {
    return super.deploy(
      _logic,
      admin_,
      _data,
      overrides || {}
    ) as Promise<ExampleRedStoneTransparentUpgradeableProxy>;
  }
  override getDeployTransaction(
    _logic: string,
    admin_: string,
    _data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, admin_, _data, overrides || {});
  }
  override attach(address: string): ExampleRedStoneTransparentUpgradeableProxy {
    return super.attach(address) as ExampleRedStoneTransparentUpgradeableProxy;
  }
  override connect(
    signer: Signer
  ): ExampleRedStoneTransparentUpgradeableProxy__factory {
    return super.connect(
      signer
    ) as ExampleRedStoneTransparentUpgradeableProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExampleRedStoneTransparentUpgradeableProxyInterface {
    return new utils.Interface(
      _abi
    ) as ExampleRedStoneTransparentUpgradeableProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExampleRedStoneTransparentUpgradeableProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ExampleRedStoneTransparentUpgradeableProxy;
  }
}