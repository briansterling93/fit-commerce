import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AuthNavbar from '../../components/AuthNavbar';
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
  ItemDescription,
  ItemPrice,
} from '../../styling/Shop';
import { StateContext, initialState, APP_ACTIONS } from '../../context/StateContext';
const ProtectedShop: React.FC = () => {
  useEffect(() => {
    state.token || 'token' in sessionStorage ? populateItems() : setRoute(<Redirect to="/signin" />);
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

                          setRoute(<Redirect to="/user/item" />);
                        } catch (error) {
                          console.log(error);
                          setRoute(<Redirect to="/user/dashboard" />);
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

  function filterMethod(e: any) {
    let value = e.target.value;

    if (value == 1) {
      filter2();
    }

    if (value == 2) {
      filter3();
    }

    if (value == 3) {
      filter4();
    }

    if (value == 0) {
      populateItems();
    }
  }
  return (
    <div>
      <FlairText />
      <AuthNavbar />
      <MainSection>
        <SecondarySection>
          <BoxDiv>
            <FilterBox>
              <FilterPrice>
                <h1>Filter by Price</h1>
                <select onChange={filterMethod}>
                  <option value="0">Any</option>
                  <option value="1">Below $51</option>
                  <option value="2">$51 - 300</option>
                  <option value="3">$301 - 500</option>
                </select>
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

export default ProtectedShop;
