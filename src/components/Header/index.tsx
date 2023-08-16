import logo from "../../../public/assets/logo.svg";

import {
  HeaderContainer,
  Actions,
  Localization,
  ShoppingCartButton,
  Badge,
} from "./styles";
import pin from "../../assets/icons/Pin.svg";
import shoppingCartHeader from "../../assets/icons/ShoppingCartHeader.svg";
import { useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeesContext";
import { Link } from "react-router-dom";

export function Header() {
  const { coffees } = useContext(CoffeesContext);

  const quantityOfItemsInCart = coffees.reduce(
    (acc, coffee) => acc + coffee.quantity,
    0
  );

  return (
    <HeaderContainer>
      <img role="h1" aria-label="Coffee Delivery" src={logo} />
      <Actions>
        <Localization>
          <img aria-hidden src={pin} />
          <span>Porto Alegre, RS</span>
        </Localization>
        <Link to="/checkout">
          <ShoppingCartButton
            aria-label={`Sacola contém ${quantityOfItemsInCart} ${
              quantityOfItemsInCart !== 1 ? "cafés" : "café"
            }`}
          >
            {quantityOfItemsInCart > 0 ? (
              <Badge>{quantityOfItemsInCart}</Badge>
            ) : null}

            <img aria-hidden src={shoppingCartHeader} />
          </ShoppingCartButton>
        </Link>
      </Actions>
    </HeaderContainer>
  );
}
