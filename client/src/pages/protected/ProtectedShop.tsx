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
    state.token || 'token' in localStorage ? populateItems() : setRoute(<Redirect to="/signin" />);
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
      <AuthNavbar />
      <MainSection>
        <SecondarySection>
          <BoxDiv>
            <FilterBox>
              <FilterPrice>
                <h1>Filter by Price</h1>
                <ul>
                  <li>
                    <input type="checkbox" /> Any
                  </li>
                  <li>
                    <input type="checkbox" /> Below $50
                  </li>
                  <li>
                    <input type="checkbox" /> $51 - 300
                  </li>
                  <li>
                    <input type="checkbox" /> $301 - 500
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

export default ProtectedShop;
