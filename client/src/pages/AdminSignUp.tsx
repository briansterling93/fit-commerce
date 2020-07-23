import React, { useState, useContext } from "react";
import AdminFlair from "../components/AdminFlair";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {
  MainSection,
  SecondarySection,
  PortalBox,
  Title,
  PortalForm,
  FormPadding,
  FormPaddingLink,
  InputStyling,
  ButtonStyling,
  ButtonPadding,
  ErrorMsg,
} from "../styling/AdminSignUp";
import { StateContext, initialState } from "../context/StateContext";

const AdminSignUp: React.FC = () => {
  const { state, dispatch } = useContext(StateContext);

  const { email_address, password } = initialState;

  const [error, setError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmError, setConfirmError] = useState<string>("");

  // const addNewUser = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   let user = { password, email_address };

  //   console.log(user);

  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };

  //     const body = JSON.stringify(user);

  //     let res = await axios.post("/admin", body, config);

  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <AdminFlair />
      <MainSection>
        <SecondarySection>
          <PortalBox>
            <Title>Welcome, Sign Up! {email_address}</Title>
            <form>
              <PortalForm>
                <FormPadding>
                  <InputStyling>
                    <input
                      placeholder="Enter your email address"
                      type="text"
                      onChange={(e) =>
                        dispatch({
                          type: "UPDATE_EMAIL",
                          payload: e.target.value,
                        })
                      }
                    />
                  </InputStyling>
                  <ErrorMsg>{error}</ErrorMsg>
                </FormPadding>
                <FormPadding>
                  <InputStyling>
                    <input type="password" placeholder="Enter a password" />
                  </InputStyling>
                  <ErrorMsg>{error}</ErrorMsg>
                </FormPadding>
                <FormPadding>
                  <InputStyling>
                    <input placeholder="Confirm password" type="password" />
                  </InputStyling>
                  <ErrorMsg>{error}</ErrorMsg>
                </FormPadding>
                <FormPadding>
                  <ButtonStyling>
                    <ButtonPadding>
                      <button>
                        <i className="fa fa-user-plus" aria-hidden="true"></i>
                        Create Account
                      </button>
                    </ButtonPadding>
                  </ButtonStyling>
                </FormPadding>
                <FormPaddingLink>
                  Already have an account?{" "}
                  <NavLink to="/admin">Sign in here</NavLink>
                </FormPaddingLink>
              </PortalForm>
            </form>
          </PortalBox>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default AdminSignUp;
