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

  ul {
    padding: 1rem;
    margin: 0;
  }

  overflow-x: hidden;
  overflow-y: scroll;
`;

export const SecondarySection = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
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
  margin-top: 2rem;
  width: 70rem;
  display: flex;
  flex-direction: row;

  img {
    height: 20rem;
    width: 25rem;
  }

  input {
    cursor: pointer;
  }

  button {
    cursor: pointer;
    background-color: #1c1c1c;

    color: white;
    border: 1px solid #999;
    height: 1.9rem;
    width: 7rem;
    outline: none;
    font-weight: 200;
    font-family: arial;
    text-transform: uppercase;

    :hover {
      opacity: 0.9;
      background-color: green;
    }
  }

  @media only screen and (max-width: 1160px) {
    width: 60rem;
  }

  @media only screen and (max-width: 985px) {
    width: 50rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0rem;
  }

  @media only screen and (max-width: 826px) {
    width: 40rem;
  }

  @media only screen and (max-width: 657px) {
    width: 30rem;
  }

  @media only screen and (max-width: 510px) {
    width: 20rem;
    border: none;
    margin-top: -3rem;
    img {
      height: 15rem;
      width: 16rem;
    }
  }
`;

export const BoxSpacer = styled.div`
  padding: 1.5rem;

  @media only screen and (max-width: 985px) {
    padding: 0;
  }
`;

export const BoxSpacer2 = styled.div`
  margin-left: 30rem;

  @media only screen and (max-width: 985px) {
    margin-left: 0rem;
  }
`;

export const ItemBox1 = styled.div`
  height: 1rem;
  width: 1rem;

  margin-top: 1rem;

  @media only screen and (max-width: 985px) {
    height: 20rem;
    width: 25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ItemBox2 = styled.div`
  height: 20rem;
  width: 1rem;
  margin-top: 2.5rem;

  @media only screen and (max-width: 985px) {
    width: 50rem;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  width: 30rem;
  font-size: 1.6rem;
  font-weight: 500;
  padding-bottom: 0.5rem;
  color: black;

  @media only screen and (max-width: 1160px) {
    font-size: 1.4rem;
    width: 15rem;
  }

  @media only screen and (max-width: 985px) {
    font-size: 1.3rem;
    text-align: center;
    align-items: center;
  }
`;

export const Description = styled.div`
  width: 30rem;
  margin-top: 1.3rem;
  padding-bottom: 2rem;

  @media only screen and (max-width: 1160px) {
    font-size: 1rem;
    width: 25rem;
  }

  @media only screen and (max-width: 985px) {
    font-size: 0.9rem;
    width: 25rem;
    text-align: center;
    min-height: 2rem;
  }

  @media only screen and (max-width: 510px) {
    width: 15rem;
  }
`;

export const Price = styled.div`
  width: 10rem;
  font-size: 1.5rem;
  color: #a90000;
  font-weight: 600;

  @media only screen and (max-width: 985px) {
    font-size: 1.3rem;
    padding-right: 3rem;
    width: 10rem;
  }

  @media only screen and (max-width: 510px) {
    font-size: 1.2rem;
    padding-right: 0rem;
    width: 6rem;
  }
`;

export const AddBtn = styled.div`
  padding-left: 10rem;
  button {
    cursor: pointer;

    background-color: black;
    border-radius: 0.3rem;
    color: white;
    border: 1px solid #999;
    height: 2rem;
    width: 7rem;
    outline: none;
    font-weight: 200;
    font-family: arial;
    text-transform: uppercase;

    :hover {
      opacity: 0.7;
    }
  }

  @media only screen and (max-width: 985px) {
    padding-left: 3rem;
    width: 10rem;

    button {
      height: 1.5rem;
      width: 8rem;

      font-size: 0.9rem;
    }
  }

  @media only screen and (max-width: 510px) {
    padding-left: 0rem;
    width: 10rem;

    button {
      height: 1.5rem;
      width: 8rem;

      font-size: 0.9rem;
    }
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 10rem;

  margin-top: 3rem;

  @media only screen and (max-width: 985px) {
    justify-content: center;
    margin-top: 1rem;
    align-items: center;
    text-align: center;
  }
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  p {
    font-size: 0.9rem;
  }

  input {
    padding: 0.5rem;
    height: 1rem;
    font-weight: 550;
    width: 2rem;
    border: 1px solid #dbdada;
    text-align: center;
    background-color: transparent;
  }

  @media only screen and (max-width: 985px) {
    align-items: center;

    input {
      text-align: center;
      width: 2rem;
    }

    p {
      font-size: 0.7rem;
    }
  }
`;

export const ErrorMsg = styled.div`
  height: 1rem;
  width: 10rem;
  font-weight: 600;
  color: #750602;
  font-size: 0.8rem;

  @media only screen and (max-width: 985px) {
    text-align: center;
  }
`;
