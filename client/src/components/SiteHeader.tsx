import React from 'react';
import { MainSection, SecondarySection, ScrollDiv } from '.././styling/SiteHeader';
import logo3 from '.././img/logo3.png';
import arr1 from '.././img/arr1.png';
import { BsChevronDoubleDown } from 'react-icons/bs';

const SiteHeader: React.FC = (props) => {
  return (
    <MainSection>
      <SecondarySection>
        {' '}
        <img src={logo3} />
        <ScrollDiv>
          <div className="arrow-div">
            {/* <img src={arr1} /> */}
            <span id="arrow-1">
              <BsChevronDoubleDown />
            </span>
            <span id="arrow-2">
              <BsChevronDoubleDown />
            </span>
            <span id="arrow-3">
              <BsChevronDoubleDown />
            </span>
          </div>
        </ScrollDiv>
      </SecondarySection>
    </MainSection>
  );
};

export default SiteHeader;
