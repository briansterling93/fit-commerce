import styled from "styled-components";

export const MainSection = styled.div`
background-color: #f0eeee;
  height: 100vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(25, 26, 25, 0.8),
      rgba(51, 51, 51, 0.8),
      rgba(64, 64, 64, 0.8)
    ),
   
  background-size: cover;
`;

export const SecondarySection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  li {
    list-style-type: none;
  }
  h1 {
    font-size: 1.5rem;
    color: black;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.2rem;
  }
`;

export const BoxDiv = styled.div`
  background-color: white;
  border: 1px solid #dfdfdf;
  min-height: 80vh;
  width: 90rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FilterBox = styled.div`
  height: 30rem;
  width: 14rem;
  border: 1px solid black;

  h1 {
    font-size: 0.8rem;
    font-weight: 400;
    text-align: center;
  }
`;

export const CurrentProducts = styled.div`
  height: 30rem;
  width: 80rem;
`;

export const FilterCategories = styled.div``;
export const FilterPrice = styled.div``;
