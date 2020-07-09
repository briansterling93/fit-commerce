import React, { useState } from "react";
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
import { NavLink } from "react-router-dom";
import AdminFlair from "../components/AdminFlair";

const AdminPortal: React.FC = () => {
  const [error, setError] = useState<string>("");
  const [popUp, setMessage] = useState<string>("");

  return (
    <div>
      <AdminFlair />
      <MainSection>
        <SecondarySection>
          <PortalBox>
            <Title>Sign In</Title>
            <form onSubmit={() => console.log("hi")}>
              <PortalForm>
                <FormPadding>
                  <InputStyling>
                    <input placeholder="Email address" type="text" />
                  </InputStyling>
                  <ErrorMsg>{error}</ErrorMsg>
                </FormPadding>
                <FormPadding>
                  <InputStyling>
                    <input type="password" placeholder="Password" />
                  </InputStyling>
                  <ErrorMsg>{error}</ErrorMsg>
                </FormPadding>
                <FormPadding>
                  <ButtonStyling>
                    <ButtonPadding1>
                      <button
                        onMouseOver={(e) => setMessage("Sign In")}
                        onMouseOut={(e) => setMessage("")}
                      >
                        <i className="fa fa-sign-in" aria-hidden="true"></i>
                      </button>
                    </ButtonPadding1>
                    <ButtonPadding2>
                      <NavLink to="/signup">
                        <button
                          onMouseOver={(e) => setMessage("Create account")}
                          onMouseOut={(e) => setMessage("")}
                        >
                          <i className="fa fa-user-plus" aria-hidden="true"></i>
                        </button>
                      </NavLink>
                    </ButtonPadding2>
                  </ButtonStyling>
                </FormPadding>
              </PortalForm>
            </form>
            <PopUp>{popUp}</PopUp>
          </PortalBox>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default AdminPortal;
