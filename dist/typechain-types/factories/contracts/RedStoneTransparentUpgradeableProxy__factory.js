"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedStoneTransparentUpgradeableProxy__factory = void 0;
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
];
const _bytecode = "0x60806040523480156200001157600080fd5b50604051620021d3380380620021d3833981016040819052620000349162000438565b8282828281620000478282600062000061565b506200005590508262000093565b5050505050506200056b565b6200006c8362000105565b6000825111806200007a5750805b156200008e576200008c838362000147565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f620000d56000805160206200218c833981519152546001600160a01b031690565b604080516001600160a01b03928316815291841660208301520160405180910390a1620001028162000176565b50565b620001108162000214565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606200016f8383604051806060016040528060278152602001620021ac60279139620002ab565b9392505050565b6001600160a01b038116620001e15760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b806000805160206200218c8339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b6001600160a01b0381163b620002835760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401620001d8565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc620001f3565b6060600080856001600160a01b031685604051620002ca919062000518565b600060405180830381855af49150503d806000811462000307576040519150601f19603f3d011682016040523d82523d6000602084013e6200030c565b606091505b50909250905062000320868383876200032a565b9695505050505050565b606083156200039e57825160000362000396576001600160a01b0385163b620003965760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401620001d8565b5081620003aa565b620003aa8383620003b2565b949350505050565b815115620003c35781518083602001fd5b8060405162461bcd60e51b8152600401620001d8919062000536565b80516001600160a01b0381168114620003f757600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200042f57818101518382015260200162000415565b50506000910152565b6000806000606084860312156200044e57600080fd5b6200045984620003df565b92506200046960208501620003df565b60408501519092506001600160401b03808211156200048757600080fd5b818601915086601f8301126200049c57600080fd5b815181811115620004b157620004b1620003fc565b604051601f8201601f19908116603f01168101908382118183101715620004dc57620004dc620003fc565b81604052828152896020848701011115620004f657600080fd5b6200050983602083016020880162000412565b80955050505050509250925092565b600082516200052c81846020870162000412565b9190910192915050565b60208152600082518060208401526200055781604085016020870162000412565b601f01601f19169190910160400192915050565b611c11806200057b6000396000f3fe6080604052600436106100ab5760003560e01c8063b4ff618711610064578063b4ff61871461019e578063c274583a146101cb578063ea33febe1461020f578063f50b2efe14610224578063f851a44014610244578063f90c492414610259576100ba565b80633ce142f5146100c257806355a547d5146100f9578063660376df1461011c578063a187a6171461013c578063b0dc6b0d1461015e578063b24ebfcc1461017e576100ba565b366100ba576100b861026d565b005b6100b861026d565b3480156100ce57600080fd5b506100e26100dd366004611469565b6103bf565b60405160ff90911681526020015b60405180910390f35b34801561010557600080fd5b5061010e6104c1565b6040519081526020016100f0565b34801561012857600080fd5b506100b8610137366004611469565b6105d9565b34801561014857600080fd5b50600080516020611afd8339815191525461010e565b34801561016a57600080fd5b506100b8610179366004611561565b6106aa565b34801561018a57600080fd5b5061010e61019936600461162c565b610878565b3480156101aa57600080fd5b506101b3610889565b6040516001600160a01b0390911681526020016100f0565b3480156101d757600080fd5b5060408051808201825260158152741c99591cdd1bdb994b5c1c9a5b585c9e4b5c1c9bd9605a1b602082015290516100f0919061170d565b34801561021b57600080fd5b506100b86108bc565b34801561023057600080fd5b506100b861023f366004611720565b610901565b34801561025057600080fd5b506101b361090d565b34801561026557600080fd5b5060036100e2565b61027561091c565b6001600160a01b031633036103b55760606001600160e01b0319600035166364d3180d60e11b81016102b0576102a9610944565b91506103ad565b63587086bd60e11b6001600160e01b03198216016102d0576102a961099b565b63070d7c6960e41b6001600160e01b03198216016102f0576102a96109e1565b621eb96f60e61b6001600160e01b031982160161030f576102a9610a12565b63a39f25e560e01b6001600160e01b031982160161032f576102a9610a52565b60405162461bcd60e51b815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f78792074617267606482015261195d60f21b608482015260a4015b60405180910390fd5b815160208301f35b6103bd610a66565b565b60006001600160a01b038216738bb8f32df04c8b654987daaed53d6b6091e3b774036103ed57506000919050565b6001600160a01b03821673deb22f54738d54976c4c0fe5ce6d408e40d884990361041957506001919050565b6001600160a01b0382167351ce04be4b3e32572c4ec9135221d0691ba7d2020361044557506002919050565b6001600160a01b03821673dd682daec5a90dd295d14da4b0bec9281017b5be0361047157506003919050565b6001600160a01b038216739c5ae89c4af6aa32ce58588dbaf90d18a855b6de0361049d57506004919050565b6040516303b1166f60e61b81526001600160a01b03831660048201526024016103a4565b6000806104cc610a76565b905060006104d982610b24565b61ffff1690508060000361050057604051632154bfcf60e21b815260040160405180910390fd5b61050b60028361174f565b915060005b818110156105d357600061052384610b5e565b905060008061053360688761174f565b905060006105418236611762565b9050803592508265ffffffffffff1660000361057057604051630336dc9d60e41b815260040160405180910390fd5b87600003610588578265ffffffffffff1697506105b0565b878365ffffffffffff16146105b05760405163d9d1f46560e01b815260040160405180910390fd5b6105ba848861174f565b96505050505080806105cb90611775565b915050610510565b50505090565b6105e161090d565b6001600160a01b0316336001600160a01b0316146105fe57600080fd5b6001600160a01b0381163b6106665760405162461bcd60e51b815260206004820152602860248201527f72656453746f6e655072696365457874726163746f72206973206e6f7420612060448201526718dbdb9d1c9858dd60c21b60648201526084016103a4565b807fc4ff2e43c5439a0b50b5169661141171ada35af635a629a5048f96c7a3f701e65b80546001600160a01b0319166001600160a01b039290921691909117905550565b6106b2610b9a565b604080517ff01a3707d01753a887a82e3d456da3b48d768008b5d2f97fbd68310b61d5653d6020808301919091523360601b6001600160601b0319168284015282516034818403018152605490920190925280519101205460ff161561077c5760405162461bcd60e51b81526020600482015260456024820152600080516020611bbc83398151915260448201527f6f78793a204d6967726174696f6e2068617320616c7265616479206265656e206064820152643237b7329760d91b608482015260a4016103a4565b600080600061078b8585610e30565b925092509250826107cf5784826040516020016107a992919061178e565b60408051601f198184030181529082905262461bcd60e51b82526103a49160040161170d565b7f2584806858f7520710ac3fcee06a79a1b47dde2109f4a393da38163b6765a6ac8585836040516108029392919061181e565b60405180910390a1610871604080517ff01a3707d01753a887a82e3d456da3b48d768008b5d2f97fbd68310b61d5653d6020808301919091526001600160601b03193360601b16828401528251808303603401815260549092019092528051910120805460ff19166001179055565b5050505050565b600061088382610ebf565b92915050565b60007fc4ff2e43c5439a0b50b5169661141171ada35af635a629a5048f96c7a3f701e65b546001600160a01b0316919050565b6108c461090d565b6001600160a01b0316336001600160a01b0316146108e157600080fd5b60006108ee600436611762565b600080516020611afd8339815191525550565b61090a81610eca565b50565b600061091761091c565b905090565b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61036108ad565b606061094e610f4e565b600061095d3660048184611899565b81019061096a9190611469565b905061098781604051806020016040528060008152506000610f59565b505060408051602081019091526000815290565b60606000806109ad3660048184611899565b8101906109ba91906118c3565b915091506109ca82826001610f59565b604051806020016040528060008152509250505090565b60606109eb610f4e565b60006109fa3660048184611899565b810190610a079190611469565b905061098781610f85565b6060610a1c610f4e565b6000610a2661091c565b604080516001600160a01b03831660208201529192500160405160208183030381529060405291505090565b6060610a5c610f4e565b6000610a26610fd9565b6103bd610a71610fd9565b610fe3565b60006602ed57011e0000601f1936013581161480610aa7576040516373bb264f60e11b815260040160405180910390fd5b60003660291115610acb57604051632bcb7bc560e11b815260040160405180910390fd5b5060281936013560006009610ae6600362ffffff851661174f565b610af0919061174f565b905036610afe60028361174f565b1115610b1d5760405163c30a7bd760e01b815260040160405180910390fd5b9392505050565b600080610b3260208461174f565b905036811115610b5557604051632bcb7bc560e11b815260040160405180910390fd5b36033592915050565b6000806000610b6c8461100f565b9092509050604e610b7e82602061174f565b610b889084611913565b610b92919061174f565b949350505050565b6000610ba4610889565b90506001600160a01b0381161561090a57600080516020611afd83398151915254600003610c925780610be3600080516020611afd8339815191525490565b60405163894fa41d60e01b81526080600482015260666084820152600080516020611bbc83398151915260a48201527f6f78793a2052656453746f6e655072696365457874726163746f72206973207360c48201527f65742c2062757420746865207061796c6f6164206c656e677468206973206e6f60e4820152653a1039b2ba1760d11b6101048201526001600160a01b0390921660248301526044820152366064820152610124016103a4565b600080516020611afd83398151915254610cad90600861174f565b361061090a5760008036610ccd600080516020611afd8339815191525490565b610cd79036611762565b610ce2928290611899565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052506040805160048152602481018252602080820180516001600160e01b031663c4d51c7160e01b179052915196975095919450610d54935085925086910161192a565b6040516020818303038152906040529050600080856001600160a01b031683604051610d809190611959565b6000604051808303816000865af19150503d8060008114610dbd576040519150601f19603f3d011682016040523d82523d6000602084013e610dc2565b606091505b509150915081610e28577fe8b6097431169072a35ab6a2c70382c59d983ef799126efd9bbbcd9c89d659e186610e04600080516020611afd8339815191525490565b604051610e1f9291903690879060009083908d908a9061199e565b60405180910390a15b505050505050565b60006060806001925084604051602001610e9291907f4578616d706c652072657475726e2064617461206f66204d6967726174696f6e815265206c6f67696360d01b602082015260609190911b6001600160601b0319166026820152603a0190565b60408051601f1981840301815260c08301909152609f808352909350611b1d602083013990509250925092565b600061088382611066565b6000610ed86103e883611a97565b905080421015610f1a57603c610eee4283611762565b1115610f165760405163b6b0916d60e01b8152600481018290524260248201526044016103a4565b5050565b60b4610f268242611762565b1115610f1657604051630321d0b560e01b8152600481018290524260248201526044016103a4565b34156103bd57600080fd5b610f6283611131565b600082511180610f6f5750805b15610f8057610f7e8383611171565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f610fae61091c565b604080516001600160a01b03928316815291841660208301520160405180910390a161090a81611196565b6000610917611222565b610feb610b9a565b3660008037600080366000845af43d6000803e80801561100a573d6000f35b3d6000fd5b60008080808061102060418761174f565b9050600061103961103260208461174f565b369061124a565b80359450905061104a81600361124a565b62ffffff9490941697933563ffffffff16965092945050505050565b6000815160000361108a57604051639e198af960e01b815260040160405180910390fd5b61109382611256565b6000600283516110a39190611a97565b9050600283516110b39190611aab565b60000361110f576000611102846110cb600185611762565b815181106110db576110db611abf565b60200260200101518584815181106110f5576110f5611abf565b602002602001015161129e565b9050610b92600282611a97565b82818151811061112157611121611abf565b6020026020010151915050919050565b61113a816112aa565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060610b1d8383604051806060016040528060278152602001611ad66027913961133e565b6001600160a01b0381166111fb5760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084016103a4565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103610689565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6108ad565b6000610b1d8284611762565b8051602082016020820281019150805b82811015610f7e57815b8181101561129557815181518082101561128b578084528183525b5050602001611270565b50602001611266565b6000610b1d828461174f565b6001600160a01b0381163b6113175760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016103a4565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc610689565b6060600080856001600160a01b03168560405161135b9190611959565b600060405180830381855af49150503d8060008114611396576040519150601f19603f3d011682016040523d82523d6000602084013e61139b565b606091505b50915091506113ac868383876113b6565b9695505050505050565b6060831561142557825160000361141e576001600160a01b0385163b61141e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103a4565b5081610b92565b610b92838381511561143a5781518083602001fd5b8060405162461bcd60e51b81526004016103a4919061170d565b6001600160a01b038116811461090a57600080fd5b60006020828403121561147b57600080fd5b8135610b1d81611454565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156114c5576114c5611486565b604052919050565b600067ffffffffffffffff8211156114e7576114e7611486565b5060051b60200190565b600082601f83011261150257600080fd5b813567ffffffffffffffff81111561151c5761151c611486565b61152f601f8201601f191660200161149c565b81815284602083860101111561154457600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561157457600080fd5b823561157f81611454565b915060208381013567ffffffffffffffff8082111561159d57600080fd5b818601915086601f8301126115b157600080fd5b81356115c46115bf826114cd565b61149c565b81815260059190911b830184019084810190898311156115e357600080fd5b8585015b8381101561161b578035858111156115ff5760008081fd5b61160d8c89838a01016114f1565b8452509186019186016115e7565b508096505050505050509250929050565b6000602080838503121561163f57600080fd5b823567ffffffffffffffff81111561165657600080fd5b8301601f8101851361166757600080fd5b80356116756115bf826114cd565b81815260059190911b8201830190838101908783111561169457600080fd5b928401925b828410156116b257833582529284019290840190611699565b979650505050505050565b60005b838110156116d85781810151838201526020016116c0565b50506000910152565b600081518084526116f98160208601602086016116bd565b601f01601f19169290920160200192915050565b602081526000610b1d60208301846116e1565b60006020828403121561173257600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561088357610883611739565b8181038181111561088357610883611739565b60006001820161178757611787611739565b5060010190565b600080516020611bbc83398151915281527f6f78793a204d6967726174696f6e206661696c6564206174200000000000000060208201526bffffffffffffffffffffffff198360601b166039820152740103bb4ba341032b93937b91036b2b9b9b0b3b29d1605d1b604d820152600082516118108160628501602087016116bd565b919091016062019392505050565b60006060820160018060a01b0386168352602060608185015281865180845260808601915060808160051b870101935082880160005b8281101561188257607f198887030184526118708683516116e1565b95509284019290840190600101611854565b505050505082810360408401526113ac81856116e1565b600080858511156118a957600080fd5b838611156118b657600080fd5b5050820193919092039150565b600080604083850312156118d657600080fd5b82356118e181611454565b9150602083013567ffffffffffffffff8111156118fd57600080fd5b611909858286016114f1565b9150509250929050565b808202811582820484141761088357610883611739565b6000835161193c8184602088016116bd565b8351908301906119508183602088016116bd565b01949350505050565b6000825161196b8184602087016116bd565b9190910192915050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b610100808252605a90820152600080516020611bbc8339815191526101208201527f6f78793a20496e6a65637465642065787472616374696f6e206661696c6564206101408201527f61742052656453746f6e655072696365457874726163746f722e0000000000006101608201526001600160a01b03891660208201526040810188905260608101879052851515608082015260006101808060a0840152611a4a8184018789611975565b905082810360c0840152611a5e81866116e1565b905082810360e0840152611a7281856116e1565b9b9a5050505050505050505050565b634e487b7160e01b600052601260045260246000fd5b600082611aa657611aa6611a81565b500490565b600082611aba57611aba611a81565b500690565b634e487b7160e01b600052603260045260246000fdfe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564992c3240af1124d7e0e7d96dd0848ed3280961e23ee388c07e753c02b672143752656453746f6e655472616e73706172656e745570677261646561626c6550726f78793a204d6967726174696f6e207375636365656465642c2062757420746865206d6967726174696f6e206c6f67696320686173206e6f74206265656e20696d706c656d656e74656420617320697420776173206e6f74206f766572726964656e2c20736f206e6f7468696e67207265616c6c792068617070656e65642e52656453746f6e655472616e73706172656e745570677261646561626c655072a26469706673582212206ff73466a6e04f9855336567d7c922bd3114f3c3c0d29e498bfe6f97570399b464736f6c63430008150033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";
const isSuperArgs = (xs) => xs.length > 1;
class RedStoneTransparentUpgradeableProxy__factory extends ethers_1.ContractFactory {
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
exports.RedStoneTransparentUpgradeableProxy__factory = RedStoneTransparentUpgradeableProxy__factory;
RedStoneTransparentUpgradeableProxy__factory.bytecode = _bytecode;
RedStoneTransparentUpgradeableProxy__factory.abi = _abi;
