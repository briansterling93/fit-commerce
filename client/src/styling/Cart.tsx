import styled from "styled-components";

export const MainSection = styled.div`
  background-color: #e5e0e0;
  height: 100vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(25, 26, 25, 0.8),
      rgba(51, 51, 51, 0.8),
      rgba(64, 64, 64, 0.8)
    ),
    // url("https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-size: cover;
`;

export const SecondarySection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  background-color: transparent;
  flex-direction: column;
  align-items: left;

  li {
    list-style-type: none;
  }

  h1 {
    font-size: 1.2rem;
    color: black;
    text-transform: uppercase;
    text-align: center;
    font-weight: 300;
    letter-spacing: 0.2rem;
  }
`;

export const BoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BoxSpacer = styled.div`
  padding: 1.5rem;
`;

export const CartBox = styled.div`
  height: 25rem;
  width: 27rem;
  border-radius: 0.2rem;
  // background-color: black;
  // border: 0.2px solid #626262;

  h1 {
    text-align: center;
    // font-size: 0.9rem;
    font-size: 1.1rem;
    font-weight: 350;
  }
`;

export const TotalBox = styled.div`
  height: 25rem;
  width: 27rem;
  border-radius: 0.2rem;
  // background-color: white;
  // border: 0.2px solid #626262;

  h1 {
    text-align: center;
    // font-size: 0.9rem;
    // font-weight: bold;
    font-size: 1.1rem;
    font-weight: 350;
  }
`;

export const CartItems = styled.div`
  // background-color: white;
  img {
    height: 3rem;
    width: 3rem;
  }
  display: flex;
  flex-direction: row;
`;
