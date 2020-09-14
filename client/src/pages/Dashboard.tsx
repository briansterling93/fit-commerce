import React, { useContext, useState } from "react";
import AuthNavbar from "../components/AuthNavbar";
import Flair from "../components/Flair";
import { MainSection, SecondarySection, BoxDiv } from "../styling/Dashboard";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Flair />
      <MainSection>
        <AuthNavbar />
        <SecondarySection>
          <BoxDiv></BoxDiv>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default Dashboard;
