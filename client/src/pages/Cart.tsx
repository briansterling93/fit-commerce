import React from "react";
import Navbar from "../components/Navbar";
import Flair from "../components/Flair";
import {
  MainSection,
  SecondarySection,
  CartBox,
  TotalBox,
  BoxDiv,
  BoxSpacer,
} from "../styling/Cart";

const Cart: React.FC = () => {
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
