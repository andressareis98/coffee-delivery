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
          <ConfirmOrderButton>Confirmar pedido</ConfirmOrderButton>
        </PurchaseDataContainer>
      </ColumnContainer>
    </Container>
  );
}
