import styled from "styled-components";

export const Counter = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme["base-button"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 6px;
`;

export const ButtonActionCount = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 1.2rem;
  color: ${(props) => props.theme["purple"]};
  background-color: ${(props) => props.theme["base-button"]};
  padding: 0.5rem;

  &:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;

export const AddButton = styled(ButtonActionCount)``;
export const DecreaseButton = styled(ButtonActionCount)``;

export const Visor = styled.div`
  border: none;
  padding: 0.5rem;
`;
