import { produce } from "immer";
import { ActionTypes } from "./actions";
import { Coffee } from "../../interfaces/Coffee";

interface CoffeesState {
  coffees: Coffee[];
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD:
      return produce(state, (draft) => {
        const coffeeIndex = draft.coffees.findIndex(
          (coffee) => coffee.id === action.payload.coffee.id
        );

        if (coffeeIndex >= 0) {
          draft.coffees[coffeeIndex].quantity += 1;
        } else {
          draft.coffees.push({ ...action.payload.coffee, quantity: 1 });
        }
      });

    case ActionTypes.DIMINUIR_QUANTIDADE:
      return produce(state, (draft) => {
        const coffeeIndex = draft.coffees.findIndex(
          (coffee) => coffee.id === action.payload.coffee.id
        );

        if (coffeeIndex >= 0) {
          if (draft.coffees[coffeeIndex].quantity > 1) {
            draft.coffees[coffeeIndex].quantity -= 1;
          } else {
            draft.coffees.splice(coffeeIndex, 1);
          }
        }
      });

    // AÇÃO DE REMOVER UM CAFÉ DA SACOLA
    case ActionTypes.REMOVER:
      return produce(state, (draft) => {
        const coffeeIndex = draft.coffees.findIndex(
          (coffee) => coffee.id === action.payload.coffee.id
        );

        if (coffeeIndex >= 0) {
          draft.coffees.splice(coffeeIndex, 1);
        }
      });

    // Ação de remover tudo da sacola
    case ActionTypes.REMOVER_TUDO:
      return produce(state, (draft) => {
        draft.coffees = [];
      });

    default:
      return state;
  }
}
