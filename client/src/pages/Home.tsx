import React, { useState, useContext, useEffect } from "react";
import { MainSection } from "../styling/Home";
import Navbar from "../components/Navbar";
import Flair from "../components/Flair";
import {
  StateContext,
  initialState,
  APP_ACTIONS,
} from "../context/StateContext";
import axios from "axios";

const Home: React.FC = () => {
  useEffect(() => {
    populateItems();
  }, []);
  const { state, dispatch } = useContext<any>(StateContext);
  const [items, updateItems] = useState<[]>();

  const populateItems = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.get("/admin");

      const res2 = res.data.findAll;

      console.log(res2);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Flair />
      <MainSection>
        <Navbar />
        Hello Home
      </MainSection>
    </div>
  );
};

export default Home;
