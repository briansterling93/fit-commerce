import React, { useState, useContext, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import FlairText from '../../components/FlairText';
import { Redirect } from 'react-router-dom';
import { StateContext, initialState, APP_ACTIONS } from '../../context/StateContext';
import SiteHeader from '../../components/SiteHeader';
import axios from 'axios';
import {
  MainSection,
  SecondarySection,
  ItemArray,
  ItemBox,
  ItemText,
  ItemTitle,
  ItemPrice,
  ItemDescription,
} from '../../styling/Home';

const Home: React.FC = () => {
  useEffect(() => {
    populateItems();
  }, []);
  const { state, dispatch } = useContext<any>(StateContext);
  const [itemList, updateItems] = useState<[]>();
  const [route, setRoute] = useState<any>();

  const populateItems: any = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.get('/admin');

      const res2 = res.data.findAll.map((i: any) => (
        <ul>
          <li key={i.id}>
            <ItemBox>
              <div>
                <img src={i.path} />
              </div>

              <ItemTitle>{i.item}</ItemTitle>
              <ItemText>
                <ItemDescription>{i.Description}</ItemDescription>
                <ItemPrice>${i.price}</ItemPrice>
                <div>
                  <div>
                    <button
                      onClick={async (e) => {
                        let item = i.item;
                        let price = i.price;
                        let path = i.path;
                        let quantity = i.quantity;
                        let description = i.Description;

                        //GET request to check if item is already in cart
                        let cartQuery = await axios.get('/cart');

                        let cartQuery2 = await cartQuery.data.findAll.map((g: any) => g.item);

                        let cartQuery3 = await cartQuery2.filter((s: any) => s === i.item);

                        if (cartQuery3.length >= 1) {
                          let item_name = await i.item;

                          let item_increment = { item_name };

                          const config = {
                            headers: {
                              'Content-Type': 'application/json',
                            },
                          };

                          const body = JSON.stringify(item_increment);

                          const res = await axios.post('/cart/increment', body, config);
                        } else quantity = (await cartQuery3.length) + 1;

                        let newItem = { item, price, path, quantity };

                        const config = {
                          headers: {
                            'Content-Type': 'application/json',
                          },
                        };

                        const body = JSON.stringify(newItem);

                        const res = await axios.post('/cart', body, config);

                        res ? setRoute(<Redirect to="cart" />) : console.log('');
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

      const res3 = await res2.splice(0, 8);

      updateItems(res3);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <FlairText />
      <MainSection>
        <Navbar />
        <SiteHeader />
        <SecondarySection>
          <h1>New Arrivals</h1>
          {route}
          <ItemArray>{itemList}</ItemArray>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default Home;
