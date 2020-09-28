import React, { useContext, useState } from "react";
import {
  MainSection,
  AuthBoxBorder,
  AuthUI,
  UIinput,
  UIinputPadding,
  UiBtn,
  ErrorMsg,
} from "../../styling/SignIn";
import { Route, Redirect, NavLink } from "react-router-dom";
import {
  StateContext,
  initialState,
  APP_ACTIONS,
} from "../../context/StateContext";
import Flair from "../../components/Flair";
import Navbar from "../../components/Navbar";
import axios from "axios";

type FormElem = React.FormEvent<HTMLFormElement>;

const SignIn: React.FC = () => {
  const [UIemail, emailError] = useState<string>("");
  const [UIpassword, passwordError] = useState<string>("");
  const [route, setRoute] = useState<any>("");
  const { state, dispatch } = useContext<any>(StateContext);

  const { email_address, password, token } = state;

  const setAuthToken = async (token: FormElem) => {
    if (state.token) {
      axios.defaults.headers.common["x-auth-token"] = state.token;
    } else {
      delete axios.defaults.headers.common["x-auth-token"];
    }
    try {
      axios.get("/user/authorized");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async () => {
    try {
      if (!state.email_address) {
        emailError("Email address is invalid");
      } else emailError("");

      if (!state.password) {
        passwordError("Password is required");
      } else {
        passwordError("");
      }

      if (email_address && password) {
        let user = { email_address, password };

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const body = JSON.stringify(user);

        const res = await axios.post("/user/login", body, config);

        await dispatch({
          type: APP_ACTIONS.UPDATE_TOKEN,
          payload: res.data.token,
        });

        await dispatch({
          type: APP_ACTIONS.UPDATE_NAME,
          payload: "freddy",
        });

        (await res.data.token)
          ? setRoute(<Redirect to="user/dashboard" />)
          : passwordError("Invalid credentials");
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
                ></input>{" "}
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
            <UiBtn>
              <button onClick={handleLogin}>Login</button>
              <p>
                Don't have an account?{" "}
                <NavLink to="/signup">Create one here</NavLink>
              </p>
            </UiBtn>
          </AuthUI>
        </AuthBoxBorder>
      </MainSection>
    </div>
  );
};

export default SignIn;
