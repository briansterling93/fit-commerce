import React from 'react';
import { MainSection, SecondarySection, ScrollDiv } from '.././styling/SiteHeader';
import logo3 from '.././img/logo3.png';

const SiteHeader: React.FC = (props) => {
  return (
    <MainSection>
      <SecondarySection>
        {' '}
        <img src={logo3} />
        <ScrollDiv>
          SCROLL
          <div>
            <i className="fa fa-arrow-down" aria-hidden="true"></i>
          </div>
        </ScrollDiv>
      </SecondarySection>
    </MainSection>
  );
};

export default SiteHeader;
