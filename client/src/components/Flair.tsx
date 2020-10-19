import React from 'react';
import { MainSection, TextDiv, LogoDiv } from '../styling/Flair';
import Logo from './Logo';

const Flair: React.FC = () => {
  return (
    <MainSection>
      <TextDiv>
        <LogoDiv>
          <Logo />
        </LogoDiv>
        Free shipping on orders over $30
      </TextDiv>
    </MainSection>
  );
};

export default Flair;
