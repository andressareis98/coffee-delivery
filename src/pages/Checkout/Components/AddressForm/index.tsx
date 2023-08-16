import {
  TitleForm,
  CepInput,
  Input,
  InputsContainer,
  AddressContainer,
} from "./styles";

// Assets
import pin from "../../../../assets/icons/pin.svg";

export function AddressForm() {
  return (
    <AddressContainer>
      <TitleForm>
        <img src={pin} aria-hidden />
        <div>
          <h3>Endereço de Entrega</h3>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </TitleForm>
      <form>
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
      </form>
    </AddressContainer>
  );
}
