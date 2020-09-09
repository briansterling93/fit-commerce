import React from "react";
import Navbar from "../components/Navbar";
import Flair from "../components/Flair";
import {
  MainSection,
  SecondarySection,
  BoxDiv,
  FilterBox,
  CurrentProducts,
  FilterCategories,
  FilterPrice,
} from "../styling/Shop";
const Shop: React.FC = () => {
  return (
    <div>
      <Flair />

      <MainSection>
        <Navbar />
        <SecondarySection>
          <h1>Current Products</h1>
          <BoxDiv>
            <FilterBox>
              <FilterCategories>
                <h1>Filter by Categories</h1>
              </FilterCategories>
              <FilterPrice>
                <h1>Filter by Price</h1>
              </FilterPrice>
            </FilterBox>
            <CurrentProducts></CurrentProducts>
          </BoxDiv>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default Shop;
