import styled from "styled-components";

export const Container = styled.div`
  margin: 80px 160px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme["yellow-dark"]};
  font-size: 2rem;
  font-family: "Baloo 2";
  font-weight: 800;
`;

export const Subtitle = styled.h3`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 1.25rem;
  margin-top: 0.25rem;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const Information = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  flex-basis: 50%;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme["yellow"]},
        ${(props) => props.theme["purple"]}
      )
      border-box;
  border-radius: 0.375rem 2.25rem;
  border: 1px solid transparent;
  padding: 2.5rem;
  row-gap: 32px;
`;

export const SuccessImage = styled.img`
  flex-basis: 50%;
  width: 492px;
  height: 293px;
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  font-size: 1rem;

  div {
    display: flex;
    flex-direction: column;
  }
`;
