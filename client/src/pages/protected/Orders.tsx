import React, { useState, useContext, useEffect } from 'react';
import AuthNavbar from '../../components/AuthNavbar';
import FlairText from '../../components/FlairText';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { StateContext, APP_ACTIONS } from '../../context/StateContext';
import {
  MainSection,
  SecondarySection,
  BoxDiv,
  RecentsDiv,
  ItemBox,
  DivSpacer,
  ItemSection,
  ItemHeader,
  ItemBoxSecondary,
  Items,
  ItemImages,
  ItemDate,
  ItemTotal,
  ItemName,
  ItemQuantity,
  ItemPrice,
} from '../../styling/Orders';

const Order: React.FC = () => {
  const { state, dispatch } = useContext<any>(StateContext);
  const [orderHistory, setOrderHistory] = useState<any>('');
  const [route, setRoute] = useState<any>();
  const [img, setImg] = useState<any>([]);
  useEffect(() => {
    state.token || 'token' in localStorage ? getOrderHistory() : setRoute(<Redirect to="/signin" />);
  }, []);

  //get users order history from backend
  const getOrderHistory = async () => {
    try {
      const res = await axios.get(`/orders/${localStorage.getItem('userID')}`);

      if (res.data.queried_orderHistory.length < 1) {
        setOrderHistory('No orders yet!');
      } else
        setOrderHistory(
          res.data.queried_orderHistory.reverse().map((i: any) => (
            <div key={i.id}>
              <DivSpacer>
                <ItemSection>
                  <ItemBox>
                    <ItemHeader>
                      <ItemDate>
                        <h1>Order Placed:</h1> <p>{i.createdAt}</p>
                      </ItemDate>
                      <ItemTotal>
                        <h1>Total</h1> <p>${i.order_total}</p>
                      </ItemTotal>
                    </ItemHeader>
                    <ItemBoxSecondary>
                      <ItemImages>
                        {JSON.parse(i.item_path).map((j: any) => (
                          <div key={j.id}>
                            <img src={j} />
                          </div>
                        ))}
                      </ItemImages>
                      <Items>
                        {JSON.parse(i.items_ordered).map((j: any) => (
                          <ItemName>{j}</ItemName>
                        ))}
                      </Items>
                      <ItemQuantity>
                        {JSON.parse(i.quantity).map((j: any) => (
                          <ItemName>({j})</ItemName>
                        ))}
                      </ItemQuantity>
                      <ItemPrice>
                        {JSON.parse(i.price).map((j: any) => (
                          <ItemName>{j}</ItemName>
                        ))}
                      </ItemPrice>
                    </ItemBoxSecondary>
                  </ItemBox>
                </ItemSection>
              </DivSpacer>
            </div>
          ))
        );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {route}
      <FlairText />
      <AuthNavbar />
      <MainSection>
        <SecondarySection>
          <BoxDiv>
            <p>Recent Orders</p>
            <RecentsDiv>{orderHistory}</RecentsDiv>
          </BoxDiv>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default Order;
