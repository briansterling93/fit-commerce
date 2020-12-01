import React, { useState, useContext, useEffect } from 'react';
import AuthNavbar from '../../components/AuthNavbar';
import FlairText from '../../components/FlairText';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { StateContext, APP_ACTIONS } from '../../context/StateContext';
import { MainSection, SecondarySection, BoxDiv, RecentsDiv, ItemBox, DivSpacer } from '../../styling/Orders';

const Order: React.FC = () => {
  const { state, dispatch } = useContext<any>(StateContext);
  const [orderHistory, setOrderHistory] = useState<any>('');
  const [route, setRoute] = useState<any>();
  useEffect(() => {
    state.token || 'token' in localStorage ? getOrderHistory() : setRoute(<Redirect to="/signin" />);
  }, []);

  //get users order history from backend
  const getOrderHistory = async () => {
    try {
      const res = await axios.get(`/orders/${localStorage.getItem('userID')}`);

      //   if (res.data.queried_orderHistory.length < 1) {
      //     setOrderHistory('No orders yet!');
      //   } else setOrderHistory('Loading...');

      if (res.data.queried_orderHistory.length < 1) {
        setOrderHistory('No orders yet!');
      } else
        setOrderHistory(
          res.data.queried_orderHistory.map((i: any) => (
            <div key={i.id}>
              <DivSpacer>
                <ItemBox>{i.order_total}</ItemBox>
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
