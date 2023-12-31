import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme["background"]};
  padding: 32px 160px;

  @media screen and (max-width: 750px) {
    padding: 2rem;
  }
`;

export const TitlePage = styled.h2`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 2rem;
  font-family: "Baloo 2";
  font-weight: 800;
  margin-bottom: 3.375rem;
`;

export const Coffees = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2.5rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 16rem;
  padding: 1.25rem;
  border-radius: 0.375rem 2.25rem;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Tag = styled.div`
  color: ${(props) => props.theme["yellow-dark"]};
  font-size: 0.625rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color: ${(props) => props.theme["yellow-light"]};
  text-transform: uppercase;
  border-radius: 6.25rem;
  margin-right: 5px;
  padding: 0.25rem 0.5rem;
  margin-bottom: 1rem;
  margin-top: 7rem;
`;

export const ImageWrapper = styled.img`
  position: absolute;
  align-self: center;
  top: -5%;
  left: 25%;
  right: 0;
  display: flex;
  justify-content: center;
`;

export const Name = styled.h3`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme["base-label"]};
  text-align: center;
  font-size: 0.875rem;
`;

export const Buy = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2.06rem;
  height: 38px;
`;

export const PriceContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  color: ${(props) => props.theme["base-label"]};
  text-align: center;
  margin-right: 1.25rem;
  height: 100%;
`;

export const DollarSign = styled.span`
  font-size: 0.875rem;
`;

export const PriceValue = styled.span`
  font-size: 1.5rem;
  font-weight: bolder;
  margin-left: 0.5rem;
`;

export const ButtonShopping = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme["purple-dark"]};
  padding: 0.5rem;
  margin-left: 0.5rem;
  height: 100%;

  &:hover {
    background-color: ${(props) => props.theme["purple"]};
    cursor: pointer;
  }
`;
