import React, { useState } from 'react';
import { MainSection, TextDiv } from '../styling/Navbar';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [cartNotice, setNotice] = useState<any>('*');
  return (
    <div>
      <MainSection>
        <TextDiv>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/signin">Sign In</NavLink>
          <NavLink to="/cart">
            Cart<i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </NavLink>
        </TextDiv>
      </MainSection>
    </div>
  );
};

export default Navbar;
