import React from "react";
import { MainSection, TextDiv } from "../styling/Navbar";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <MainSection>
      <TextDiv>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </TextDiv>
    </MainSection>
  );
};

export default Navbar;
