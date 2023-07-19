import logo from "../../../public/assets/logo.svg";

import {
  HeaderContainer,
  Actions,
  Localization,
  ShoppingCartButton,
} from "./styles";
import pin from "../../assets/icons/Pin.svg";
import shoppingCartHeader from "../../assets/icons/ShoppingCartHeader.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img role="h1" aria-label="Coffee Delivery" src={logo} />
      <Actions>
        <Localization>
          <img aria-hidden src={pin} />
          <span>Porto Alegre, RS</span>
        </Localization>
        <ShoppingCartButton aria-label="Sacola">
          <img aria-hidden src={shoppingCartHeader} />
        </ShoppingCartButton>
      </Actions>
    </HeaderContainer>
  );
}
