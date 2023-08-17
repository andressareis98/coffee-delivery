import {
  Container,
  ColumnContainer,
  Title,
  PurchaseDataContainer,
  ConfirmOrderButton,
} from "./styles";

import { AddressForm } from "./Components/AddressForm";
import { PaymentForm } from "./Components/PaymentForm";
import { CoffeesList } from "./Components/CoffeesList";
import { Values } from "./Components/Values";

import { Link } from "react-router-dom";

export function Checkout() {
  return (
    <Container>
      <ColumnContainer>
        <Title>Complete seu pedido</Title>
        <AddressForm />
        <PaymentForm />
      </ColumnContainer>
      <ColumnContainer>
        <Title>Cafés selecionados</Title>
        <PurchaseDataContainer>
          <CoffeesList />
          <Values />

          <Link to="/success">
            <ConfirmOrderButton>Confirmar pedido</ConfirmOrderButton>
          </Link>
        </PurchaseDataContainer>
      </ColumnContainer>
    </Container>
  );
}
