import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  padding: 40px;
`;

export const TitleContainer = styled.div`
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

export const Form = styled.form`
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield; /* Para Firefox */
  }
`;

export const Input = styled.input`
  color: ${(props) => props.theme["base-text"]};

  background-color: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 12px;
  width: 100%;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const CepInput = styled(Input)`
  width: 200px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
