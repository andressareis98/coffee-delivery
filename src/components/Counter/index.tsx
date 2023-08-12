import { useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeesContext";
import { Coffee } from "../../interfaces/Coffee";
import { AddButton, Counter, DecreaseButton, Visor } from "./styles";

interface Props {
  coffee: Coffee;
}

export const CounterComponent = ({ coffee }: Props) => {
  const { coffees, add, diminuir } = useContext(CoffeesContext);

  const diminuirQuantidade = () => {
    diminuir(coffee);
  };

  const aumentarQuantidade = () => {
    add(coffee);
  };

  const quantity = coffees.find((c) => c.id === coffee.id)?.quantity || 0;

  return (
    <Counter>
      <DecreaseButton
        onClick={() => diminuirQuantidade()}
        aria-label="diminuir"
      >
        -
      </DecreaseButton>
      <Visor>{quantity}</Visor>

      <AddButton onClick={() => aumentarQuantidade()} aria-label="aumentar">
        +
      </AddButton>
    </Counter>
  );
};
