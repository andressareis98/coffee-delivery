import styled from "styled-components";

interface labelProps {
  isChecked: boolean;
}

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  padding: 40px;
`;

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

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const InputLabel = styled.label<labelProps>`
  display: flex;
  flex: 1;
  flex-direction: row;
  border-radius: 6px;
  padding: 16px;
  gap: 12px;
  color: ${(props) => props.theme["base-text"]};
  background-color: ${(props) =>
    props.isChecked ? props.theme["purple-light"] : props.theme["base-button"]};
  border: ${(props) => (props.isChecked ? "1px solid" : "none")};
  text-transform: uppercase;
  font-size: 12px;
  line-height: 160%;
  white-space: nowrap;

  input {
    display: none;
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.isChecked ? "" : props.theme["base-hover"]};
  }
`;
