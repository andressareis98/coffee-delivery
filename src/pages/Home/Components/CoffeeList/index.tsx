import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { coffeesInitial } from "../../../../mocks/coffees";
import shoppingCart from "../../../../assets/icons/ShoppingCart.svg";
import {
  Card,
  Coffees,
  TitlePage,
  Description,
  ImageWrapper,
  Name,
  Tag,
  TagsContainer,
  Buy,
  ButtonShopping,
  PriceContainer,
  DollarSign,
  PriceValue,
  Container,
} from "./styles";
import { CounterComponent } from "../../../../components/Counter";
import { CoffeesContext } from "../../../../contexts/CoffeesContext";
import { Coffee } from "../../../../interfaces/Coffee";

export function CoffeeList() {
  const initialSrc = "../../../public/assets/images/coffees/";

  const navigate = useNavigate();

  const { add } = useContext(CoffeesContext);

  const handleBuyCoffee = (coffee: Coffee) => {
    add(coffee);
    navigate("/checkout");
  };

  return (
    <Container>
      <TitlePage>Nossos cafés</TitlePage>
      <Coffees>
        {coffeesInitial.map((coffee) => {
          return (
            <Card key={coffee.id}>
              <ImageWrapper src={`${initialSrc}${coffee.src}`} aria-hidden />
              <TagsContainer>
                {coffee.tags.map((tag, index) => {
                  return <Tag key={index}>{tag}</Tag>;
                })}
              </TagsContainer>

              <Name>{coffee.name}</Name>
              <Description>{coffee.description}</Description>

              <Buy>
                <PriceContainer>
                  <DollarSign>R$</DollarSign>
                  <PriceValue>
                    {coffee.price.toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                    })}
                  </PriceValue>
                </PriceContainer>
                <CounterComponent coffee={coffee} />
                <ButtonShopping onClick={() => handleBuyCoffee(coffee)}>
                  <img src={shoppingCart} />
                </ButtonShopping>
              </Buy>
            </Card>
          );
        })}
      </Coffees>
    </Container>
  );
}
