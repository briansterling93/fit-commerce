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
  CartItems,
} from "../styling/Cart";

const Cart: React.FC = () => {
  const { state, dispatch } = useContext<any>(StateContext);
  const [cartItems, updateCart] = useState<any>();
  useEffect(() => {
    populateCart();
  }, []);

  const populateCart = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.get("/cart");

      const res2 = res.data.findAll.map((i: any) => (
        <ul key={i.id}>
          <li>
            <div>
              <CartItems>
                <div>
                  <img src={i.path} />
                </div>
                <div>{i.item}</div>
                <div>{i.price}</div>
              </CartItems>
            </div>
          </li>
        </ul>
      ));

      updateCart(res2);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Flair />
      <MainSection>
        <Navbar />
        <SecondarySection>
          <BoxDiv>
            <BoxSpacer>
              {" "}
              <CartBox>
                <h1>Current Item(s)</h1>
                {cartItems}
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
