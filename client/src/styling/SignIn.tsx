import styled from 'styled-components';

export const MainSection = styled.div`
  background-color: white;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const AuthBoxBorder = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  background-color: white;

  @media only screen and (max-width: 580px) {
    margin-top: 0.5rem;
  }
`;

export const AuthUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  height: 16rem;
  width: 28rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  font-family: arial;

  input {
    background-color: transparent;
    height: 1.8rem;
    width: 18rem;
    border: none;
    outline: none;
  }

  h1 {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 580px) {
    width: 22rem;
    height: 13.5rem;

    h1 {
      font-size: 1.4rem;
    }
  }

  @media only screen and (max-width: 380px) {
    width: 16rem;
    height: 12rem;

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
  width: 18rem;
  height: 1.3rem;
  padding: 0.5rem;
  outline: none;

  input {
    padding-left: 0.5rem;

    ::placeholder {
      color: black;
      font-size: 0.8rem;
    }
  }

  i {
    color: #07006b;
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 580px) {
    width: 13rem;
    height: 0.6rem;

    input {
      ::placeholder {
        font-size: 0.7rem;
      }
    }

    i {
      font-size: 0.6rem;
    }
  }

  @media only screen and (max-width: 380px) {
    width: 9rem;
    height: 0.4rem;

    input {
      ::placeholder {
        font-size: 0.6rem;
      }
    }
  }
`;

export const UIinputPadding = styled.div`
  padding: 0.3rem;
`;

export const UiBtn = styled.div``;

export const UiBtn2 = styled.div``;

export const BtnsDiv = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  width: 20rem;

  button {
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    outline: none;
    height: 2rem;
    width: 8rem;
    font-size: 0.8rem;
    font-weight: 700;

    :hover {
      opacity: 0.6;
    }
  }
  @media only screen and (max-width: 580px) {
    button {
      width: 7rem;
      height: 2rem;
      font-size: 0.7rem;
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 380px) {
    button {
      width: 5rem;
      height: 1.5rem;
      font-size: 0.6rem;
    }
  }
`;

export const ErrorMsg = styled.div`
  height: 0.6rem;
  text-align: center;
  font-size: 0.7rem;
  color: #ff6969;

  @media only screen and (max-width: 580px) {
    font-size: 0.5rem;
  }
`;
