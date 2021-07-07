import React, { useState, useContext, useEffect } from 'react';
import AuthNavbar from '../../components/AuthNavbar';
import FlairText from '../../components/FlairText';
import Swal from 'sweetalert2';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { StateContext, APP_ACTIONS } from '../../context/StateContext';
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
  Btn2,
  EmptyCart,
  ContinueBtn,
  TotalPrice,
} from '../../styling/Cart';

const ProtectedCart: React.FC = () => {
  const { state, dispatch } = useContext<any>(StateContext);
  const [cartItems, updateCart] = useState<any>();
  const [cartTotal, updateTotal] = useState<any>();
  const [route, setRoute] = useState<any>('');
  const [shippingCost, updateShippingCost] = useState<any>();
  const [shippingTotal, updateShippingTotal] = useState<any>();

  useEffect(() => {
    state.token || 'token' in sessionStorage ? populateCart() : setRoute(<Redirect to="/signin" />);
  }, []);

  //extract from "cart" sessionStorage key into "total_items"

  const populateCart = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.get(`/user_carts/${sessionStorage.getItem('userID')}`);

      const res2 = await res.data.queried_user.map((i: any) => (
        <ul key={i.id}>
          <li>
            <div>
              <CartItems>
                <div>
                  <img src={i.path} />
                </div>
                <CartItem>{i.item}</CartItem>
                <CartQuantity>({i.quantity})</CartQuantity>
                <p>x</p>
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
                            'Content-Type': 'application/json',
                          },
                        };

                        const body = JSON.stringify(newItem);

                        const res = await axios.post(
                          `/user_carts/${sessionStorage.getItem('userID')}/remove`,
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

      const res3 = await axios.get(`/user_carts/${sessionStorage.getItem('userID')}/total`);

      const res4 = res3.data.findAll.map((p: any) => p.price * p.quantity);

      const res5 = res4.map((p: any) => Number(p)).join(' + ');

      let total: number = eval(res5);

      if (total < 30) {
        total = total + 12;
        updateShippingCost(12);
        updateShippingTotal('Shipping Cost: $12.00');
      } else {
        updateShippingCost(0);
        updateShippingTotal('Shipping Cost: $0.00');
      }

      if (total === undefined) {
        // updateTotal('Subtotal: $0.00');
        updateTotal('0.00');
        updateCart(<EmptyCart>No items in cart yet</EmptyCart>);
      } else {
        // updateTotal(`Subtotal: $${total}.00`); //add both shipping cost & total (when needed)
        updateTotal(`${total}.00`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {route}

      <MainSection>
        <FlairText />
        <AuthNavbar />
        <SecondarySection>
          <ContinueBtn>
            <NavLink to="/user/shop">
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

                <p>
                  <TotalPrice>Total: ${cartTotal}</TotalPrice>
                </p>
                <TotalBoxBtns>
                  <BtnPadding>
                    <Btn2>
                      <button
                        onClick={async () => {
                          try {
                            const config = {
                              headers: {
                                'Content-Type': 'application/json',
                              },
                            };

                            const res = await axios.get(`/user_carts/${sessionStorage.getItem('userID')}`, config);

                            const getCart = await res.data.queried_user;

                            let item_path = await getCart.map((j: any) => j.path);

                            let items_ordered = await getCart.map((j: any) => j.item);

                            let customer_id = sessionStorage.getItem('userID');

                            let order_total = await cartTotal;

                            let quantity = await getCart.map((j: any) => j.quantity);

                            let price = await getCart.map((j: any) => j.price);

                            let newOrder = { item_path, items_ordered, customer_id, order_total, quantity, price };

                            const body = JSON.stringify(newOrder);

                            //post items to bakckend order route
                            const res2 = await axios.post('/orders/new', body, config);

                            const clearCart = await axios.post(
                              `/user_carts/${sessionStorage.getItem('userID')}/removeall`,
                              config
                            );

                            if (res2.data.errors) {
                              return null;
                            }
                            await Swal.fire({
                              icon: 'success',
                              timer: 1500,
                              title: 'Thank you for your purchase!',
                              width: 400,
                            });

                            // await window.location.reload();

                            const reRender = <Redirect to="/user/orders" />;

                            await setRoute(reRender);
                          } catch (error) {
                            console.log(error);
                          }
                        }}
                      >
                        Checkout
                      </button>
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

export default ProtectedCart;
