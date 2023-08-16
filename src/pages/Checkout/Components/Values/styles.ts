import styled from "styled-components";

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
