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

  overflow-x: hidden;
  ul {
    padding: 1rem;
    margin: 0;
  }
  
//   ::-webkit-scrollbar{
//     width: 0px;  
//     // background: transparent;  
// }

`;

export const SecondarySection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h1 {
    height: 1.3rem;
    width: 15rem;
    font-size: 1.3rem;
    color: black;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.2rem;
    font-family: Montserrat, sans-serif;
  }
  li {
    list-style-type: none;
  }

  @media only screen and (max-width: 580px) {
    h1 {
      font-size: 1rem;
      letter-spacing: 0.1rem;
    }
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
    width: 44rem;
  }

  @media only screen and (max-width: 580px) {
    width: 40rem;

    ul {
      padding: 0.5rem;
      margin: 0;
    }
  }

  @media only screen and (max-width: 460px) {
    width: 34rem;

    ul {
      padding: 0.4rem;
      margin: 0;
    }
  }

  @media only screen and (max-width: 393px) {
    width: 25rem;

    ul {
      padding: 0.4rem;
      margin: 0;
    }
  }

  @media only screen and (max-width: 353px) {
    width: 18rem;

    ul {
      padding: 0.5rem;
      margin: 0;
    }
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
    height: 23rem;

    button {
      width: 5.3rem;

      :hover {
        opacity: 0.9;
        background-color: black;
      }
    }

    img {
      width: 10rem;
      height: 11rem;
    }

    :hover {
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0);
      transform: translateY(0rem);
    }
  }

  @media only screen and (max-width: 580px) {
    width: 10rem;
    height: 23rem;

    button {
      width: 5.3rem;

      :hover {
        opacity: 0.9;
        background-color: black;
      }
    }

    :hover {
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0);
      transform: translateY(0rem);
    }
  }

  @media only screen and (max-width: 460px) {
    width: 8rem;
    height: 21rem;
    padding: 1.4rem;

    :hover {
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0);
      transform: translateY(0rem);
    }

    button {
      width: 7rem;
      height: 1.2rem;
      font-size: 0.7rem;

      :hover {
        opacity: 0.9;
        background-color: black;
      }
    }

    img {
      width: 8rem;
      height: 9rem;
    }
  }

  @media only screen and (max-width: 393px) {
    width: 6.6rem;

    padding: 1.4rem;
    height: 20rem;

    :hover {
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0);
      transform: translateY(0rem);
    }

    button {
      width: 7rem;
      height: 1.2rem;
      font-size: 0.7rem;

      :hover {
        opacity: 0.9;
        background-color: black;
      }
    }

    img {
      width: 6.6rem;
      height: 8rem;
    }
  }

  @media only screen and (max-width: 353px) {
    width: 5rem;
    height: 20rem;
    padding: 1.4rem;

    :hover {
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0);
      transform: translateY(0rem);
    }

    button {
      width: 6rem;
      height: 1.2rem;
      font-size: 0.7rem;

      :hover {
        opacity: 0.9;
        background-color: black;
      }
    }

    img {
      width: 5rem;
      height: 7rem;
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
    font-size: 0.8rem;
    height: 1.2rem;
  }

  @media only screen and (max-width: 353px) {
    font-size: 0.8rem;
  }
`;
export const ItemPrice = styled.div`
  font-weight: 700;
  font-size: 1rem;
  font-family: arial;
  color: #a90000;
  min-width: 1rem;

  @media only screen and (max-width: 460px) {
    font-size: 0.9rem;
  }
`;

export const ItemDescription = styled.div`
  width: 10rem;
  height: 4rem;
  text-align: left;
  font-weight: 400;
  font-size: 0.9rem;
  margin-top: 1rem;

  @media only screen and (max-width: 630px) {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 580px) {
    font-size: 0.8rem;
  }

  @media only screen and (max-width: 460px) {
    font-size: 0.8rem;
    width: 8rem;
  }

  @media only screen and (max-width: 353px) {
    font-size: 0.7rem;
    height: 5rem;
    // height: 4rem;
    width: 6rem;
  }
`;

export const ItemsBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;

  @media only screen and (max-width: 460px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
