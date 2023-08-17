import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { CoffeesContextProvider } from "./contexts/CoffeesContext";
import { AddressContextProvider } from "./contexts/AddressContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AddressContextProvider>
        <CoffeesContextProvider>
          <BrowserRouter>
            <GlobalStyle />
            <Router />
          </BrowserRouter>
        </CoffeesContextProvider>
      </AddressContextProvider>
    </ThemeProvider>
  );
}
