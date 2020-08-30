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
import Cart from "./Cart";

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

      const res2 = res.data.findAll.map((i: any) => (
        <ul>
          <li key={i.id}>
            <ItemBox>
              <div>
                <img src={i.path} />
              </div>

              <div>{i.item}</div>
              <ItemText>
                <div>${i.price}</div>
                <div>
                  <div>
                    <button
                      onClick={(e) =>
                        dispatch({
                          type: APP_ACTIONS.UPDATE_CART,
                          payload: [i.item, i.price],
                        })
                      }
                    >
                      Add to Cart
                    </button>
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
        {state.item}
        <SecondarySection>
          <h1>New Arrivals</h1>
          <ItemArray>{itemList}</ItemArray>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default Home;
