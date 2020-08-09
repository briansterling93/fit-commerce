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
import axios from "axios";

const SignUp: React.FC = () => {
  const [UIname, nameError] = useState<string>("");
  const [UIemail, emailError] = useState<string>("");
  const [UIpassword, passwordError] = useState<string>("");
  const [confirmPassword, passwordConfirmError] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");
  const { state, dispatch } = useContext<any>(StateContext);

  const { name, email_address, password } = state;

  // handle create user
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!state.name) {
        nameError("Name is required");
      } else nameError("");

      if (!state.email_address.includes("@" && ".")) {
        emailError("Please enter a valid email addres");
      } else emailError("");

      if (!state.password || state.password.length < 5) {
        passwordError("Password must be at least 5 characters");
      } else {
        passwordError("");
      }

      if (state.password !== password2) {
        passwordConfirmError("The passwords do not match");
      } else {
        passwordConfirmError("");
      }

      if (name && email_address && password && password2) {
        let newUser = { name, email_address, password };

        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const body = JSON.stringify(newUser);

        const res = await axios.post("/user/newuser", body, config);

        console.log(":D");
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
              <ErrorMsg>{UIname}</ErrorMsg>
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
              <ErrorMsg>{UIemail}</ErrorMsg>
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
              <ErrorMsg>{UIpassword}</ErrorMsg>
            </UIinputPadding>
            <UIinputPadding>
              <UIinput>
                <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                <input
                  onChange={(e) => setPassword2(e.target.value)}
                  type="password"
                  placeholder="Confirm password"
                ></input>{" "}
              </UIinput>
              <ErrorMsg>{confirmPassword}</ErrorMsg>
            </UIinputPadding>
            <UiBtn>
              <button onClick={handleCreate}>Create account</button>
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
