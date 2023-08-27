import {
  Container,
  TitleContainer as Title,
  CepInput,
  Form,
  Input,
  InputsContainer,
} from "./styles";

import pin from "../../../../assets/icons/pin.svg";
import { ChangeEvent, useContext } from "react";
import { AddressContext } from "../../../../contexts/AddressContext";

export function AddressForm() {
  const { address, setAddress } = useContext(AddressContext);

  const handleAddress = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "number" && isNaN(Number(value))) return;

    setAddress({ ...address, [name]: value });
  };

  return (
    <Container>
      <Title>
        <img src={pin} aria-hidden />
        <div>
          <h3>Endereço de Entrega</h3>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </Title>
      <Form>
        <CepInput
          required
          name="cep"
          aria-label="Cep"
          type="text"
          placeholder="CEP"
          value={address.cep}
          onChange={handleAddress}
        />
        <Input
          required
          name="street"
          aria-label="Rua"
          type="text"
          placeholder="Rua"
          value={address.street}
          onChange={handleAddress}
        />
        <InputsContainer>
          <Input
            required
            name="number"
            aria-label="Número"
            placeholder="Número"
            value={address.number}
            onChange={handleAddress}
          />
          <Input
            name="complement"
            aria-label="Complemento"
            type="text"
            placeholder="Complemento"
            value={address.complement}
            onChange={handleAddress}
          />
        </InputsContainer>
        <InputsContainer>
          <Input
            name="neighborhood"
            aria-label="Bairro"
            type="text"
            placeholder="Bairro"
            value={address.neighborhood}
            onChange={handleAddress}
          />
          <Input
            required
            name="city"
            aria-label="Cidade"
            type="text"
            placeholder="Cidade"
            value={address.city}
            onChange={handleAddress}
          />
          <Input
            required
            name="state"
            aria-label="UF"
            type="text"
            placeholder="UF"
            value={address.state}
            onChange={handleAddress}
          />
        </InputsContainer>
      </Form>
    </Container>
  );
}
