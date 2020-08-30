import React, { useState, useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Flair from "../components/Flair";
import axios from "axios";
import { StateContext, initialState } from "../context/StateContext";
import {
  MainSection,
  SecondarySection,
  CartBox,
  TotalBox,
  BoxDiv,
  BoxSpacer,
} from "../styling/Cart";

const Cart: React.FC = () => {
  const { state, dispatch } = useContext<any>(StateContext);
  const [cartItems, updateCart] = useState<any>();
  useEffect(() => {
    populateCart();
  }, []);

  const populateCart = () => {};
  return (
    <div>
      <Flair />
      <MainSection>
        <Navbar />
        <SecondarySection>
          <h1>Shopping Cart</h1>
          <BoxDiv>
            <BoxSpacer>
              {" "}
              <CartBox>
                <h1>Current Items</h1>
                {cartItems}
                {state.cart}
              </CartBox>
            </BoxSpacer>
            <BoxSpacer>
              {" "}
              <TotalBox>
                <h1>Total</h1>
              </TotalBox>
            </BoxSpacer>
          </BoxDiv>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default Cart;
