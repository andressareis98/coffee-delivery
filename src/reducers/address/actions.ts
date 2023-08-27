import { Address } from "../../interfaces/Address";

export enum ActionTypes {
  ADD = "ADD",
  REMOVER_ENDERECO = "REMOVER_ENDERECO",
}

export function adicionarEndereco(address: Address) {
  return {
    type: ActionTypes.ADD,
    payload: {
      address,
    },
  };
}

export function removerEndereco() {
  return {
    type: ActionTypes.REMOVER_ENDERECO,
  };
}
