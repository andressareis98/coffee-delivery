import {
  ButtonPaymentType,
  TitleForm,
  PaymentsTypesContainer,
  PaymentContainer,
} from "./styles";

import money from "../../../../assets/icons/MoneyCheckout.svg";
import creditCard from "../../../../assets/icons/CreditCard.svg";
import debitCard from "../../../../assets/icons/DebitCard.svg";
import moneyNote from "../../../../assets/icons/MoneyNote.svg";

export function PaymentForm() {
  return (
    <PaymentContainer>
      <TitleForm>
        <img src={money} aria-hidden />
        <div>
          <h3>Pagamento</h3>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </TitleForm>
      <PaymentsTypesContainer>
        <ButtonPaymentType>
          <img src={creditCard} />
          <span>Cartão de crédito</span>
        </ButtonPaymentType>
        <ButtonPaymentType>
          <img src={debitCard} />
          <span>Cartão de débito</span>
        </ButtonPaymentType>
        <ButtonPaymentType>
          <img src={moneyNote} />
          <span>Dinheiro</span>
        </ButtonPaymentType>
      </PaymentsTypesContainer>
    </PaymentContainer>
  );
}
