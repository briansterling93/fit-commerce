import React, { useState, useEffect } from 'react';
import { MainSection, TextDiv, HamburgerMenu, MobileNavLinks } from '../styling/Navbar';
import { NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [nav, setNav] = useState<any>('');

  const showNav = () => {
    if (!isOpen) {
      setNav(
        <MobileNavLinks id="mobile-nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/signin">Sign In</NavLink>
          <NavLink to="/cart">
            Cart<i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </NavLink>
        </MobileNavLinks>
      );
    } else {
      setNav('');
    }
  };

  const hideNav = () => {
    setNav('');
  };

  return (
    <div>
      <MainSection>
        <HamburgerMenu>
          <div onClick={showNav}>
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} direction="right" color="#001F9A" />
          </div>

          {nav}
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
