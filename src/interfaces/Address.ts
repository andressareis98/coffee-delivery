// Criar interface para endereço que contenha os seguintes campos: rua, numero, bairro, cidade, estado, cep e complemento

export interface Address {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}
