import React, { useContext, useState, useEffect } from 'react';
import AuthNavbar from '../../components/AuthNavbar';
import FlairText from '../../components/FlairText';
import { NavLink } from 'react-router-dom';

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

type FormElem = React.FormEvent<HTMLFormElement>;

const Dashboard: React.FC = () => {
  const { state, dispatch } = useContext<any>(StateContext);
  const [storedValue, setStoredValue] = useState<any>();
  const [route, setRoute] = useState<any>('');
  const [userToken, setToken] = useState<string>('');
  const [userName, setName] = useState<string>('');
  const [userEmail, setEmail] = useState<string>('');
  const [userAge, setAge] = useState<string>('');

  const { name, token } = state;

  useEffect(() => {
    state.token || 'token' in localStorage ? genUser() : setRoute(<Redirect to="/signin" />);
  }, []);

  //generate user profile on load
  const genUser = async () => {
    try {
      if ('token' in localStorage) {
        const tokenValue: any = localStorage.getItem('token');

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

        const tokenValue: any = localStorage.getItem('token');

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
      }
    } catch (error) {
      console.log(error);
    }
  };

  //set token value in localStorage
  const setValue = async (value: any) => {
    try {
      let key = 'token';

      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  //remove token from localStorage
  const removeToken = async () => {
    try {
      await localStorage.clear();

      await window.location.reload();
    } catch (error) {}
  };

  const authorizeRoute = async () => {};
  return (
    <div>
      {route}
      <FlairText />
      <MainSection>
        <AuthNavbar />
        <SecondarySection>
          <BoxDiv>
            <WelcomeDiv>{`Welcome, ${userName}!`}</WelcomeDiv>
            <BoxDivMain>
              <DivSpacer>
                {' '}
                <RecentsDiv>
                  <h1>Recent Orders</h1>
                </RecentsDiv>
              </DivSpacer>
              <DivSpacer>
                <InfoDiv>
                  <h1>Your Info</h1>{' '}
                  <InfoText>
                    <div>{`Email Address: ${userEmail}`}</div>
                    <div>{`Member Since: ${userAge}`}</div>
                    <BtnDiv>
                      <LogoutBtn>
                        <NavLink to="/" onClick={removeToken}>
                          <button>Logout</button>
                        </NavLink>
                        <button
                          onClick={() => {
                            if ('token' in localStorage) {
                              console.log(localStorage.getItem('token'));
                            } else {
                              console.log('none found');
                            }
                          }}
                        >
                          Get current user
                        </button>
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
