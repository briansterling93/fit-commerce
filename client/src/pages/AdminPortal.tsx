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
} from "../styling/AdminPortal";
import AdminFlair from "../components/AdminFlair";

const AdminPortal: React.FC = () => {
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
                </FormPadding>
                <FormPadding>
                  <InputStyling>
                    <input type="password" placeholder="Password" />
                  </InputStyling>
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

export default AdminPortal;
