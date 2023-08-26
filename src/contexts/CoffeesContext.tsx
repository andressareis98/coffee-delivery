import { ReactNode, createContext, useEffect, useReducer } from "react";
import { coffeesReducer } from "../reducers/coffees/reducer";
import {
  adicionarNaSacola,
  diminuirQuantidade,
  removerDaSacola,
  esvaziarSacola,
} from "../reducers/coffees/actions";
import { Coffee } from "../interfaces/Coffee";

interface CoffeesContextType {
  coffees: Coffee[];
  add: (coffee: Coffee) => void;
  diminuir: (coffee: Coffee) => void;
  remover: (coffee: Coffee) => void;
  removerTudo: () => void;
}

export const CoffeesContext = createContext({} as CoffeesContextType);

interface CoffeesContextProviderProps {
  children: ReactNode;
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    coffeesReducer,
    { coffees: [] },
    (initialState) => {
      const storedStateAsJson = localStorage.getItem(
        "@coffee-delivery:coffees-state-1.0.0"
      );
      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson);
      }
      return initialState;
    }
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesState);
    localStorage.setItem("@coffee-delivery:coffees-state-1.0.0", stateJSON);
  }, [coffeesState]);

  const { coffees } = coffeesState;

  function add(coffee: Coffee) {
    dispatch(adicionarNaSacola(coffee));
  }

  function diminuir(coffee: Coffee) {
    dispatch(diminuirQuantidade(coffee));
  }

  function remover(coffee: Coffee) {
    dispatch(removerDaSacola(coffee));
  }

  function removerTudo() {
    dispatch(esvaziarSacola());
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        add,
        diminuir,
        remover,
        removerTudo,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
