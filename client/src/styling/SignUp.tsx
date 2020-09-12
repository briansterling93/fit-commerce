import styled from "styled-components";

export const MainSection = styled.div`
  background-color: #D7E5DD;
  height: 100vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(25, 26, 25, 0.8),
      rgba(51, 51, 51, 0.8),
      rgba(64, 64, 64, 0.8)
    ),
  background-size: cover;
`;

export const AuthBoxBorder = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  margin-top: 6rem;
  background-color: transparent;
`;

export const AuthUI = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f7f7f7;
  height: 25rem;
  width: 28rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;

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
  }

  p {
    font-size: 0.9rem;
  }

  a {
    color: #68a5ff;
    text-decoration: none;
  }
`;

export const ErrorMsg = styled.div`
  height: 0.6rem;
  text-align: center;
  font-size: 0.8rem;
  color: #ff6969;
`;
