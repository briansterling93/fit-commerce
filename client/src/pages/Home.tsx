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
  const [addedItem, updateAddedItem] = useState<any>();

  const populateItems: any = async () => {
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
                      onClick={async (e) => {
                        let item = i.item;
                        let price = i.price;
                        let path = i.path;

                        let newItem = { item, price, path };

                        const config = {
                          headers: {
                            "Content-Type": "application/json",
                          },
                        };

                        const body = JSON.stringify(newItem);

                        const res = await axios.post("/cart", body, config);

                        console.log(res);
                      }}
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

  //test function to input items into

  return (
    <div>
      <Flair />
      <MainSection>
        <Navbar />
        {addedItem}
        <SecondarySection>
          <h1>New Arrivals</h1>
          <ItemArray>{itemList}</ItemArray>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default Home;
