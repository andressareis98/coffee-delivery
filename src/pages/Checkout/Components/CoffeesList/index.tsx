import { useContext } from "react";
import { CounterComponent } from "../../../../components/Counter";
import { Coffee } from "../../../../interfaces/Coffee";
import {
  ButtonsContainer,
  CoffeeImage,
  Container,
  CoffeeTitle,
  Price,
  RemoveCoffeeButton,
  TitleAndButtonsContainer,
} from "./styles";
import trash from "../../../../../src/assets/icons/Trash.svg";
import { CoffeesContext } from "../../../../contexts/CoffeesContext";

export function CoffeesList() {
  const { coffees, remover } = useContext(CoffeesContext);

  const handleDeleteCoffee = (coffee: Coffee) => {
    remover(coffee);
  };

  return (
    <>
      {coffees.map((coffee, index) => {
        return (
          <Container key={index}>
            <CoffeeImage
              src={`../../../public/assets/images/coffees/${coffee.src}`}
            />
            <TitleAndButtonsContainer>
              <CoffeeTitle>{coffee.name}</CoffeeTitle>
              <ButtonsContainer>
                <CounterComponent coffee={coffee} />
                <RemoveCoffeeButton onClick={() => handleDeleteCoffee(coffee)}>
                  <img src={trash} />
                  <span>Remover</span>
                </RemoveCoffeeButton>
              </ButtonsContainer>
            </TitleAndButtonsContainer>
            <Price>
              {coffee.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 2,
              })}
            </Price>
          </Container>
        );
      })}
    </>
  );
}
