import React from 'react';
import { MainSection, SecondarySection } from '.././styling/SiteHeader';
import logo3 from '.././img/logo3.png';

const SiteHeader: React.FC = () => {
  return (
    <MainSection>
      <SecondarySection>
        {' '}
        <img src={logo3} />
      </SecondarySection>
    </MainSection>
  );
};

export default SiteHeader;
