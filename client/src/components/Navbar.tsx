import React, { useState } from "react";
import { MainSection, TextDiv } from "../styling/Navbar";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [cartNotice, setNotice] = useState<any>("*");
  return (
    <MainSection>
      <TextDiv>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">
          Shop
          <i className="fa fa-caret-down" aria-hidden="true"></i>
        </NavLink>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/cart">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </NavLink>
      </TextDiv>
    </MainSection>
  );
};

export default Navbar;
