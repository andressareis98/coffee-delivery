import {
  BodyContainer,
  Container,
  Information,
  OrderInfo,
  Subtitle,
  SuccessImage,
  Title,
} from "./styles";

import success from "../../assets/images/success.svg";
import pinSuccess from "../../assets/icons/PinSuccess.svg";
import timerSuccess from "../../assets/icons/TimerSuccess.svg";
import moneySuccess from "../../assets/icons/MoneySuccess.svg";
import { useContext } from "react";
import { AddressContext } from "../../contexts/AddressContext";

export function Success() {
  const { address } = useContext(AddressContext);

  return (
    <Container>
      <Title>Uhu! Pedido confirmado</Title>
      <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>
      <BodyContainer>
        <Information>
          <OrderInfo>
            <img src={pinSuccess} aria-hidden />
            <div>
              <span>
                Entrega em{" "}
                <strong>
                  {address.street}, {address.number}
                </strong>
              </span>
              <span>
                {address.neighborhood} - {address.city}, {address.state}
              </span>
            </div>
          </OrderInfo>
          <OrderInfo>
            <img src={timerSuccess} aria-hidden />
            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </OrderInfo>
          <OrderInfo>
            <img src={moneySuccess} aria-hidden />
            <div>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </div>
          </OrderInfo>
        </Information>
        <SuccessImage aria-hidden src={success} />
      </BodyContainer>
    </Container>
  );
}
