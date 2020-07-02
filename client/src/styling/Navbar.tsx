import styled from "styled-components";

export const MainSection = styled.div`
  height: 4rem;
  background-color: transparent;
  diplay: flex;
  justify-content: center;
  padding: 0.1rem;
  text-transform: uppercase;
`;

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding: 1.2rem;
    text-decoration: none;
    color: black;
    font-weight: 400;
    font-size: 1.2rem;

    :hover {
      color: green;
    }
  }
`;
