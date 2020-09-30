import React, { useContext, useState, useEffect } from "react";
import AuthNavbar from "../../components/AuthNavbar";
import Flair from "../../components/Flair";
import axios from "axios";
import {
  MainSection,
  SecondarySection,
  BoxDiv,
  RecentsDiv,
  InfoDiv,
} from "../../styling/Dashboard";
import { Redirect } from "react-router-dom";
import { StateContext, APP_ACTIONS } from "../../context/StateContext";

type FormElem = React.FormEvent<HTMLFormElement>;

const Dashboard: React.FC = () => {
  const { state, dispatch } = useContext<any>(StateContext);
  const [route, setRoute] = useState<any>("");
  const [userToken, setToken] = useState<string>("");
  const [userName, setName] = useState<string>("");

  const { name, token } = state;
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": `${state.token}`,
        },
      };

      const res = await axios.get("/user/authorized", config);

      await setName(res.data.name);
    } catch (error) {}
  };

  const authorizeRoute = async () => {};
  return (
    <div>
      {route}
      <Flair />
      <MainSection>
        <AuthNavbar />
        <SecondarySection>
          <BoxDiv>
            {/* Welcome, {userName} */}
            <RecentsDiv></RecentsDiv>
            <InfoDiv></InfoDiv>
          </BoxDiv>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default Dashboard;
