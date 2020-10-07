import styled from "styled-components";

export const MainSection = styled.div`
  background-color: #efefef;
  height: 100vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(25, 26, 25, 0.8),
      rgba(51, 51, 51, 0.8),
      rgba(64, 64, 64, 0.8)
    ),
  background-size: cover;
  overflow: scroll;
`;

export const SecondarySection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  background-color: transparent;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    color: black;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.2rem;
  }

  li {
    list-style-type: none;
  }
`;

export const BoxDiv = styled.div`
  background-color: white;
  border: 1px solid #dfdfdf;
  min-height: 80vh;
  width: 90rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RecentsDiv = styled.div`
  height: 30rem;
  width: 20rem;
  background-color: blue;
`;
export const InfoDiv = styled.div`
  height: 30rem;
  width: 20rem;
  background-color: grey;
`;

export const BoxDivMain = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WelcomeDiv = styled.div`
  padding-bottom: 1rem;
  font-size: 1.6rem;
`;

export const DivSpacer = styled.div`
  padding: 1rem;
`;
