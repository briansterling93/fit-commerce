import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../../components/Navbar';
import FlairText from '../../components/FlairText';
import axios from 'axios';
import {
  MainSection,
  SecondarySection,
  BoxDiv,
  FilterBox,
  FilterPrice,
  ProductSectionDiv,
  ItemArray,
  ItemBox,
  ItemsBottom,
  ItemTitle,
  ItemPrice,
  ItemDescription,
} from '../../styling/Shop';
import { NavLink, Redirect } from 'react-router-dom';
import { StateContext, initialState, APP_ACTIONS } from '../../context/StateContext';
const Shop: React.FC = () => {
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

      const y = res2.reverse();

      updateItems(y);
    } catch (error) {
      console.log(error);
    }
  };

  //Populate items below $50
  const filter2: any = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.get('/cart/filter2');

      console.log(res);

      const res2 = res.data.map((i: any) => (
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

      const y = res2.reverse();

      updateItems(y);
    } catch (error) {
      console.log(error);
    }
  };

  //Populate items between 51 & $300
  const filter3: any = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.get('/cart/filter3');

      console.log(res);

      const res2 = res.data.map((i: any) => (
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

      const y = res2.reverse();

      updateItems(y);
    } catch (error) {
      console.log(error);
    }
  };

  //Populate items between 301 & $500
  const filter4: any = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.get('/cart/filter4');

      console.log(res);

      const res2 = res.data.map((i: any) => (
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

      const y = res2.reverse();

      updateItems(y);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <FlairText />
      <Navbar />
      <MainSection>
        <SecondarySection>
          <BoxDiv>
            <FilterBox>
              <FilterPrice>
                <h1>Filter by Price</h1>
                <ul>
                  <li>
                    <input
                      onClick={() => {
                        populateItems();
                      }}
                      type="checkbox"
                    />{' '}
                    Any
                  </li>
                  <li>
                    <input
                      onClick={() => {
                        filter2();
                      }}
                      type="checkbox"
                    />{' '}
                    Below $50
                  </li>
                  <li>
                    <input
                      onClick={() => {
                        filter3();
                      }}
                      type="checkbox"
                    />{' '}
                    $51 - 300
                  </li>
                  <li>
                    <input
                      onClick={() => {
                        filter4();
                      }}
                      type="checkbox"
                    />{' '}
                    $301 - 500
                  </li>
                </ul>
              </FilterPrice>
            </FilterBox>
            <ProductSectionDiv>
              {route}
              <ItemArray>{itemList}</ItemArray>
            </ProductSectionDiv>
          </BoxDiv>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default Shop;
