import React from 'react';
import { MainSection, TextDiv } from '../styling/FlairText';

const FlairText: React.FC = () => {
  return (
    <div>
      <MainSection>
        <TextDiv>Free shipping on orders over $30</TextDiv>
      </MainSection>
    </div>
  );
};

export default FlairText;
