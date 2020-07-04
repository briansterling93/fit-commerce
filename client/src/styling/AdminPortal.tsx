import styled from "styled-components";

export const MainSection = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
      to right bottom,
      rgba(25, 26, 25, 0.8),
      rgba(51, 51, 51, 0.8),
      rgba(64, 64, 64, 0.8)
    ),
    url("https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-size: cover;
`;

export const SecondarySection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PortalBox = styled.div`
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 15rem;
  width: 26rem;
  border: 1px solid black;
  color: black;
  background-color: white;
  // background: rgba(0, 0, 0, 0.9);
`;

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  padding-bottom: 0.5rem;
`;

export const PortalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    font-size: 1rem;
    outline: none;
    border: none;
    width: 16rem;
  }

  button {
    background-color: transparent;
    border: 1px solid #999;
    border-radius: 0.2rem;
    outline: none;
    cursor: pointer;
  }
`;

export const FormPadding = styled.span`
  padding: 0.6rem;
`;

export const InputStyling = styled.div`
  border: none;
  border-bottom: 1px solid #999;
  width: 16rem;
`;

export const ButtonStyling = styled.div`
  display: flex;
  justify-content: row;
  padding-top: 0.2rem;

  button {
    width: 4rem;
    font-size: 0.8rem;
    background-color: ;
  }

  i {
    font-size: 1rem;
    color: black;
    // background-color: #000e52;
  }
`;

export const ButtonPadding1 = styled.div`
  padding-right: 1.2rem;
`;

export const ButtonPadding2 = styled.div`
  padding-left: 1.2rem;
`;

export const ErrorMsg = styled.div`
  height: 0.3rem;
  color: red;
  text-align: center;
  font-size: 0.9rem;
`;

export const PopUp = styled.div`
  color: #000c4a;
  font-size: 0.9rem;
  opacity: 1;
  height: 0.2rem;
`;
