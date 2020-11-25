import React, { useEffect, useState, useContext } from 'react';
import {
  MainSection,
  SecondarySection,
  BoxDiv,
  ItemBox1,
  ItemBox2,
  BoxSpacer,
  BoxSpacer2,
  Title,
  Price,
  AddBtn,
  Description,
  Quantity,
  ErrorMsg,
  FlexDiv,
} from '../../styling/ItemView';
import FlairText from '../../components/FlairText';
import { Redirect } from 'react-router-dom';
import { StateContext } from '../../context/StateContext';
import AuthNavbar from '../../components/AuthNavbar';
import axios from 'axios';

const ItemView: React.FC = () => {
  const { state, dispatch } = useContext<any>(StateContext);
  const [path, setImg] = useState<string>('');
  const [item, setItem] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [UIquantity, setQuantity] = useState<number>(1);
  const [route, setRoute] = useState<any>('');
  const [spinner, setSpinner] = useState<any>('');
  const [error, setError] = useState<string>('');

  const { itemDisplay } = state;

  useEffect(() => {
    if (!itemDisplay) {
      setRoute(<Redirect to="/user/dashboard" />);
    } else generateItem();
  }, []);

  //generate incoming "clicked item"
  const generateItem = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.get(`/cart/item/${itemDisplay}`, config);

      setImg(res.data.path);
      setItem(res.data.item);
      setPrice(`$${res.data.price}`);
      setDescription(res.data.Description);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {route}
      <FlairText />
      <AuthNavbar />
      <MainSection>
        <SecondarySection>
          <BoxDiv>
            <BoxSpacer>
              <ItemBox1>
                <img src={path} />
                {spinner}
              </ItemBox1>
            </BoxSpacer>
            <BoxSpacer2>
              <ItemBox2>
                <Title>{item}</Title>
                <Description>{description}</Description>
                <Quantity>
                  Quantity
                  <input
                    onChange={(e: any) => setQuantity(e.target.value)}
                    type="number"
                    min="1"
                    max="5"
                    step="1"
                    value={UIquantity}
                  ></input>
                  <ErrorMsg> {error}</ErrorMsg>
                </Quantity>
                <FlexDiv>
                  <Price>{price}</Price>

                  <AddBtn>
                    <button
                      id="btn-test"
                      onClick={async (e) => {
                        try {
                          const config = {
                            headers: {
                              'Content-Type': 'application/json',
                            },
                          };

                          if (UIquantity > 5) {
                            return setError('5 is the maximum');
                          } else setError('');

                          const res = await axios.get(`/cart/item/${itemDisplay}`);

                          let item = res.data.item;
                          let price = res.data.price;
                          let path = res.data.path;
                          let quantity = res.data.quantity;
                          let description = res.data.Description;
                          let customer_id = localStorage.getItem('userID');

                          //GET request to check if item is already in cart
                          let cartQuery = await axios.get(`/user_carts/${localStorage.getItem('userID')}`);

                          let cartQuery2 = await cartQuery.data.queried_user.map((g: any) => g.item);

                          let cartQuery3 = await cartQuery2.filter((s: any) => s === item);

                          if (cartQuery3.length >= 1) {
                            let item_name = await item;

                            let item_increment = { item_name };

                            const config = {
                              headers: {
                                'Content-Type': 'application/json',
                              },
                            };

                            const body = JSON.stringify(item_increment);

                            const res = await axios.post(
                              `/user_carts/${localStorage.getItem('userID')}/increment`,
                              body,
                              config
                            );
                          } else quantity = (await cartQuery3.length) + parseInt(`${UIquantity}`);

                          let newItem = { item, price, path, quantity, customer_id };

                          const body = JSON.stringify(newItem);

                          const res3 = await axios.post('/user_carts', body, config);

                          res3 ? setRoute(<Redirect to="/user/cart" />) : console.log(res);
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
                      Add To Cart
                    </button>
                  </AddBtn>
                </FlexDiv>
              </ItemBox2>
            </BoxSpacer2>
          </BoxDiv>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default ItemView;
