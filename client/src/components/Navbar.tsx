import React, { useState, useEffect } from 'react';
import { MainSection, TextDiv, HamburgerMenu, MobileNavLinks } from '../styling/Navbar';
import { NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [test, setTest] = useState<any>('');

  const showNav = () => {
    console.log('hh');
  };

  return (
    <div>
      <MainSection>
        <HamburgerMenu>
          <Hamburger toggled={isOpen} toggle={setOpen} size={30} direction="right" color="#001F9A" />

          <MobileNavLinks id="mobile-nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
            <NavLink to="/cart">
              Cart<i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </NavLink>
          </MobileNavLinks>
        </HamburgerMenu>
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
