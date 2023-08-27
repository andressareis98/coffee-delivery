import { createContext, useEffect, useReducer } from "react";
import { Address } from "../interfaces/Address";
import { addressReducer } from "../reducers/address/reducer";
import {
  adicionarEndereco,
  removerEndereco,
} from "../reducers/address/actions";

interface AddressContextType {
  address: Address;
  setAddress: (address: Address) => void;
  removeAddress: () => void;
}

export const AddressContext = createContext({} as AddressContextType);

interface AddressContextProviderProps {
  children: React.ReactNode;
}

export function AddressContextProvider({
  children,
}: AddressContextProviderProps) {
  const [addressState, dispatch] = useReducer(
    addressReducer,
    { address: {} },
    (initialState) => {
      const storedStateAsJson = localStorage.getItem(
        "@coffee-delivery:address-state-1.0.0"
      );
      if (storedStateAsJson) {
        return JSON.parse(storedStateAsJson);
      }
      return initialState;
    }
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(addressState);
    localStorage.setItem("@coffee-delivery:address-state-1.0.0", stateJSON);
  }, [addressState]);

  const { address } = addressState;

  function setAddress(address: Address) {
    dispatch(adicionarEndereco(address));
  }

  function removeAddress() {
    dispatch(removerEndereco());
  }

  return (
    <AddressContext.Provider value={{ address, setAddress, removeAddress }}>
      {children}
    </AddressContext.Provider>
  );
}
