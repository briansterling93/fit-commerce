import styled from 'styled-components';

export const MainSection = styled.div`
background-color: #FAFAFA;
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
  margin-top: 2.5rem;
  background-color: transparent;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    color: #001154;
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
  // border: 1px solid #dfdfdf;
  min-height: 80vh;
  width: 90rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 1.1rem;

    :hover {
      color: black;
    }
  }
`;

export const RecentsDiv = styled.div`
  height: 30rem;
  width: 20rem;
  border-right: 1px solid #dfdfdf;
  text-align: center;

  h1 {
    text-align: center;
    font-size: 1.1rem;
  }

  button {
    background-color: white;
    color: black;
    border: 0.5px solid #001154;
    cursor: pointer;
    height: 2rem;
    font-size: 1rem;
    width: 11rem;
    font-weight: 400;
    outline: none;

    :hover {
      opacity: 0.6;
    }
  }
`;
export const InfoDiv = styled.div`
  height: 30rem;
  width: 20rem;
  // border: 1px solid black;
  text-align: center;

  h1 {
    text-align: center;
    font-size: 1.1rem;
  }
`;

export const InfoText = styled.div`
  padding-top: 1rem;
  height: 10rem;
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

export const BtnDiv = styled.div`
  height: 1rem;
  padding-top: 10rem;
  text-align: center;
`;
export const LogoutBtn = styled.div`
  margin-top: 10rem;
  height: 1rem;

  button {
    background-color: #b20000;
    color: white;
    border: none;
    cursor: pointer;
    height: 2rem;
    width: 7rem;
    font-weight: 600;
    outline: none;

    :hover {
      opacity: 0.6;
    }
  }
`;
