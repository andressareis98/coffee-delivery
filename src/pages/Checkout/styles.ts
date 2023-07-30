import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  flex-direction: row;
  padding: 80px 160px;
  gap: 32px;
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

export const CoffeeItem = styled.div`
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
  margin-right: 8px;
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

export const Table = styled.table`
  border: none;
  width: 100%;
  margin-top: 24px;
  border-collapse: separate;
  border-spacing: 0 12px;
`;

export const Tbody = styled.tbody``;

export const TableRow = styled.tr`
  font-size: 14px;
  line-height: 130%;
  color: ${(props) => props.theme["base-text"]};
  margin-bottom: 12px;
  &:last-child {
    font-weight: bolder;
    font-size: 20px;
  }
`;

export const ParameterName = styled.td`
  text-align: initial;
`;

export const ParameterValue = styled.td`
  text-align: end;
`;

export const ConfirmOrderButton = styled.button`
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
`;
