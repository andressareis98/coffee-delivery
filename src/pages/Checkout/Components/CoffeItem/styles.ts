import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 24px;
  border-bottom: 1px solid;
  border-color: ${(props) => props.theme["base-button"]};

  &:not(:first-child) {
    padding-top: 24px;
  }
`;

export const CoffeeImage = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 20px;
`;

export const TitleAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CoffeeTitle = styled.span`
  font: 16px;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const RemoveCoffeeButton = styled.button`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  padding: 8px;
  font-size: 12px;
  text-transform: uppercase;
  color: ${(props) => props.theme["base-text"]};
  background-color: ${(props) => props.theme["base-button"]};
  border: none;
  border-radius: 6px;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: bolder;
  color: ${(props) => props.theme["base-text"]};
  margin-left: auto;
`;
