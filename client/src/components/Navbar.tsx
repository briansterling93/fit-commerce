import React from "react";
import { MainSection, TextDiv } from "../styling/Navbar";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <MainSection>
      <TextDiv>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">
          Shop
          <i className="fa fa-caret-down" aria-hidden="true"></i>
        </NavLink>
        <NavLink to="/cart">
          Cart<i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </NavLink>
        <NavLink to="/signin">Sign In</NavLink>
      </TextDiv>
    </MainSection>
  );
};

export default Navbar;
