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
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const { coffees } = useContext(CoffeesContext);

  const navigate = useNavigate();

  const quantityOfItemsInCart = coffees.reduce(
    (acc, coffee) => acc + coffee.quantity,
    0
  );

  const handleCheckout = () => {
    if (quantityOfItemsInCart > 0) {
      navigate("/checkout");
    }
    return;
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Actions>
        <Localization>
          <img aria-hidden src={pin} />
          <span>Porto Alegre, RS</span>
        </Localization>

        <ShoppingCartButton
          onClick={handleCheckout}
          aria-label={`Sacola contém ${quantityOfItemsInCart} ${
            quantityOfItemsInCart !== 1 ? "cafés" : "café"
          }`}
        >
          {quantityOfItemsInCart > 0 ? (
            <Badge>{quantityOfItemsInCart}</Badge>
          ) : null}

          <img aria-hidden src={shoppingCartHeader} />
        </ShoppingCartButton>
      </Actions>
    </HeaderContainer>
  );
}
