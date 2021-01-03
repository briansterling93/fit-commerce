import React from 'react';
import { MainSection, SecondarySection, ScrollDiv } from '.././styling/SiteHeader';
import logo3 from '.././img/logo3.png';
import arr1 from '.././img/arr1.png';

const SiteHeader: React.FC = (props) => {
  return (
    <MainSection>
      <SecondarySection>
        {' '}
        <img src={logo3} />
        <ScrollDiv>
          SCROLL
          <div>
            {/* <i className="fa fa-arrow-down" aria-hidden="true"></i> */}
            <img src={arr1} />
          </div>
        </ScrollDiv>
      </SecondarySection>
    </MainSection>
  );
};

export default SiteHeader;
