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
  Container,
} from "./styles";

export function CoffeeList() {
  const initialSrc = "../../../public/assets/images/coffees/";
  return (
    <Container>
      <TitlePage>Nossos cafés</TitlePage>
      <Coffees>
        {coffees.map((coffee) => {
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
    </Container>
  );
}
