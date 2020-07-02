import React from "react";
import { MainSection } from "../styling/Cart";
import Navbar from "../components/Navbar";
import Flair from "../components/Flair";

const Cart: React.FC = () => {
  return (
    <div>
      <Flair />
      <Navbar />
      <MainSection></MainSection>
    </div>
  );
};

export default Cart;
