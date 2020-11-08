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
  margin-top: 2rem;
  width: 70rem;
  display: flex;
  flex-direction: row;


  img {
    height: 20rem;
    width: 25rem;
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
    text-transform: uppercase;

    :hover {
      opacity: 0.9;
      background-color: green;
    }
`;

export const BoxSpacer = styled.div`
  padding: 1.5rem;
`;

export const BoxSpacer2 = styled.div`
  margin-left: 30rem;
`;

export const ItemBox1 = styled.div`
  height: 1rem;
  width: 1rem;

  margin-top: 1rem;
`;

export const ItemBox2 = styled.div`
  height: 20rem;
  width: 1rem;
  margin-top: 2.5rem;
`;

export const Title = styled.div`
  width: 30rem;
  border-bottom: 1px solid #999;
  font-size: 2rem;
  // font-family: digital;
  font-weight: 600;
  padding-bottom: 0.5rem;
  color: #3d3d3d;
`;

export const Description = styled.div`
  width: 30rem;
  margin-top: 1.3rem;
  padding-bottom: 2rem;
`;

export const Price = styled.div`
  width: 10rem;
  font-size: 1.5rem;
  color: #a90000;
  font-weight: 600;
`;

export const AddBtn = styled.div`
padding-left: 10rem;
button {
  cursor: pointer;
  // background-color: #1c1c1c;
  background-color: green;
  border-radius: 2rem;
  color: white;
  border: 1px solid #999;
  height: 2rem;
  width: 7rem;
  outline: none;
  font-weight: 200;
  font-family: arial;
  text-transform: uppercase;

  :hover {
    opacity: 0.7;
    // background-color: green;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 10rem;

  margin-top: 3rem;
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;

  input {
    padding: 0.5rem;
    height: 1rem;
    font-weight: 550;
    width: 5rem;
    background-color: #eeeeee;
    border: 1px solid #dbdada;
  }
`;

export const ErrorMsg = styled.div`
  height: 1rem;
  width: 10rem;
  font-weight: 600;
  color: red;
  font-size: 0.9rem;
`;
