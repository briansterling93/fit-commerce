import React from "react";
import { MainSection } from "../styling/Shop";
import Navbar from "../components/Navbar";
import Flair from "../components/Flair";

const Shop: React.FC = () => {
  return (
    <div>
      <Flair />

      <MainSection>
        <Navbar />
      </MainSection>
    </div>
  );
};

export default Shop;
