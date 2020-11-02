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
    padding: 1rem;
    text-decoration: none;
    color: black;
    font-weight: 400;
    font-size: 1rem;
    // display: flex;
    :hover {
      color: green;
    }
  }
`;
