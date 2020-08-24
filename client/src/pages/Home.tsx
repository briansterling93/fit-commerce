import React, { useState, useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Flair from "../components/Flair";
import {
  StateContext,
  initialState,
  APP_ACTIONS,
} from "../context/StateContext";
import axios from "axios";
import {
  MainSection,
  SecondarySection,
  ItemArray,
  ItemBox,
  ItemText,
} from "../styling/Home";

const Home: React.FC = () => {
  useEffect(() => {
    populateItems();
  }, []);
  const { state, dispatch } = useContext<any>(StateContext);
  const [itemList, updateItems] = useState<[]>();

  const populateItems = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.get("/admin");

      const res2 = res.data.findAll.map((e: any) => (
        <ul>
          <li key={e.id}>
            <ItemBox>
              <div>
                <img src={e.path} />
              </div>

              <div>{e.item}</div>
              <ItemText>
                <div>{e.price}</div>
                <div>
                  <div>
                    <button>Add to Cart</button>
                  </div>
                </div>
              </ItemText>
            </ItemBox>
          </li>
        </ul>
      ));

      updateItems(res2);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Flair />
      <MainSection>
        <Navbar />
        <SecondarySection>
          <h1>New Arrivals</h1>
          <ItemArray>{itemList}</ItemArray>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default Home;
