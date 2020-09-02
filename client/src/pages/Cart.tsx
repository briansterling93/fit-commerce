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
  CartItem,
  CartPrice,
} from "../styling/Cart";

const Cart: React.FC = () => {
  const { state, dispatch } = useContext<any>(StateContext);
  const [cartItems, updateCart] = useState<any>();
  const [cartTotal, updateTotal] = useState<any>();
  const [shippingCost, updateShippingCost] = useState<any>();
  const [shippingTotal, updateShippingTotal] = useState<any>();
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
                <CartItem>{i.item}</CartItem>

                <CartPrice>{i.price}</CartPrice>
              </CartItems>
            </div>
          </li>
        </ul>
      ));

      updateCart(res2);

      //get cart total

      const res3 = await axios.get("/cart/total");

      const res4 = res3.data.findAll.map((p: any) => p.price);

      const res5 = res4.map((p: any) => Number(p)).join(" + ");

      let total: number = eval(res5);

      if (total < 30) {
        updateShippingCost(12);
        updateShippingTotal("Shipping Cost: $12.00");
      } else {
        updateShippingCost(0);
        updateShippingTotal("Shipping Cost: $0.00");
      }

      if (total === undefined) {
        updateTotal("Subtotal: $0.00");
      } else {
        updateTotal(`Subtotal: $${total + shippingCost}.00`); //add both shipping cost & total (when needed)
      }

      console.log(total + 15);
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
                <p>{shippingTotal}</p>
                {/* <br /> */}
                <p>{cartTotal}</p>
              </TotalBox>
            </BoxSpacer>
          </BoxDiv>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default Cart;
