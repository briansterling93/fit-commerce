import styled from 'styled-components';

export const MainSection = styled.div`
  // background-color: #efefef;
  background-color: #FAFAFA;
  height: 100vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(25, 26, 25, 0.8),
      rgba(51, 51, 51, 0.8),
      rgba(64, 64, 64, 0.8)
    ),
  background-size: cover;

  overflow-y: scroll;
`;

export const SecondarySection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  background-color: transparent;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    color: black;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.2rem;
    font-family: Montserrat, sans-serif;
  }

  li {
    list-style-type: none;
  }
`;

export const ItemArray = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 12rem;
  width: 75rem;
  // background-color: #999;
`;

export const ItemBox = styled.div`
  align-items: center;
  background-color: #f6f6f6;
  padding: 1.4rem;
  border-radius: 0.3rem;
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-weight: 500;

  :hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    transform: translateY(-0.3rem);
  }

  img {
    height: 10rem;
    width: 12rem;
    border-bottom: 1px solid #f0eeee;
  }

  button {
    cursor: pointer;
    background-color: black;
    border-radius: 0.3rem;
    color: white;
    border: 1px solid #999;
    height: 1.9rem;
    width: 8rem;
    // border-radius: 0.5rem;
    outline: none;
    font-weight: 600;
    font-family: arial;
    text-transform: uppercase;

    :hover {
      opacity: 0.9;
      background-color: green;
    }
  }
`;

export const ItemText = styled.div`
  font-size: 1rem;
  color: black;
  font-weight: bold;
  padding-top: 1.5rem;
`;

export const ItemTitle = styled.div`
  padding-top: 0.3rem;
  font-weight: bold;
  font-size: 1.1rem;
`;
export const ItemPrice = styled.div`
  padding-bottom: 0.3rem;
  font-weight: 600;
  font-size: 1rem;
  font-family: arial;
  color: #a90000;
`;

export const ItemDescription = styled.div`
  width: 3rem;
  height: 2rem;
  font-size: 0.5rem;
`;
