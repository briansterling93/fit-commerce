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
  // overflow-y: scroll;
  overflow-y: scroll;
  overflow-x: hidden;
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
    font-weight: 600;
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

  @media only screen and (max-width: 1200px) {
    width: 60rem;
  }

  @media only screen and (max-width: 970px) {
    width: 55rem;
  }

  @media only screen and (max-width: 900px) {
    width: 47rem;
  }

  @media only screen and (max-width: 630px) {
    width: 35rem;
  }

  @media only screen and (max-width: 580px) {
    width: 27rem;
  }

  @media only screen and (max-width: 420px) {
    width: 20rem;
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
    @media only screen and (max-width: 1260px) {
    }
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
    font-size: 0.7rem;
    font-family: arial;
    text-transform: uppercase;
    :hover {
      opacity: 0.9;
      background-color: green;
    }
  }

  @media only screen and (max-width: 630px) {
    width: 10rem;

    button {
      width: 5.3rem;

      :hover {
        opacity: 0.9;
        background-color: black;
      }
    }

    img {
      width: 10rem;
      height: 13rem;
    }

    :hover {
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0);
      transform: translateY(0rem);
    }
  }

  @media only screen and (max-width: 580px) {
    width: 13rem;

    button {
      width: 6rem;
      font-size: 0.6rem;

      :hover {
        opacity: 0.9;
        background-color: black;
      }
    }

    img {
      width: 13rem;
      height: 13rem;
    }

    :hover {
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0);
      transform: translateY(0rem);
    }
  }

  @media only screen and (max-width: 420px) {
    width: 12rem;
    padding: 1.4rem;

    :hover {
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0);
      transform: translateY(0rem);
    }

    button {
      width: 6rem;
      height: 1.7rem;
      font-size: 0.7rem;

      :hover {
        opacity: 0.9;
        background-color: black;
      }
    }

    img {
      width: 12rem;
      height: 13rem;
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

  @media only screen and (max-width: 630px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 580px) {
    font-size: 1.1rem;
  }

  @media only screen and (max-width: 420px) {
    font-size: 1.1rem;
  }
`;
export const ItemPrice = styled.div`
  font-weight: 700;
  font-size: 1rem;
  font-family: arial;
  color: #a90000;
  width: 2rem;

  @media only screen and (max-width: 420px) {
    font-size: 1rem;
  }
`;

export const ItemDescription = styled.div`
  width: 10rem;
  height: 4rem;
  text-align: left;
  font-weight: 585;
  font-size: 0.9rem;
  margin-top: 1rem;

  @media only screen and (max-width: 630px) {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 580px) {
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 420px) {
    font-size: 0.9rem;
    width: 10rem;
  }
`;

export const ItemsBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
`;
