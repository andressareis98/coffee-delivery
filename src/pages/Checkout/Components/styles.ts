import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  padding: 40px;
`;

export const AddressContainer = styled(Container)``;

export const TitleForm = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 32px;

  img {
    width: 22px;
    height: 22px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 2px;

    h3 {
      font-size: 16px;
      color: ${(props) => props.theme["base-subtitle"]};
      line-height: 130%;
    }

    span {
      font-size: 14px;
      color: ${(props) => props.theme["base-text"]};
      line-height: 130%;
    }
  }
`;

export const Input = styled.input`
  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
  color: ${(props) => props.theme["base-text"]};
  background-color: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 12px;
  width: 100%;
`;

export const CepInput = styled(Input)`
  width: 200px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const PaymentContainer = styled(Container)``;

export const PaymentsTypesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const ButtonPaymentType = styled.button`
  display: flex;
  flex: 1;
  flex-direction: row;
  border-radius: 6px;
  padding: 16px;
  gap: 12px;
  color: ${(props) => props.theme["base-text"]};
  background-color: ${(props) => props.theme["base-button"]};
  border: none;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 160%;
  white-space: nowrap;
  flex-wrap: wrap;
`;
