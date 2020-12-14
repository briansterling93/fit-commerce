import styled from 'styled-components';

export const MainSection = styled.div`
  background-color: white;
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
  li {
    list-style-type: none;
  }
  h1 {
    font-size: 1.3rem;
    color: black;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    letter-spacing: 0.2rem;
    padding-bottom: 1rem;
  }
`;

export const BoxDiv = styled.div`
  background-color: white;
  border: 1px solid #dfdfdf;
  min-height: 80vh;
  width: 60rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BoxSpacer = styled.div`
  padding: 1.5rem;
`;

export const CartBox = styled.div`
  width: 27rem;
  border-radius: 0.2rem;
`;

export const TotalBox = styled.div`
  border: 1px solid #dfdfdf;
  width: 17rem;
  border-radius: 0.2rem;
  text-align: center;
  font-weight: 300;
  font-size: 1.3rem;
`;

export const CartItems = styled.div`
  border-bottom: 2px solid #e5e0e0;
  width: 25rem;
  align-items: center;
  font-family: Montserrat, sans-serif;
  img {
    height: 6rem;
    width: 6rem;
    padding-right: 1rem;
  }
  display: flex;
  flex-direction: row;
`;

export const CartItem = styled.div`
  width: 9rem;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.5rem;
`;

export const CartPrice = styled.div`
  width: 2rem;
  color: green;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem;
  font-family: Montserrat, sans-serif;
`;

export const CartQuantity = styled.div`
  width: 2rem;
  font-size: 1.1rem;
`;

export const CartRemoveBtn = styled.div`
  padding-left: 2.5rem;
  cursor: pointer;
  color: red;
`;

export const TotalBoxBtns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    background-color: transparent;
    outline: none;
    cursor: pointer;
    border: 1px solid black;
    height: 2rem;
    width: 10rem;
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0.5rem;
    font-size: 0.8rem;
  }
`;

export const BtnPadding = styled.div`
  padding: 0.5rem;
`;

export const Btn1 = styled.div`
  button {
    font-family: arial;
    letter-spacing: 0.1rem;
    width: 12rem;

    :hover {
      opacity: 0.6;
    }
  }
`;
export const Btn2 = styled.div`
  button {
    background-color: green;
    color: white;
    font-family: arial;
    letter-spacing: 0.1rem;
    width: 12rem;
    :hover {
      opacity: 0.6;
      background-color: green;
    }
  }
`;

export const EmptyCart = styled.div`
  text-align: center;
  color: #950000;
`;

export const ContinueBtn = styled.div`
button {
  background-color: black;
  color: white;
  font-family: arial;
  letter-spacing: 0.1rem;
  width: 13rem;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

export const TotalPrice = styled.div`
  color: green;
  font-weight: 400;
`;
