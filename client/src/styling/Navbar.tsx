import styled from 'styled-components';

export const MainSection = styled.div`
  min-height: 3rem;
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
    :hover {
      color: #5b5959;
      font-weight: 700;
    }

    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: left;
    padding: 0.5rem;
  }
`;

export const MobileNavLinks = styled.div`
  // padding-left: 15rem;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  width: 100%;

  a {
    display: flex;
    text-align: center;
    align-items: center;
    padding: 0.5rem;
    font-family: arial;
    letter-spacing: 0.1rem;
    text-decoration: none;
    color: black;
    font-weight: 600;
    font-size: 0.8rem;
    display: flex;
    animation: moveInRight;
  }
`;
