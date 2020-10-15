import React, { useContext, useState, useEffect } from 'react';
import AuthNavbar from '../../components/AuthNavbar';
import Flair from '../../components/Flair';
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
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': `${state.token}`,
        },
      };

      const res = await axios.get('/user/authorized', config);

      setName(res.data.name);
      setAge(res.data.createdAt);
      setEmail(res.data.email_address);
      return setValue(state.token);
    } catch (error) {}
  };

  //filter through local storage item list function
  const useLocalStorage = (key: any) => {
    try {
      const item = window.localStorage.getItem(key);

      // return item ? JSON.parse(item) : console.log('none found');

      return item ? localStorage.removeItem(key) : console.log(false);
    } catch (error) {
      console.log(error);
    }
  };

  //set token function
  const setValue = async (value: any) => {
    try {
      let key = await `${userEmail} token`;

      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  //test function to set value
  const testFunc = () => {
    setValue(state.token);
  };

  //test function to
  const testFunc2 = () => {
    const h = useLocalStorage;

    console.log(h(`${userEmail} token`));
  };

  const authorizeRoute = async () => {};
  return (
    <div>
      {route}
      <Flair />
      <MainSection>
        <AuthNavbar />
        <SecondarySection>
          <BoxDiv>
            <WelcomeDiv>Welcome, {`${userName}!`}</WelcomeDiv>
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
                    <div>Email Address: {userEmail}</div>
                    <div>Member Since: {userAge}</div>
                    <BtnDiv>
                      <LogoutBtn>
                        <NavLink to="/">
                          <button>Logout</button>
                        </NavLink>
                        <button onClick={testFunc}>Get current user</button>
                        <button onClick={testFunc2}>Remove Token</button>
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
