import React, { useState } from "react";
import AdminFlair from "../components/AdminFlair";
import {
  MainSection,
  SecondarySection,
  PortalBox,
  Title,
  PortalForm,
  FormPadding,
  InputStyling,
  ButtonStyling,
  ButtonPadding1,
  ButtonPadding2,
  ErrorMsg,
  PopUp,
} from "../styling/AdminPortal";

const AdminSignUp: React.FC = () => {
  const [error, setError] = useState<string>("");
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
                    <ButtonPadding1>
                      <button>
                        <i className="fa fa-sign-in" aria-hidden="true"></i>
                      </button>
                    </ButtonPadding1>
                    <ButtonPadding2>
                      <button>
                        <i className="fa fa-user-plus" aria-hidden="true"></i>
                      </button>
                    </ButtonPadding2>
                  </ButtonStyling>
                </FormPadding>
              </PortalForm>
            </form>
          </PortalBox>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default AdminSignUp;
