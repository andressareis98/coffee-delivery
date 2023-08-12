import {
  Container,
  ColumnContainer,
  Title,
  PurchaseDataContainer,
  Table,
  TableRow,
  ParameterName,
  ParameterValue,
  Tbody,
  ConfirmOrderButton,
} from "./styles";

import { useContext } from "react";

import { Forms } from "./Components/Forms";

import { CoffeesContext } from "../../contexts/CoffeesContext";
import { CoffeeItem } from "./Components/CoffeItem";

export function Checkout() {
  const { coffees } = useContext(CoffeesContext);

  const totalSum = coffees.reduce((acc, coffee) => {
    return acc + coffee.price * coffee.quantity;
  }, 0);

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
            return <CoffeeItem key={index} coffee={coffee} />;
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
