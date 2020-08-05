import React from "react";
import {
  MainSection,
  AuthBoxBorder,
  AuthUI,
  UIinput,
  UIinputPadding,
  UiBtn,
} from "../styling/SignUp";
import Flair from "../components/Flair";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

const SignUp: React.FC = () => {
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
                <input type="text" placeholder="Enter your first name"></input>{" "}
              </UIinput>
            </UIinputPadding>
            <UIinputPadding>
              <UIinput>
                <input
                  type="text"
                  placeholder="Enter your email address"
                ></input>{" "}
              </UIinput>
            </UIinputPadding>
            <UIinputPadding>
              <UIinput>
                <input type="password" placeholder="Enter a password"></input>
              </UIinput>
            </UIinputPadding>
            <UIinputPadding>
              <UIinput>
                <input type="password" placeholder="Confirm password"></input>{" "}
              </UIinput>
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
