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
`;

export const SecondarySection = styled.div`
  display: flex;
  justify-content: center;
  background-color: transparent;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 1.4rem;
    color: black;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.1rem;
  }

  li {
    list-style-type: none;
  }
`;

export const BoxDiv = styled.div`
  background-color: white;
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
  min-width: 80rem;
  text-align: center;
`;

export const ItemBox = styled.div`
  min-height: 10rem;
  width: 45rem;
  border: 1px solid #dbdbdb;

  @media only screen and (max-width: 835px) {
    width: 40rem;
  }

  @media only screen and (max-width: 670px) {
    width: 30rem;
  }

  @media only screen and (max-width: 505px) {
    width: 25rem;
  }

  @media only screen and (max-width: 420px) {
    width: 16rem;
  }
`;

export const DivSpacer = styled.div`
  padding: 1rem;
`;

export const ItemSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const ItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  // background-color: #f9f9f9;
  background-color: #282929;

  justify-content: space-between;
  align-items: center;
  height: 4rem;
  border-bottom: 1px solid #d0d0d0;
`;

export const ItemDate = styled.div`
  padding-left: 1rem;

  h1 {
    font-size: 1rem;
    color: white;
    font-weight: 400;
  }

  p {
    font-size: 0.9rem;
    font-weight: 100;
    color: white;
  }

  @media only screen and (max-width: 505px) {
    h1 {
      font-size: 0.7rem;
    }
    p {
      font-size: 0.6rem;
      letter-spacing: 0;
      font-weight: 400;
    }
  }
`;
export const ItemTotal = styled.div`
  padding-right: 1rem;

  h1 {
    font-size: 1rem;
    color: white;
    font-weight: 400;
  }

  p {
    font-size: 0.9rem;
    color: white;
    font-weight: 100;
  }

  @media only screen and (max-width: 505px) {
    h1 {
      font-size: 0.7rem;
    }
    p {
      font-size: 0.6rem;
      letter-spacing: 0;
      font-weight: 400;
    }
  }
`;
export const ItemBoxSecondary = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 1rem;
  padding-top: 1rem;

  img {
    height: 4rem;
    width: 4rem;
  }

  @media only screen and (max-width: 420px) {
    img {
      height: 2rem;
      width: 2rem;
    }
  }
`;

export const ItemName = styled.div`
  height: 4.5rem;
  font-family: arial;
  letter-spacing: 0.1rem;
  font-weight: 500;
  padding-left: 3rem;
  text-align: left;
  font-size: 0.9rem;
  width: 13rem;

  @media only screen and (max-width: 835px) {
    padding-left: 2rem;
    width: 8rem;
  }

  @media only screen and (max-width: 670px) {
    padding-left: 1rem;
    width: 7rem;
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 505px) {
    padding-left: 1rem;
    width: 6rem;
    font-size: 0.7rem;
  }

  @media only screen and (max-width: 420px) {
    max-height: 2.4rem;
    width: 3.2rem;
    font-size: 0.5rem;
  }
`;

export const ItemQuantity = styled.div``;

export const ItemPrice = styled.div`
  color: green;
  font-weight: 600;
`;

export const Items = styled.div``;

export const ItemImages = styled.div``;
