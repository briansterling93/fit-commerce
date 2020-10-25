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
`;

export const SecondarySection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  li {
    list-style-type: none;
  }
  h1 {
    font-size: 1.3rem;
    color: black;
    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    letter-spacing: 0.2rem;
    padding-bottom: 1rem;
  }
`;

export const BoxDiv = styled.div`
  background-color: white;
  border: 1px solid #dfdfdf;
  min-height: 80vh;
  width: 60rem;
  display: flex;
  flex-direction: row;
  //   align-items: center;
  //   justify-content: center;
`;

export const BoxSpacer = styled.div`
  padding: 1.5rem;
`;

export const ItemBox1 = styled.div`
  height: 1rem;
  width: 1rem;
  background-color: green;
`;

export const ItemBox2 = styled.div`
  height: 1rem;
  width: 1rem;
  background-color: blue;
`;
