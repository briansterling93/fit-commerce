import React, { useContext, useState } from "react";
import {
  MainSection,
  AuthBoxBorder,
  AuthUI,
  UIinput,
  UIinputPadding,
  UiBtn,
  ErrorMsg,
} from "../styling/SignUp";
import Flair from "../components/Flair";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import {
  StateContext,
  initialState,
  APP_ACTIONS,
} from "../context/StateContext";

const SignUp: React.FC = () => {
  const [UIname, nameError] = useState<string>("");
  const [UIemail, emailError] = useState<string>("");
  const [UIpassword, passwordError] = useState<string>("");
  const [confirmPassword, passwordConfirmError] = useState<string>("");
  const { state, dispatch } = useContext<any>(StateContext);

  const { name, email_address, password } = state;
  return (
    <div>
      <Flair />
      <MainSection>
        <Navbar />
        <AuthBoxBorder>
          <AuthUI>
            <h1>Welcome, Sign up below!</h1>
            <UIinputPadding>
              <UIinput>
                <i className="fa fa-user" aria-hidden="true"></i>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  onChange={(e) => {
                    dispatch({
                      type: APP_ACTIONS.UPDATE_NAME,
                      payload: e.target.value,
                    });
                  }}
                ></input>{" "}
              </UIinput>
              <ErrorMsg></ErrorMsg>
            </UIinputPadding>
            <UIinputPadding>
              <UIinput>
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  onChange={(e) => {
                    dispatch({
                      type: APP_ACTIONS.UPDATE_EMAIL,
                      payload: e.target.value,
                    });
                  }}
                ></input>{" "}
              </UIinput>
              <ErrorMsg></ErrorMsg>
            </UIinputPadding>
            <UIinputPadding>
              <UIinput>
                <i className="fa fa-key" aria-hidden="true"></i>
                <input
                  type="password"
                  placeholder="Enter a password"
                  onChange={(e) => {
                    dispatch({
                      type: APP_ACTIONS.UPDATE_PASSWORD,
                      payload: e.target.value,
                    });
                  }}
                ></input>
              </UIinput>
              <ErrorMsg></ErrorMsg>
            </UIinputPadding>
            <UIinputPadding>
              <UIinput>
                <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                <input
                  type="password"
                  placeholder="Confirm password"
                ></input>{" "}
              </UIinput>
              <ErrorMsg></ErrorMsg>
            </UIinputPadding>
            <UiBtn>
              <button>Create account</button>
              <p>
                Already have an account?{" "}
                <NavLink to="/signin">Sign in here</NavLink>
              </p>
            </UiBtn>
          </AuthUI>
        </AuthBoxBorder>
      </MainSection>
    </div>
  );
};

export default SignUp;
