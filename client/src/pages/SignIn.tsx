import React from "react";
import {
  MainSection,
  AuthBoxBorder,
  AuthUI,
  UIinput,
  UIinputPadding,
  UiBtn,
} from "../styling/SignIn";
import Flair from "../components/Flair";
import Navbar from "../components/Navbar";
const SignIn: React.FC = () => {
  return (
    <div>
      <Flair />
      <MainSection>
        <Navbar />
        <AuthBoxBorder>
          <AuthUI>
            <h1>Sign In</h1>
            <UIinputPadding>
              <UIinput>
                <i className="fa fa-user" aria-hidden="true"></i>
                <input type="text" placeholder="Email address"></input>{" "}
              </UIinput>
            </UIinputPadding>
            <UIinputPadding>
              <UIinput>
                <i className="fa fa-key" aria-hidden="true"></i>
                <input type="password" placeholder="Password"></input>
              </UIinput>
            </UIinputPadding>
            <UiBtn>
              <button>Login</button>
              <p>Don't have an account? Create one here</p>
            </UiBtn>
          </AuthUI>
        </AuthBoxBorder>
      </MainSection>
    </div>
  );
};

export default SignIn;
