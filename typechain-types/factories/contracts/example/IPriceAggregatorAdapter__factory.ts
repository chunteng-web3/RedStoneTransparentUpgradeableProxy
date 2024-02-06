/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPriceAggregatorAdapter,
  IPriceAggregatorAdapterInterface,
} from "../../../contracts/example/IPriceAggregatorAdapter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "currentPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IPriceAggregatorAdapter__factory {
  static readonly abi = _abi;
  static createInterface(): IPriceAggregatorAdapterInterface {
    return new utils.Interface(_abi) as IPriceAggregatorAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPriceAggregatorAdapter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IPriceAggregatorAdapter;
  }
}