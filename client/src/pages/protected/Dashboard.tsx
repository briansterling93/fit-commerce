import React, { useContext, useState, useEffect } from 'react';
import AuthNavbar from '../../components/AuthNavbar';
import FlairText from '../../components/FlairText';
import { NavLink } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

import axios from 'axios';
import {
  MainSection,
  SecondarySection,
  BoxDiv,
  BoxDivMain,
  RecentsDiv,
  InfoDiv,
  InfoText,
  WelcomeDiv,
  DivSpacer,
  BtnDiv,
  LogoutBtn,
} from '../../styling/Dashboard';
import { Redirect } from 'react-router-dom';
import { StateContext, APP_ACTIONS } from '../../context/StateContext';

const Dashboard: React.FC = () => {
  const { state, dispatch } = useContext<any>(StateContext);
  const [storedValue, setStoredValue] = useState<any>();
  const [route, setRoute] = useState<any>('');
  const [userName, setName] = useState<string>('');
  const [userEmail, setEmail] = useState<string>('');
  const [userAge, setAge] = useState<string>('');
  const [loading, setLoading] = useState<boolean>();

  const { name, token } = state;

  useEffect(() => {
    state.token || ('token' in sessionStorage && 'userID' in sessionStorage)
      ? genUser()
      : setRoute(<Redirect to="/signin" />);
  }, []);

  //generate user profile on load
  const genUser = async () => {
    try {
      if ('token' in sessionStorage) {
        const tokenValue: any = sessionStorage.getItem('token');

        dispatch({
          type: APP_ACTIONS.UPDATE_TOKEN,
          payload: JSON.parse(tokenValue),
        });

        const config = {
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': JSON.parse(tokenValue),
          },
        };

        const res = await axios.get('/user/authorized', config);

        setName(res.data.name);
        setAge(res.data.createdAt);
        setEmail(res.data.email_address);
      } else {
        await setValue(state.token);

        const tokenValue: any = sessionStorage.getItem('token');

        const config = {
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': JSON.parse(tokenValue),
          },
        };

        const res = await axios.get('/user/authorized', config);

        setName(res.data.name);
        setAge(res.data.createdAt);
        setEmail(res.data.email_address);

        //push user ID to sessionStorage
        sessionStorage.setItem('userID', res.data.id);

        //determine if addPublicCart() should be ran
        sessionStorage.getItem('newItem') ? addPublicCart() : console.log('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  //add any public items that were added to cart, to the users cart
  const addPublicCart = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const publicCartItem: any = sessionStorage.getItem('newItem');

      if (publicCartItem) {
        let item = JSON.parse(publicCartItem).item;
        let price = JSON.parse(publicCartItem).price;
        let path = JSON.parse(publicCartItem).path;
        let quantity = JSON.parse(publicCartItem).quantity;
        let customer_id = sessionStorage.getItem('userID');

        //GET request to check if item is already in cart
        let cartQuery = await axios.get(`/user_carts/${sessionStorage.getItem('userID')}`);

        let cartQuery2 = await cartQuery.data.queried_user.map((g: any) => g.item);

        let cartQuery3 = await cartQuery2.filter((s: any) => s === item);

        if (cartQuery3.length >= 1) {
          let item_name = await JSON.parse(publicCartItem).item;
          let item_quantity = await JSON.parse(publicCartItem).quantity;

          let item_increment = { item_name, item_quantity };

          const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          };

          const body = JSON.stringify(item_increment, item_quantity);

          return await axios.post(`/user_carts/${sessionStorage.getItem('userID')}/increment`, body, config);
        }

        ///

        let newItem = { item, price, path, quantity, customer_id };

        const body = JSON.stringify(newItem);

        const res = await axios.post('/user_carts', body, config);

        await sessionStorage.removeItem('newItem');

        await window.location.reload();
      } else {
        console.log('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  //set token value in sessionStorage
  const setValue = async (value: any) => {
    try {
      let key = 'token';

      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  //remove token from sessionStorage
  const removeToken = async () => {
    try {
      await sessionStorage.clear();

      await window.location.reload();
    } catch (error) {}
  };

  const authorizeRoute = async () => {};
  return (
    <div>
      {route}
      <FlairText />
      <AuthNavbar />

      <MainSection>
        <SecondarySection>
          <BoxDiv>
            <WelcomeDiv>
              <p>{`Welcome, ${userName}!`}</p>
            </WelcomeDiv>
            <BoxDivMain>
              <DivSpacer>
                {' '}
                <RecentsDiv>
                  <h1>Options</h1>
                  <DivSpacer>
                    {' '}
                    <NavLink to="/user/cart">
                      <button>View Cart</button>
                    </NavLink>
                  </DivSpacer>

                  <div>
                    <NavLink to="/user/orders">
                      <button>View Order History</button>
                    </NavLink>
                  </div>
                </RecentsDiv>
              </DivSpacer>
              <DivSpacer>
                <InfoDiv>
                  <h1>Your Info</h1>
                  <InfoText>
                    <div>{userEmail}</div>

                    <BtnDiv>
                      <LogoutBtn>
                        <NavLink to="/" onClick={removeToken}>
                          <button>Logout</button>
                        </NavLink>
                      </LogoutBtn>
                    </BtnDiv>
                  </InfoText>
                </InfoDiv>
              </DivSpacer>
            </BoxDivMain>
          </BoxDiv>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default Dashboard;
