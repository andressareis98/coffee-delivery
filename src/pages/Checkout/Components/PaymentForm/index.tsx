import { useState } from "react";
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

export function PaymentForm() {
  const [selected, setSelected] = useState("");

  const handlePaymentType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
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
        <InputLabel isChecked={selected === "credit"}>
          <input
            checked={selected === "credit"}
            value="credit"
            onChange={handlePaymentType}
            type="radio"
            name="payment"
          />
          <img src={creditCard} />
          cartão de crédito
        </InputLabel>
        <InputLabel isChecked={selected === "debit"}>
          <input
            checked={selected === "debit"}
            value="debit"
            onChange={handlePaymentType}
            type="radio"
            name="payment"
          />
          <img src={debitCard} />
          cartão de débito
        </InputLabel>
        <InputLabel isChecked={selected === "money"}>
          <input
            checked={selected === "money"}
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
