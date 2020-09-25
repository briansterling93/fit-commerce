import React, { useContext, useState, useEffect } from "react";
import AuthNavbar from "../../components/AuthNavbar";
import Flair from "../../components/Flair";
import { MainSection, SecondarySection, BoxDiv } from "../../styling/Dashboard";
import { Redirect } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [route, setRoute] = useState<any>("");
  useEffect(() => {});

  const authorizeRoute = async () => {};
  return (
    <div>
      {route}
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
