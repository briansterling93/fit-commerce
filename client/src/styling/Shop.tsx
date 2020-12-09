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
    font-size: 1.5rem;
    color: black;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.2rem;
  }
`;

export const BoxDiv = styled.div`
  min-height: 80vh;
  width: 90rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const FilterBox = styled.div`
  height: 7rem;

  text-align: center;
  align-items: center;
  background-color: #e2efff;
  color: black;
  border-radius: 0.3rem;

  h1 {
    height: 1rem;
    font-size: 0.8rem;
    font-weight: 800;
    width: 17rem;
    text-align: left;
  }

  select {
    outline: none;
    border: none;
    height: 1.4rem;
    width: 6rem;
  }
`;

export const FilterPrice = styled.div`
  li {
    list-style-type: bullet-point;
    text-align: left;
    padding: 0.1rem;
  }
  padding-top: 1rem;

  h1 {
    text-align: center;
  }
`;

export const ProductSectionDiv = styled.div`
  padding-left: 1rem;
`;

export const ItemArray = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 75rem;
`;

export const ItemBox = styled.div`
  align-items: center;
  height: 25rem;
  width: 12rem;
  padding: 1.4rem;
  border-radius: 0.3rem;
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  background-color: #fafafa;
  border: 0.1px solid #e6e6e6;

  :hover {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    transform: translateY(-0.3rem);
  }

  img {
    height: 13rem;
    width: 12rem;
    border-bottom: 1px solid #f0eeee;
  }

  button {
    cursor: pointer;
    background-color: #1c1c1c;
    border-radius: 0.3rem;
    color: white;
    border: 1px solid #999;
    height: 1.9rem;
    width: 7rem;
    outline: none;
    font-weight: 200;
    font-family: arial;
    font-size: 0.7rem;
    text-transform: uppercase;

    :hover {
      opacity: 0.9;
      background-color: green;
    }
  }
`;

export const ItemTitle = styled.div`
  padding-top: 0.3rem;
  font-weight: 700;
  font-size: 1.1rem;
  font-family: arial;
  color: #4f4f4e;
  height: 2rem;
`;
export const ItemPrice = styled.div`
  font-weight: 700;
  font-size: 1rem;
  font-family: arial;
  color: #a90000;
`;

export const ItemDescription = styled.div`
  width: 10rem;
  height: 4rem;
  text-align: left;
  font-weight: 585;
  font-size: 0.9rem;
  margin-top: 1rem;
`;

export const ItemsBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
`;
