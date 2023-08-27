import { Address } from "./../../interfaces/Address";
import { produce } from "immer";
import { ActionTypes } from "./actions";

export interface AddressState {
  address: Address;
}

const initialState: Address = {
  cep: "",
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
};

export function addressReducer(state: AddressState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD:
      return produce(state, (draft) => {
        draft.address = action.payload.address;
      });
    case ActionTypes.REMOVER_ENDERECO:
      return produce(state, (draft) => {
        draft.address = initialState;
      });

    default:
      return state;
  }
}
