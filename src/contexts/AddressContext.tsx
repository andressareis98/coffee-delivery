// Criar useContext para o address

import { createContext, useState } from "react";
import { Address } from "../interfaces/Address";

interface CoffeesContextType {
  address: Address;
  setAddress: (address: Address) => void;
}

export const AddressContext = createContext({} as CoffeesContextType);

interface AddressProviderProps {
  children: React.ReactNode;
}

const initialAddress: Address = {
  cep: "",
  street: "",
  number: 0,
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
};

export function AddressContextProvider({ children }: AddressProviderProps) {
  const [address, setAddress] = useState<Address>(initialAddress);

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
}
