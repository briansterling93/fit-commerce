import React, { useState, useEffect } from 'react';
import { MainSection, TextDiv, HamburgerMenu, MobileNavLinks } from '../styling/Navbar';
import { NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

const AuthNavbar: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [nav, setNav] = useState<any>('');

  const showNav = () => {
    if (!isOpen) {
      setNav(
        <MobileNavLinks id="mobile-nav-links">
          <NavLink to="/user/dashboard">Dashboard</NavLink>
          <NavLink to="/user/shop">Shop</NavLink>
          <NavLink to="/user/orders">Orders</NavLink>
          <NavLink to="/user/cart">
            Cart<i className="fa fa-shopping-cart" aria-hidden="true"></i>
          </NavLink>
          <NavLink to="/" onClick={removeToken}>
            Sign Out
          </NavLink>
        </MobileNavLinks>
      );
    } else {
      setNav('');
    }
  };

  //remove token from sessionStorage
  const removeToken = async () => {
    try {
      await sessionStorage.clear();

      await window.location.reload();
    } catch (error) {}
  };

  const hideNav = () => {
    setNav('');
  };
  return (
    <MainSection>
      <HamburgerMenu>
        <div onClick={showNav}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={20} direction="right" color="#001F9A" />
        </div>

        {nav}
      </HamburgerMenu>
      <TextDiv>
        <NavLink to="/user/dashboard">Dashboard</NavLink>
        <NavLink to="/user/shop">Shop</NavLink>
        <NavLink to="/user/orders">Orders</NavLink>
        <NavLink to="/user/cart">
          Cart<i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </NavLink>
      </TextDiv>
    </MainSection>
  );
};

export default AuthNavbar;
