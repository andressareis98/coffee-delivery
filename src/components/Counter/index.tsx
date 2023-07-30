import { AddButton, Counter, DecreaseButton, Visor } from "./styles";

export function CounterComponent() {
  return (
    <Counter>
      <DecreaseButton aria-label="diminuir">-</DecreaseButton>
      <Visor>1</Visor>
      <AddButton aria-label="aumentar">+</AddButton>
    </Counter>
  );
}
