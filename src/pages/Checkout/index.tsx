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

import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeesContext";
import { AddressContext } from "../../contexts/AddressContext";
import { PaymentTypeContext } from "../../contexts/PaymentTypeContext";

export function Checkout() {
  const { coffees, removerTudo } = useContext(CoffeesContext);
  const { address, removeAddress } = useContext(AddressContext);
  const { paymentType } = useContext(PaymentTypeContext);

  const navigate = useNavigate();

  const addressIsComplete = Boolean(
    address.cep &&
      address.city &&
      address.neighborhood &&
      address.number &&
      address.street
  );

  const paymentTypeIsComplete = Boolean(paymentType);

  const hasCoffees = Boolean(coffees.length);

  const isComplete = addressIsComplete && paymentTypeIsComplete && hasCoffees;

  const handleConfirmOrder = () => {
    navigate("/success");
    removerTudo();
    removeAddress();
  };

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

          <ConfirmOrderButton
            disabled={!isComplete}
            onClick={handleConfirmOrder}
          >
            Confirmar pedido
          </ConfirmOrderButton>
        </PurchaseDataContainer>
      </ColumnContainer>
    </Container>
  );
}
