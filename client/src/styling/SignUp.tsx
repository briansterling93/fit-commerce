import styled from 'styled-components';

export const MainSection = styled.div`
  background-color: white;

  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const AuthBoxBorder = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  margin-top: 2rem;

  @media only screen and (max-width: 580px) {
    margin-top: 0.5rem;
  }
`;

export const AuthUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f7f7f7;
  height: 27rem;
  width: 28rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;
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
    height: 21rem;

    h1 {
      font-size: 1.4rem;
    }
  }

  @media only screen and (max-width: 380px) {
    width: 18rem;
    height: 19rem;

    h1 {
      font-size: 1.1rem;
    }
  }

  @media only screen and (max-width: 295px) {
    width: 16rem;
    height: 19rem;

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

  input {
    padding-left: 0.5rem;

    ::placeholder {
      color: black;
      font-size: 0.8rem;
    }
  }

  i {
    color: #07006b;
  }

  @media only screen and (max-width: 580px) {
    width: 13rem;
    height: 0.6rem;
    i {
      font-size: 0.6rem;
    }

    input {
      ::placeholder {
        font-size: 0.6rem;
      }
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
  padding: 0.5rem;
`;

export const UiBtn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 0.3rem;
  button {
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    outline: none;
    height: 2rem;
    width: 7rem;
    font-size: 0.8rem;
    font-weight: 700;
  }
  p {
    font-size: 0.9rem;
  }

  a {
    color: #68a5ff;
    text-decoration: none;
  }

  @media only screen and (max-width: 580px) {
    button {
      width: 7rem;
      height: 2rem;
      font-size: 0.7rem;
      font-weight: 500;
    }

    p {
      font-size: 0.8rem;
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
  font-size: 0.8rem;
  color: #ff6969;

  @media only screen and (max-width: 580px) {
    font-size: 0.5rem;
  }
`;
