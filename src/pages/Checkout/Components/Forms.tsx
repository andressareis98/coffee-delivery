import {
  ButtonPaymentType,
  TitleForm,
  PaymentsTypesContainer,
  CepInput,
  Input,
  InputsContainer,
  AddressContainer,
  PaymentContainer,
} from "./styles";

import pin from "../../../assets/icons/PinCheckout.svg";
import money from "../../../assets/icons/MoneyCheckout.svg";
import creditCard from "../../../assets/icons/CreditCard.svg";
import debitCard from "../../../assets/icons/DebitCard.svg";
import moneyNote from "../../../assets/icons/MoneyNote.svg";

export function Forms() {
  return (
    <>
      <AddressContainer>
        <TitleForm>
          <img src={pin} aria-hidden />
          <div>
            <h3>Endereço de Entrega</h3>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </TitleForm>
        <CepInput aria-label="Cep" type="text" placeholder="CEP" />
        <Input aria-label="Rua" type="text" placeholder="Rua" />
        <InputsContainer>
          <Input aria-label="Número" type="number" placeholder="Número" />
          <Input
            aria-label="Complemento"
            type="text"
            placeholder="Complemento"
          />
        </InputsContainer>
        <InputsContainer>
          <Input aria-label="Bairro" type="text" placeholder="Bairro" />
          <Input aria-label="Cidade" type="text" placeholder="Cidade" />
          <Input aria-label="UF" type="text" placeholder="UF" />
        </InputsContainer>
      </AddressContainer>
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
    </>
  );
}
