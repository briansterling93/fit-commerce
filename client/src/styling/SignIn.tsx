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
`;

export const AuthBoxBorder = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  margin-top: 10rem;
  background-color: transparent;
`;

export const AuthUI = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 1rem;
  background-color: #f7f7f7;
  height: 15rem;
  width: 28rem;
`;
