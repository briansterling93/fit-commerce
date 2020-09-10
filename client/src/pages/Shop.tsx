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
                <h1>Filter Categories</h1>
                <ul>
                  <li>
                    <input type="checkbox" /> Weights
                  </li>
                  <li>
                    <input type="checkbox" /> Cardio & Running
                  </li>
                  <li>
                    <input type="checkbox" /> Accessories
                  </li>
                  <li>
                    <input type="checkbox" /> Crossfit
                  </li>
                </ul>
              </FilterCategories>

              <FilterPrice>
                <h1>Filter by Price</h1>
                <ul>
                  <li>
                    <input type="checkbox" /> Any
                  </li>
                  <li>
                    <input type="checkbox" /> Below $50
                  </li>
                  <li>
                    <input type="checkbox" /> $51 - 300
                  </li>
                  <li>
                    <input type="checkbox" /> $301 - 500
                  </li>
                </ul>
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
