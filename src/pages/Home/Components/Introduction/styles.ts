import styled from "styled-components";
import background from "../../../../assets/images/background.png";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100vw;
  height: 544px;
  background-repeat: no-repeat;
  background-size: 100vw auto;
  background-image: url(${background});
  padding: 5.875rem 10rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 820px) {
    padding: 2rem;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  font-family: "Baloo 2";
  font-weight: bolder;
  margin-bottom: 1rem;
`;

export const Text = styled.h3`
  font-size: 20px;
  font-weight: 100;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4.125rem;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 20px;
  flex-basis: calc(50% - 10px);
`;

export const CoffeeImage = styled.img`
  display: block;
`;
