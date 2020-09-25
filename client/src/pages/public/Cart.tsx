import React, { useState, useContext, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Flair from "../../components/Flair";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { StateContext } from "../../context/StateContext";
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
  TotalBoxBtns,
  BtnPadding,
  CartRemoveBtn,
  CartQuantity,
  Btn1,
  Btn2,
  EmptyCart,
  ContinueBtn,
} from "../../styling/Cart";

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
                <CartQuantity>({i.quantity})</CartQuantity>x
                <CartPrice>{i.price}</CartPrice>
                <CartRemoveBtn>
                  {/* //function to remove selected items */}
                  <i
                    onClick={async (e: any) => {
                      try {
                        let item_name = await i.item;

                        let newItem = { item_name };

                        const config = {
                          headers: {
                            "Content-Type": "application/json",
                          },
                        };

                        const body = JSON.stringify(newItem);

                        const res = await axios.post(
                          "/cart/remove",
                          body,
                          config
                        );
                        await window.location.reload();
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                    title="Remove Item"
                    className="fa fa-trash-o"
                    aria-hidden="true"
                  ></i>
                </CartRemoveBtn>
              </CartItems>
            </div>
          </li>
        </ul>
      ));

      updateCart(res2);

      //get cart total function below

      const res3 = await axios.get("/cart/total");

      const res4 = res3.data.findAll.map((p: any) => p.price * p.quantity);

      const res5 = res4.map((p: any) => Number(p)).join(" + ");

      let total: number = eval(res5);

      if (total < 30) {
        total = total + 12;
        updateShippingCost(12);
        updateShippingTotal("Shipping Cost: $12.00");
      } else {
        updateShippingCost(0);
        updateShippingTotal("Shipping Cost: $0.00");
      }

      if (total === undefined) {
        updateTotal("Subtotal: $0.00");
        updateCart(<EmptyCart>No items in cart yet</EmptyCart>);
      } else {
        updateTotal(`Subtotal: $${total}.00`); //add both shipping cost & total (when needed)
      }
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
            <BoxSpacer>
              <TotalBox>
                <h1>Total</h1>
                <p>{shippingTotal}</p>

                <p>{cartTotal}</p>
                <TotalBoxBtns>
                  <BtnPadding>
                    <NavLink to="/signin">
                      <Btn1>
                        <button>Sign in</button>
                      </Btn1>
                    </NavLink>
                  </BtnPadding>
                  <BtnPadding>
                    <Btn2>
                      <button>Guest checkout</button>
                    </Btn2>
                  </BtnPadding>
                </TotalBoxBtns>
              </TotalBox>
            </BoxSpacer>
          </BoxDiv>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default Cart;