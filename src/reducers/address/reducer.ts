// Criar reducer para address

import { Address } from "../../interfaces/Address";

interface initialState {
  address: Address;
}

export function addressReducer(state: initialState, action: any) {
  switch (action.type) {
    case "ADD_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };
    default:
      return state;
  }
}
