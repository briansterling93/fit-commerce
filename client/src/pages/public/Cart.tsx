import React, { useState, useContext, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import FlairText from '../../components/FlairText';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { StateContext, APP_ACTIONS } from '../../context/StateContext';

import {
  MainSection,
  SecondarySection,
  CartBox,
  TotalBox,
  BoxDiv,
  BoxSpacer,
  BoxSpacer2,
  TotalBoxBtns,
  BtnPadding,
  Btn1,
  EmptyCart,
  ContinueBtn,
  TotalPrice,
} from '../../styling/Cart';

const Cart: React.FC = () => {
  const { state, dispatch } = useContext<any>(StateContext);
  const [cartItems, updateCart] = useState<any>();

  useEffect(() => {
    populateCart();
  }, []);

  const populateCart = async () => {
    try {
      let newItem: any = sessionStorage.getItem('newItem');

      let cartArray = await dispatch({
        type: APP_ACTIONS.UPDATE_CART,
        payload: newItem,
      });

      sessionStorage.getItem('newItem')
        ? updateCart(<EmptyCart>Sign in to access your cart!</EmptyCart>)
        : updateCart(<EmptyCart>No items in your cart yet!</EmptyCart>);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <FlairText />
      <Navbar />
      <MainSection>
        <SecondarySection>
          <ContinueBtn>
            <NavLink to="/shop">
              <button>Continue Shopping </button>
            </NavLink>
          </ContinueBtn>
          <BoxDiv>
            <BoxSpacer>
              <CartBox>
                <h1>My Item(s)</h1>
                {cartItems}
              </CartBox>
            </BoxSpacer>
            <BoxSpacer2>
              <TotalBox>
                <h1>Total</h1>

                <p></p>
                <TotalBoxBtns>
                  <BtnPadding>
                    <NavLink to="/signin">
                      <Btn1>
                        <button>Sign in</button>
                      </Btn1>
                    </NavLink>
                  </BtnPadding>
                </TotalBoxBtns>
              </TotalBox>
            </BoxSpacer2>
          </BoxDiv>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default Cart;
