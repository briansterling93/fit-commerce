import React from 'react';
import { MainSection, SecondarySection, BoxDiv, ItemBox1, ItemBox2, BoxSpacer } from '../../styling/ItemView';
import FlairText from '../../components/FlairText';
import Navbar from '../../components/Navbar';

const ItemView: React.FC = () => {
  return (
    <div>
      <FlairText />
      <MainSection>
        <Navbar />
        <SecondarySection>
          <BoxDiv>
            <BoxSpacer>
              <ItemBox1></ItemBox1>
            </BoxSpacer>
            <BoxSpacer>
              <ItemBox2></ItemBox2>
            </BoxSpacer>
          </BoxDiv>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default ItemView;
