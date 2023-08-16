import { CoffeesContext } from "../../../../contexts/CoffeesContext";
import {
  Table,
  TableRow,
  ParameterName,
  ParameterValue,
  Tbody,
} from "./styles";

import { useContext } from "react";

export function Values() {
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
  );
}
