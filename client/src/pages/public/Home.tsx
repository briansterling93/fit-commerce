import React, { useState, useContext, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import FlairText from '../../components/FlairText';
import { Redirect } from 'react-router-dom';
import { StateContext, initialState, APP_ACTIONS } from '../../context/StateContext';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import axios from 'axios';
import {
  MainSection,
  SecondarySection,
  ItemArray,
  ItemBox,
  ItemTitle,
  ItemPrice,
  ItemDescription,
  ItemsBottom,
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

              <ItemDescription>{i.Description}</ItemDescription>

              <ItemsBottom>
                <ItemPrice>${i.price}</ItemPrice>
                <div>
                  <div>
                    <button
                      onClick={async () => {
                        try {
                          await dispatch({
                            type: APP_ACTIONS.UPDATE_DISPLAY,
                            payload: i.id,
                          });

                          setRoute(<Redirect to="item" />);
                        } catch (error) {
                          console.log(error);
                          setRoute(<Redirect to="/" />);
                        }
                      }}
                    >
                      View Item
                    </button>
                  </div>
                </div>
              </ItemsBottom>
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
      <MainSection>
        <FlairText />
        <Navbar />
        <SiteHeader />
        <SecondarySection>
          <h1>New Arrivals</h1>
          {route}
          <ItemArray>{itemList}</ItemArray>
        </SecondarySection>
      </MainSection>
      <SiteFooter />
    </div>
  );
};

export default Home;
