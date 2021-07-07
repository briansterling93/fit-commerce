import styled from 'styled-components';

export const MainSection = styled.div`
  background-color: white;
  background-image: linear-gradient(
      to right bottom,
      rgba(25, 26, 25, 0.8),
      rgba(51, 51, 51, 0.8),
      rgba(64, 64, 64, 0.8)
    ),
  background-size: cover;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const SecondarySection = styled.div`
  display: flex;
  justify-content: center;
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

  @media only screen and (max-width: 985px) {
    width: 45rem;
    justify-content: flex-start;
    flex-direction: column;
  }

  @media only screen and (max-width: 742px) {
    width: 37rem;
  }

  @media only screen and (max-width: 610px) {
    width: 25rem;
    border: none;
  }

  @media only screen and (max-width: 425px) {
    width: 20rem;
  }

  @media only screen and (max-width: 342px) {
    width: 17rem;
  }

  @media only screen and (max-width: 320px) {
    width: 15rem;
  }
`;

export const BoxSpacer = styled.div`
  padding: 1.5rem;

  @media only screen and (max-width: 985px) {
    display: flex;
    justify-content: center;
    min-height: 20rem;
  }

  @media only screen and (max-width: 742px) {
    min-height: 17rem;
  }

  @media only screen and (max-width: 610px) {
    min-height: 15rem;
  }

  @media only screen and (max-width: 425px) {
    min-height: 13rem;
  }

  @media only screen and (max-width: 342px) {
    min-height: 11rem;
  }
`;

export const BoxSpacer2 = styled.div`
  padding: 1.5rem;

  @media only screen and (max-width: 985px) {
    display: flex;
    justify-content: center;
    padding-right: 0rem;
    padding: 0;
  }
`;

export const CartBox = styled.div`
  width: 27rem;
  border-radius: 0.2rem;

  @media only screen and (max-width: 610px) {
    width: 18rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 1rem;
    }

    font-size: 0.9rem;
  }

  @media only screen and (max-width: 425px) {
    width: 14rem;

    h1 {
      font-size: 1rem;
    }

    font-size: 0.8rem;
  }

  @media only screen and (max-width: 342px) {
    width: 14rem;

    h1 {
      font-size: 0.9rem;
    }

    font-size: 0.8rem;
  }
`;

export const TotalBox = styled.div`
  border: 1px solid #dfdfdf;
  width: 17rem;
  border-radius: 0.2rem;
  text-align: center;
  font-weight: 300;
  font-size: 1.3rem;

  @media only screen and (max-width: 985px) {
    width: 22rem;
    border: none;
    border-top: 1px solid #dfdfdf;
    text-align: center;

    h1 {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 742px) {
    width: 20rem;

    h1 {
      font-size: 0.9rem;
    }
  }

  @media only screen and (max-width: 610px) {
    width: 18rem;

    h1 {
      font-size: 0.8rem;
    }

    p {
      font-size: 1.1rem;
    }
  }

  @media only screen and (max-width: 425px) {
    width: 16rem;

    h1 {
      font-size: 0.8rem;
    }
  }

  @media only screen and (max-width: 342px) {
    width: 13rem;

    h1 {
      font-size: 0.8rem;
    }
  }
`;

export const CartItems = styled.div`
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

  @media only screen and (max-width: 985px) {
    img {
      height: 4rem;
      width: 4rem;
    }

    p {
      padding-left: 0.7rem;
    }

    width: 21rem;
  }

  @media only screen and (max-width: 610px) {
    img {
      height: 4rem;
      width: 4rem;
      padding: 0;
    }

    p {
      padding-left: 0.7rem;
    }

    min-width: 17rem;
  }

  @media only screen and (max-width: 320px) {
    width: 18.5rem;
    img {
      height: 4rem;
      width: 3.5rem;
      padding: 0;
    }

    p {
      padding-left: 0.3rem;
    }
  }
`;

export const CartItem = styled.div`
  width: 11rem;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.5rem;

  @media only screen and (max-width: 985px) {
    font-size: 0.9rem;
    width: 14rem;
  }

  @media only screen and (max-width: 742px) {
    font-size: 0.9rem;
    width: 15rem;
  }

  @media only screen and (max-width: 610px) {
    font-size: 0.8rem;
    width: 5rem;
  }
`;

export const CartPrice = styled.div`
  width: 2rem;
  color: green;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem;
  font-family: Montserrat, sans-serif;

  @media only screen and (max-width: 985px) {
    font-size: 0.9rem;
  }
`;

export const CartQuantity = styled.div`
  width: 2rem;
  font-size: 1.1rem;

  @media only screen and (max-width: 610px) {
    font-size: 0.8rem;
  }
`;

export const CartRemoveBtn = styled.div`
  padding-left: 2.5rem;
  cursor: pointer;
  color: red;

  @media only screen and (max-width: 610px) {
    padding-left: 1rem;
  }
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

  @media only screen and (max-width: 985px) {
    button {
      width: 6rem;
      font-size: 0.7rem;
      height: 1.7rem;
    }
  }

  @media only screen and (max-width: 742px) {
    button {
      width: 5rem;
      font-size: 0.7rem;
      height: 1.7rem;
    }
  }

  @media only screen and (max-width: 610px) {
    button {
      width: 5rem;
      font-size: 0.6rem;
      height: 1.7rem;
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

  @media only screen and (max-width: 610px) {
    button {
      width: 8rem;
      font-size: 0.7rem;
      height: 1.7rem;
      background-color: black;
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
