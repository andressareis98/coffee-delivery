import { Coffee } from "../../interfaces/Coffee";

export enum ActionTypes {
  ADD = "ADD",
  DIMINUIR_QUANTIDADE = "DIMINUIR_QUANTIDADE",
  REMOVER = "REMOVER",
  REMOVER_TUDO = "REMOVER_TUDO",
}

// AÇÃO DE ADICIONAR CAFÉ NA SACOLA
export function adicionarNaSacola(coffee: Coffee) {
  return {
    type: ActionTypes.ADD,
    payload: {
      coffee,
    },
  };
}

// AÇÃO DE DIMINUIR A QUANTIDADE DE UM CAFÉ NA SACOLA
export function diminuirQuantidade(coffee: Coffee) {
  return {
    type: ActionTypes.DIMINUIR_QUANTIDADE,
    payload: {
      coffee,
    },
  };
}

// AÇÃO DE REMOVER UM CAFÉ DA SACOLA
export function removerDaSacola(coffee: Coffee) {
  return {
    type: ActionTypes.REMOVER,
    payload: {
      coffee,
    },
  };
}

// Ação de remover tudo da sacola
export function esvaziarSacola() {
  return {
    type: ActionTypes.REMOVER_TUDO,
  };
}
