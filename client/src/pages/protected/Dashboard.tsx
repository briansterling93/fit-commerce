import React, { useContext, useState, useEffect } from "react";
import AuthNavbar from "../../components/AuthNavbar";
import Flair from "../../components/Flair";
import { MainSection, SecondarySection, BoxDiv } from "../../styling/Dashboard";
import { Redirect } from "react-router-dom";
import { StateContext, APP_ACTIONS } from "../../context/StateContext";

const Dashboard: React.FC = () => {
  const { state, dispatch } = useContext<any>(StateContext);
  const [route, setRoute] = useState<any>("");

  const { name } = state;
  useEffect(() => {
    dispatch({
      type: APP_ACTIONS.UPDATE_NAME,
      payload: "Default",
    });
  });

  const authorizeRoute = async () => {};
  return (
    <div>
      {route}
      <Flair />

      <MainSection>
        <AuthNavbar />
        <SecondarySection>
          <BoxDiv> Welcome, {state.name}</BoxDiv>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default Dashboard;
