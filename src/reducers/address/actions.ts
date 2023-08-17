import { Address } from "../../interfaces/Address";

export enum AddressActionTypes {
  ADD_ADDRESS = "ADD_ADDRESS",
}

export function addAddress(address: Address) {
  return {
    type: AddressActionTypes.ADD_ADDRESS,
    payload: address,
  };
}
