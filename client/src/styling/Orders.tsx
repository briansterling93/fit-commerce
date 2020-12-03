import styled from 'styled-components';

export const MainSection = styled.div`
background-color: #FAFAFA;
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
  margin-top: 2.5rem;
  background-color: transparent;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 1.4rem;
    color: #001154;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2rem;
  }

  li {
    list-style-type: none;
  }
`;

export const BoxDiv = styled.div`
  background-color: white;
  // border: 1px solid #dfdfdf;
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
  // min-height: 100rem;
  // border: 1px solid black;
  min-width: 80rem;
  text-align: center;
`;

export const ItemBox = styled.div`
  // height: 22rem;
  min-height: 10rem;
  width: 50rem;
  border: 1px solid #dbdbdb;
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
  background-color: #f7f7f7;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  border-bottom: 1px solid #d0d0d0;
`;

export const ItemDate = styled.div`
  padding-left: 1rem;

  h1 {
    font-size: 1rem;
    color: #666666;
    font-weight: 600;
  }

  p {
    font-size: 0.9rem;
    font-weight: 600;
  }
`;
export const ItemTotal = styled.div`
  padding-right: 1rem;

  h1 {
    font-size: 1rem;
    color: #666666;
    font-weight: 600;
  }

  p {
    font-size: 0.9rem;

    font-weight: 600;
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
`;

export const ItemName = styled.div`
  height: 4.5rem;
  font-family: digital;
  letter-spacing: 0.1rem;
  font-weight: 500;
  padding-left: 3rem;
  text-align: left;
  font-size: 1rem;
  width: 10rem;
`;

export const ItemQuantity = styled.div``;

export const ItemPrice = styled.div`
  color: #006e2c;
`;

export const Items = styled.div``;

export const ItemImages = styled.div``;
