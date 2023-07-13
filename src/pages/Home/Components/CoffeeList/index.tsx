import { coffees } from "../../../../mocks/coffees";
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
  Counter,
  AddButton,
  Visor,
  DecreaseButton,
  Buy,
  ButtonShopping,
  PriceContainer,
  DollarSign,
  PriceValue,
} from "./styles";

export function CoffeeList() {
  const initialSrc = "../../../public/assets/images/";
  return (
    <>
      <TitlePage>Nossos cafés</TitlePage>
      <Coffees>
        {coffees.map((coffee) => {
          return (
            <Card>
              <ImageWrapper src={`${initialSrc}${coffee.src}`} aria-hidden />
              <TagsContainer>
                {coffee.tags.map((tag) => {
                  return <Tag>{tag}</Tag>;
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
                <Counter>
                  <DecreaseButton aria-label="diminuir">-</DecreaseButton>
                  <Visor>1</Visor>
                  <AddButton aria-label="aumentar">+</AddButton>
                </Counter>
                <ButtonShopping>
                  <img src={shoppingCart} />
                </ButtonShopping>
              </Buy>
            </Card>
          );
        })}
      </Coffees>
    </>
  );
}
