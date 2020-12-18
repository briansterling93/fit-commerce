import styled from 'styled-components';

export const MainSection = styled.div`

  background-color: white;
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(25, 26, 25, 0.8),
      rgba(51, 51, 51, 0.8),
      rgba(64, 64, 64, 0.8)
    ),
   
  background-size: cover;
  overflow-y: scroll;

  ul {
    padding: 1rem;
    margin: 0;
  }

  overflow-x: hidden;

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

  @media only screen and (max-width: 1520px) {
    ul {
      padding: 0.5rem;
      margin: 0;
    }
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
  min-width: 1rem;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-color: transparent;
  color: black;
  border-radius: 1rem;

  h1 {
    height: 1rem;
    font-size: 0.8rem;
    font-weight: 600;
    width: 17rem;
    text-align: left;
  }

  select {
    outline: none;
    border: none;
    height: 1.4rem;
    width: 6rem;
  }

  @media only screen and (max-width: 610px) {
    width: 10rem;
    h1 {
      font-size: 0.7rem;
    }

    select {
      width: 4rem;
      font-size: 0.6rem;

      option {
        font-size: 0.8rem;
        font-family: arial;
      }
    }
  }

  @media only screen and (max-width: 483px) {
    width: 8rem;
    h1 {
      font-size: 0.7rem;
    }
  }

  @media only screen and (max-width: 471px) {
    margin-left: 2rem;
    width: 7rem;
    h1 {
      font-size: 0.7rem;
    }
  }

  @media only screen and (max-width: 450px) {
    margin-left: 3rem;
    width: 6rem;
    h1 {
      font-size: 0.7rem;
    }
  }

  @media only screen and (max-width: 445px) {
    margin-left: 0rem;
    width: 6rem;
    h1 {
      font-size: 0.6rem;
      padding-bottom: 0.5rem;
      width: 6rem;
    }

    select {
      height: 1rem;
    }
  }

  @media only screen and (max-width: 400px) {
    margin-left: 0rem;
    width: 5rem;
    h1 {
      font-size: 0.6rem;
      padding-bottom: 1rem;
      width: 4rem;
    }

    select {
      height: 1rem;
    }
  }

  @media only screen and (max-width: 380px) {
    margin-left: 0rem;
    width: 3rem;
    h1 {
      font-size: 0.6rem;
      padding-bottom: 1rem;
      width: 3rem;
    }

    select {
      width: 3rem;
    }
  }
`;

export const FilterPrice = styled.div`
  li {
    list-style-type: bullet-point;
    text-align: left;
    padding: 0.1rem;
  }

  h1 {
    text-align: center;
  }
`;

export const ProductSectionDiv = styled.div`
  // padding-left: 1rem;
`;

export const ItemArray = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 75rem;

  @media only screen and (max-width: 1370px) {
    width: 60rem;
  }

  @media only screen and (max-width: 1135px) {
    width: 45rem;
  }

  @media only screen and (max-width: 920px) {
    width: 35rem;

  }

  @media only screen and (max-width: 735px) {
    width: 25rem;

    ul {
      padding: 0.3rem;
      margin: 0;
    }
  }
  }

  @media only screen and (max-width: 675px) {
    width: 20rem;
  }

  @media only screen and (max-width: 610px) {
    width: 20rem;
  }

  @media only screen and (max-width: 445px) {
    width: 18rem;

    ul {
      padding: 0.4rem;
      margin: 0;
    }
  }
  }

  @media only screen and (max-width: 380px) {
    width: 14rem;
  }



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

  @media only screen and (max-width: 1135px) {
    width: 9rem;

    img {
      height: 11rem;
      width: 9rem;
      border-bottom: 1px solid #f0eeee;
    }
  }

  @media only screen and (max-width: 735px) {
    width: 8rem;
    height: 22rem;
    img {
      height: 10rem;
      width: 8rem;
      border-bottom: 1px solid #f0eeee;
    }

    :hover {
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0);
      transform: translateY(0rem);
    }

    button {
      :hover {
        opacity: 0.9;
        background-color: black;
      }
    }
  }

  @media only screen and (max-width: 675px) {
    width: 6rem;
    height: 20rem;
    img {
      height: 8rem;
      width: 6rem;
      border-bottom: 1px solid #f0eeee;
    }
  }

  @media only screen and (max-width: 471px) {
    width: 7rem;
    height: 20rem;
    padding: 0.5rem;
    img {
      height: 7rem;
      width: 6rem;
      border-bottom: 1px solid #f0eeee;
    }
  }
  @media only screen and (max-width: 445px) {
    width: 7rem;
    height: 20rem;
    padding: 0.5rem;
  }

  @media only screen and (max-width: 380px) {
    width: 5rem;
    height: 19rem;
    padding: 0.5rem;
    img {
      height: 6.5rem;
      width: 5rem;
      border-bottom: 1px solid #f0eeee;
    }

    button {
      height: 1.5rem;
      width: 5rem;
      font-size: 0.6rem;
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

  @media only screen and (max-width: 735px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 675px) {
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 380px) {
    font-size: 0.9rem;
  }
`;
export const ItemPrice = styled.div`
  font-weight: 700;
  font-size: 1rem;
  font-family: arial;
  color: #a90000;

  @media only screen and (max-width: 735px) {
    font-size: 0.9rem;
  }
`;

export const ItemDescription = styled.div`
  width: 10rem;
  height: 4rem;
  text-align: left;
  font-weight: 585;
  font-size: 0.9rem;
  margin-top: 1rem;

  @media only screen and (max-width: 735px) {
    width: 7rem;
    height: 3rem;

    font-size: 0.7rem;
  }

  @media only screen and (max-width: 380px) {
    width: 5rem;
    height: 3rem;

    font-size: 0.6rem;
  }
`;

export const ItemsBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;

  @media only screen and (max-width: 1135px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
