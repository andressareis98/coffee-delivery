import {
  Container,
  ColumnContainer,
  Title,
  PurchaseDataContainer,
  CoffeeItem,
  CoffeeImage,
  TitleAndButtonsContainer,
  CoffeeTitle,
  ButtonsContainer,
  RemoveCoffeeButton,
  Price,
  Table,
  TableRow,
  ParameterName,
  ParameterValue,
  Tbody,
  ConfirmOrderButton,
} from "./styles";

import { Forms } from "./Components/Forms";
import { Coffee } from "../../interfaces/Coffee";
import { CounterComponent } from "../../components/Counter";

import trash from "../../assets/icons/Trash.svg";

export function Checkout() {
  const coffees: Coffee[] = [
    {
      id: 1,
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
      src: "expresso-tradicional.png",
      tags: ["tradicional"],
    },
    {
      id: 2,
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      price: 9.9,
      src: "expresso-americano.png",
      tags: ["tradicional"],
    },
  ];

  const totalSum = coffees.reduce((acc, coffee) => acc + coffee.price, 0);

  const freight = 3.5;

  const amount = totalSum + freight;

  const ConvertToCurrency = (value: number) => {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  };

  const TableValues = [
    {
      title: "Total de Itens",
      value: ConvertToCurrency(totalSum),
    },
    {
      title: "Entrega",
      value: ConvertToCurrency(freight),
    },
    {
      title: "Total",
      value: ConvertToCurrency(amount),
    },
  ];

  return (
    <Container>
      <ColumnContainer>
        <Title>Complete seu pedido</Title>
        <Forms />
      </ColumnContainer>
      <ColumnContainer>
        <Title>Cafés selecionados</Title>
        <PurchaseDataContainer>
          {coffees.map((coffee, index) => {
            return (
              <CoffeeItem key={index}>
                <CoffeeImage
                  src={`../../../public/assets/images/coffees/${coffee.src}`}
                />
                <TitleAndButtonsContainer>
                  <CoffeeTitle>{coffee.name}</CoffeeTitle>
                  <ButtonsContainer>
                    <CounterComponent />
                    <RemoveCoffeeButton>
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
              </CoffeeItem>
            );
          })}
          <Table>
            <Tbody>
              {TableValues.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <ParameterName>{item.title}</ParameterName>
                    <ParameterValue>{item.value}</ParameterValue>
                  </TableRow>
                );
              })}
            </Tbody>
          </Table>
          <ConfirmOrderButton>Confirmar pedido</ConfirmOrderButton>
        </PurchaseDataContainer>
      </ColumnContainer>
    </Container>
  );
}
