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
  @keyframes moveInRight {
    0% { 
      opacity: 0;
      transform: translateY(5rem);
    }

    80% {
      transform: translateX(0rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    } 
  }


 

  img {
    width: 60rem;
  
  }

  @media only screen and (max-width: 1150px) {
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
  font-size: 1.7rem;
  font-weight: 100;
  color: #c4c4c4;
  padding-top: 7rem;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  img {
    height: 4rem;
    width: 4rem;
  }

  @keyframes moveInRight {
    0% {
      transform: translateY(5rem);
    }

    80% {
      transform: translateX(0rem);
    }

    100% {
      opacity: 1;
      transform: translate(0rem);
    }
  }
  animation: moveInRight 6s;

  i {
    padding-top: 0.3rem;
    align-items: center;
    color: #d0d0d0;
    font-size: 2.5rem;
    :hover {
      color: #6e6e6e;
    }
  }

  @media only screen and (max-width: 850px) {
    font-size: 1.4rem;

    i {
      font-size: 2rem;
    }

    img {
      height: 2rem;
      width: 3rem;
    }
  }

  @media only screen and (max-width: 585px) {
    font-size: 1.1rem;

    i {
      font-size: 1.6rem;
    }
  }

  @media only screen and (max-width: 433px) {
    font-size: 0.8rem;

    img {
      height: 2rem;
      width: 2.5rem;
    }

    i {
      font-size: 1.3rem;
    }
  }
`;
