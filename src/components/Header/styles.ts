import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  padding: 2rem 10rem;
  justify-content: space-between;
  background-color: ${(props) => props.theme["background"]};
  width: 100%;

  @media screen and (max-width: 480px) {
    padding: 2rem;
  }
`;

export const Actions = styled.header`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
`;

export const Localization = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;
  padding: 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme["purple-dark"]};
  background-color: ${(props) => props.theme["purple-light"]};
`;

export const ShoppingCartButton = styled.div`
  padding: 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme["yellow-light"]};
  cursor: pointer;
`;

export const Badge = styled.span`
  position: absolute;
  background-color: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme["white"]};
  font-size: 0.75rem;
  line-height: 130%;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  transform: translate(90%, -80%);
  z-index: 1;
`;
