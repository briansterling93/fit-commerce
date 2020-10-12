import styled from 'styled-components';

export const MainSection = styled.div`
  background-color: white;
  height: 100vh;
  color: black;
  display: flex;
  justify-content: center;
`;

export const AdminBox = styled.div`
  margin-top: 2rem;
  dispay: flex;
  width: 60rem;
  height: 40rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  // background-color: #999;

  h1 {
    font-size: 1.3rem;
    color: blue;
    font-weight: 500;
  }
`;

export const AddItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 21rem;
    outline: none;
    height: 2.3rem;
    border: 1px solid black;
    border-radius: 0.3rem;
  }
`;

export const InputSpacer = styled.div`
  padding: 0.4rem;
`;

export const PreviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 12rem;
    max-width: 10rem;
  }
`;

export const ErrorMsg = styled.div`
  height: 0.6rem;
  text-align: center;
  font-size: 0.8rem;
  color: red;
`;
