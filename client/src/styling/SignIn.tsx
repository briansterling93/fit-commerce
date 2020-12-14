import styled from 'styled-components';

export const MainSection = styled.div`
  background-color: white;
  // height: 100vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(25, 26, 25, 0.8),
      rgba(51, 51, 51, 0.8),
      rgba(64, 64, 64, 0.8)
    ), 
background-size: cover;
overflow-x: hidden;
overflow-y: hidden;
`;

export const AuthBoxBorder = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 10rem;
  background-color: white;

  @media only screen and (max-width: 462px) {
    margin-top: 3rem;
  }
`;

export const AuthUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  height: 16rem;
  width: 28rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border: 0.2px solid #999;
  border-radius: 1rem;

  input {
    background-color: transparent;
    height: 1.8rem;
    width: 18rem;
    border-radius: 0.3rem;
    // border: 0.2px solid black;
    border: none;
    outline: none;
  }

  h1 {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 462px) {
    width: 24rem;

    h1 {
      font-size: 1.2rem;
    }
  }

  @media only screen and (max-width: 395px) {
    width: 21rem;

    h1 {
      font-size: 1.1rem;
    }
  }

  @media only screen and (max-width: 350px) {
    width: 18rem;
    // height: 19rem;

    input {
      font-size: 0.8rem;
    }

    h1 {
      font-size: 1.1rem;
    }
  }
`;

export const UIinput = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 0.3rem;
  border: 0.2px solid black;
  width: 18rem;
  height: 1.3rem;
  padding: 0.5rem;

  input {
    padding-left: 0.5rem;
  }

  i {
    color: #07006b;
  }

  @media only screen and (max-width: 462px) {
    width: 16rem;
    height: 1.2rem;
  }

  @media only screen and (max-width: 395px) {
    width: 14rem;
    height: 1rem;
  }

  @media only screen and (max-width: 350px) {
    width: 12rem;
    height: 1rem;
  }
`;

export const UIinputPadding = styled.div`
  padding: 0.3rem;
`;

export const UiBtn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 0.5rem;
  button {
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    outline: none;
    height: 2rem;
    width: 4rem;

    :hover {
      opacity: 0.6;
    }
  }

  p {
    font-size: 1rem;
  }

  a {
    color: #68a5ff;
    text-decoration: none;
  }

  @media only screen and (max-width: 395px) {
    button {
      width: 5rem;
      height: 1.7rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media only screen and (max-width: 350px) {
    button {
      width: 5rem;
      height: 1.4rem;
      font-size: 0.7rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

export const ErrorMsg = styled.div`
  height: 0.6rem;
  text-align: center;
  font-size: 0.8rem;
  color: #ff6969;

  @media only screen and (max-width: 395px) {
    font-size: 0.7rem;
  }
`;
