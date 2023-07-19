import {
  Container,
  Title,
  Text,
  CoffeeImage,
  ItemsContainer,
  Item,
} from "./styles";

import coffe from "../../../../assets/images/coffe-introduction.png";
import BoxIcon from "../../../../assets/icons/BoxIntroduction.svg";
import CoffeeIcon from "../../../../assets/icons/CoffeIntroduction.svg";
import ShoppingCartIcon from "../../../../assets/icons/ShoppingCartIntroduction.svg";
import TimerIcon from "../../../../assets/icons/TimerIntroduction.svg";

export function Intoduction() {
  const list = [
    {
      icon: ShoppingCartIcon,
      text: "Compra simples e segura",
    },
    {
      icon: TimerIcon,
      text: "Entrega rápida e rastreada",
    },
    {
      icon: BoxIcon,
      text: "Embalagem mantém o café intacto",
    },
    {
      icon: CoffeeIcon,
      text: "O café chega fresquinho até você",
    },
  ];

  return (
    <Container>
      <div>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <Text>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Text>
        <ItemsContainer>
          {list.map((item) => {
            return (
              <Item key={item.text}>
                <img src={item.icon} />
                <span>{item.text}</span>
              </Item>
            );
          })}
        </ItemsContainer>
      </div>
      <CoffeeImage aria-hidden src={coffe} />
    </Container>
  );
}
