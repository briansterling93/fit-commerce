import React from 'react';
import { MainSection, TextDiv } from '../styling/Navbar';
import { NavLink } from 'react-router-dom';

const AuthNavbar: React.FC = () => {
  return (
    <MainSection>
      <TextDiv>
        <NavLink to="/user/dashboard">Dashboard</NavLink>
        <NavLink to="/user/shop">
          Shop
          <i className="fa fa-caret-down" aria-hidden="true"></i>
        </NavLink>
        <NavLink to="/user/cart">
          Cart<i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </NavLink>
      </TextDiv>
    </MainSection>
  );
};

export default AuthNavbar;
