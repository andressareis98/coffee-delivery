import { useContext } from "react";
import {
  FormContainer,
  InputLabel,
  PaymentContainer,
  TitleForm,
} from "./styles";

import money from "../../../../assets/icons/MoneyCheckout.svg";
import creditCard from "../../../../assets/icons/CreditCard.svg";
import debitCard from "../../../../assets/icons/DebitCard.svg";
import moneyNote from "../../../../assets/icons/MoneyNote.svg";
import { PaymentTypeContext } from "../../../../contexts/PaymentTypeContext";

export function PaymentForm() {
  const { paymentType, setPaymentType } = useContext(PaymentTypeContext);

  const handlePaymentType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentType(e.target.value);
  };

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
      <FormContainer>
        <InputLabel isChecked={paymentType === "credit"}>
          <input
            checked={paymentType === "credit"}
            value="credit"
            onChange={handlePaymentType}
            type="radio"
            name="payment"
          />
          <img src={creditCard} />
          cartão de crédito
        </InputLabel>
        <InputLabel isChecked={paymentType === "debit"}>
          <input
            checked={paymentType === "debit"}
            value="debit"
            onChange={handlePaymentType}
            type="radio"
            name="payment"
          />
          <img src={debitCard} />
          cartão de débito
        </InputLabel>
        <InputLabel isChecked={paymentType === "money"}>
          <input
            checked={paymentType === "money"}
            value="money"
            onChange={handlePaymentType}
            type="radio"
            name="payment"
          />
          <img src={moneyNote} />
          dinheiro
        </InputLabel>
      </FormContainer>
    </PaymentContainer>
  );
}
