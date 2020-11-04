import styled from 'styled-components';

export const MainSection = styled.div`
  height: 3rem;
  background-color: #fafafa;
  diplay: flex;
  justify-content: center;

  text-transform: uppercase;
  i {
    padding-left: 0.5rem;
  }
`;

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    padding: 1.2rem;
    font-family: 'Open Sans', arial, sans-serif;
    text-decoration: none;
    color: #5b5959;
    font-weight: 500;
    font-size: 0.9rem;
    // display: flex;
    :hover {
      color: green;
    }
  }
`;
