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
  overflow: scroll;
`;

export const SecondarySection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  li {
    list-style-type: none;
  }
  h1 {
    font-size: 1.1rem;
    color: black;
    text-transform: uppercase;
    text-align: center;
    font-weight: 550;
    letter-spacing: 0.2rem;
    padding-bottom: 1rem;
  }
`;

export const BoxDiv = styled.div`
  // background-color: #f0eeee;
  background-color: white;
  border: 1px solid #dfdfdf;
  min-height: 80vh;
  width: 60rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BoxSpacer = styled.div`
  padding: 1.5rem;
`;

export const CartBox = styled.div`
  width: 27rem;
  border-radius: 0.2rem;
`;

export const TotalBox = styled.div`
  height: 10rem;
  width: 17rem;
  border-radius: 0.2rem;
  text-align: center;
  font-weight: 300;
  font-size: 1.3rem;
`;

export const CartItems = styled.div`
  border-bottom: 3px solid #f0eeee;
  width: 25rem;
  align-items: center;
  img {
    height: 4rem;
    width: 4rem;
    padding-right: 1rem;
  }
  display: flex;
  flex-direction: row;
`;

export const CartItem = styled.div`
  width: 9rem;
  font-size: 1rem;
  padding: 0.5rem;
`;

export const CartPrice = styled.div`
  width: 2rem;
  font-size: 1rem;
  padding: 0.5rem;
`;
