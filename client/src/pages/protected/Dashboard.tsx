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
  const [storedVal, setVal] = useState<any>('');
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

      await setName(res.data.name);
      await setAge(res.data.createdAt);
      await setEmail(res.data.email_address);
    } catch (error) {}
  };

  const useLocalStorage = (key: any, initValue: any) => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initValue;
    } catch (error) {
      console.log(error);
    }
  };

  const setValue = (value: any) => {
    try {
      let key = '';
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  const testFunc = () => {
    setValue(state.token);
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
