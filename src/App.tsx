import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { CoffeesContextProvider } from "./contexts/CoffeesContext";
import { AddressContextProvider } from "./contexts/AddressContext";
import { PaymentTypeContextProvider } from "./contexts/PaymentTypeContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeesContextProvider>
        <AddressContextProvider>
          <PaymentTypeContextProvider>
            <BrowserRouter>
              <GlobalStyle />
              <Router />
            </BrowserRouter>
          </PaymentTypeContextProvider>
        </AddressContextProvider>
      </CoffeesContextProvider>
    </ThemeProvider>
  );
}
