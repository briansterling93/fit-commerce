import styled from 'styled-components';

export const MainSection = styled.div`
  height: 75vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(25, 26, 25, 0.8),
      rgba(51, 51, 51, 0.8),
      rgba(64, 64, 64, 0.8)
    ),
  background-size: cover;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`;

export const SecondarySection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  background-color: transparent;
  flex-direction: column;
  align-items: center;

  img {
    width: 70rem;
  }

  @media only screen and (max-width: 1125px) {
    img {
      width: 50rem;
    }
  }

  @media only screen and (max-width: 850px) {
    img {
      width: 45rem;
    }
  }

  @media only screen and (max-width: 750px) {
    img {
      width: 40rem;
    }
  }

  @media only screen and (max-width: 680px) {
    img {
      width: 35rem;
    }
  }

  @media only screen and (max-width: 585px) {
    img {
      width: 25rem;
    }
  }

  @media only screen and (max-width: 433px) {
    img {
      width: 20rem;
    }
  }

  @media only screen and (max-width: 360px) {
    img {
      width: 15rem;
    }
  }
}
`;

export const ScrollDiv = styled.div`
  font-size: 2rem;
  font-weight: 100;
  color: #c4c4c4;
  padding-top: 7rem;
  align-self: flex-end;

  i {
    padding-top: 0.3rem;
    align-items: center;
    color: #d0d0d0;
    font-size: 3rem;

    :hover {
      color: #6e6e6e;
    }
  }
`;
