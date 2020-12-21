import React, { useContext, useState } from 'react';
import {
  MainSection,
  AuthBoxBorder,
  AuthUI,
  UIinput,
  UIinputPadding,
  UiBtn,
  UiBtn2,
  ErrorMsg,
  BtnsDiv,
} from '../../styling/SignIn';
import { Route, Redirect, NavLink } from 'react-router-dom';
import { StateContext, initialState, APP_ACTIONS } from '../../context/StateContext';
import FlairText from '../../components/FlairText';
import Navbar from '../../components/Navbar';
import axios from 'axios';

type FormElem = React.FormEvent<HTMLFormElement>;

const SignIn: React.FC = () => {
  const [UIemail, emailError] = useState<string>('');
  const [UIpassword, passwordError] = useState<string>('');
  const [route, setRoute] = useState<any>('');
  const { state, dispatch } = useContext<any>(StateContext);

  const { email_address, password, token } = state;

  const handleLogin = async () => {
    try {
      if (!state.email_address) {
        emailError('Email address is invalid');
      } else emailError('');

      if (!state.password) {
        passwordError('Password is required');
      } else {
        passwordError('');
      }

      if (email_address && password) {
        let user = { email_address, password };

        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const body = JSON.stringify(user);

        const res = await axios.post('/user/login', body, config);

        console.log(res);
        console.log({
          email: state.email_address,
          password: state.password,
        });

        await dispatch({
          type: APP_ACTIONS.UPDATE_TOKEN,
          payload: res.data.token,
        });

        (await res.data.token) ? setRoute(<Redirect to="user/dashboard" />) : passwordError('Invalid credentials');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <MainSection>
        <FlairText />
        <Navbar />
        <AuthBoxBorder>
          {route}
          <AuthUI>
            <h1>Sign In</h1>
            <UIinputPadding>
              <UIinput>
                <i className="fa fa-user" aria-hidden="true"></i>
                <input
                  onChange={(e) => {
                    dispatch({
                      type: APP_ACTIONS.UPDATE_EMAIL,
                      payload: e.target.value,
                    });
                  }}
                  type="text"
                  placeholder="Email address"
                ></input>{' '}
              </UIinput>
              <ErrorMsg>{UIemail}</ErrorMsg>
            </UIinputPadding>
            <UIinputPadding>
              <UIinput>
                <i className="fa fa-key" aria-hidden="true"></i>
                <input
                  onChange={(e) => {
                    dispatch({
                      type: APP_ACTIONS.UPDATE_PASSWORD,
                      payload: e.target.value,
                    });
                  }}
                  type="password"
                  placeholder="Password"
                ></input>
              </UIinput>
              <ErrorMsg>{UIpassword}</ErrorMsg>
            </UIinputPadding>
            <BtnsDiv>
              <UiBtn2>
                <NavLink to="/signup">
                  {' '}
                  <button>Create Account</button>
                </NavLink>
              </UiBtn2>
              <UiBtn>
                <button onClick={handleLogin}>Login</button>
              </UiBtn>
            </BtnsDiv>
          </AuthUI>
        </AuthBoxBorder>
      </MainSection>
    </div>
  );
};

export default SignIn;
