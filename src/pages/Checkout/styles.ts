import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  flex-direction: row;
  padding: 80px 160px;
  gap: 32px;

  a {
    text-decoration: none;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-family: "Baloo 2";
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
`;

export const PurchaseDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;
  padding: 40px;
`;

export const ConfirmOrderButton = styled.button`
  text-decoration: none;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme["yellow"]};
  font-size: 14px;
  text-transform: uppercase;
  line-height: 130%;
  color: ${(props) => props.theme["white"]};
  margin-top: 24px;
  padding: 12px;

  &:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
