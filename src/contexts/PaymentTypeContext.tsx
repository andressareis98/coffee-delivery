import { createContext, useState } from "react";

interface PaymentTypeContextType {
  paymentType: string;
  setPaymentType: (paymentType: string) => void;
}

export const PaymentTypeContext = createContext({} as PaymentTypeContextType);

interface PaymentTypeProviderProps {
  children: React.ReactNode;
}

export function PaymentTypeContextProvider({
  children,
}: PaymentTypeProviderProps) {
  const [paymentType, setPaymentType] = useState("");

  return (
    <PaymentTypeContext.Provider value={{ paymentType, setPaymentType }}>
      {children}
    </PaymentTypeContext.Provider>
  );
}
