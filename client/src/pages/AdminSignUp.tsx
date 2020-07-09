import React, { useState } from "react";
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
  PopUp,
} from "../styling/AdminSignUp";

const AdminSignUp: React.FC = () => {
  const [error, setError] = useState<string>("");

  const testReq = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      let res = await axios.get("/admin");

      console.log(res);

      // JSON.stringify(res);
      // const allJobs = await res.data.findAll;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <AdminFlair />
      <MainSection>
        <SecondarySection>
          <PortalBox>
            <Title>Welcome, Sign Up!</Title>
            <form onSubmit={() => console.log("hi")}>
              <PortalForm>
                <FormPadding>
                  <InputStyling>
                    <input placeholder="Enter your email address" type="text" />
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
                      <button onClick={testReq}>
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
