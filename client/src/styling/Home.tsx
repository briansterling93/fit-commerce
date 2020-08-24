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
    url("https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
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

  h1 {
    font-size: 1.5rem;
    color: white;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 0.2rem;
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
  height: 15rem;
  width: 70rem;
  // background-color: #999;
`;

export const ItemBox = styled.div`
  align-items: center;
  background-color: white;
  // padding-top: 1rem;
  padding: 1.4rem;
  border-radius: 0.3rem;

  img {
    height: 8rem;
    width: 10rem;
  }
`;

export const ItemText = styled.div`
  padding-top: 1rem;
  text-align: center;
`;
