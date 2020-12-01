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
  height: 16rem;
  width: 10rem;
  border: 1px solid #dbdbdb;
  // background-color: #999;
`;

export const DivSpacer = styled.div`
  padding: 0.5rem;
`;
