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
import { StateContext, initialState, APP_ACTIONS } from '../../context/StateContext';
import Swal from 'sweetalert2';
import Navbar from '../../components/Navbar';
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
      setRoute(<Redirect to="/" />);
    } else generateItem();
  }, []);

  //generate incoming "clicked item"
  const generateItem = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.get(`cart/item/${itemDisplay}`, config);

    setImg(res.data.path);
    setItem(res.data.item);
    setPrice(`$${res.data.price}`);
    setDescription(res.data.Description);
  };
  return (
    <div>
      {route}
      <FlairText />
      <Navbar />
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

                          const res = await axios.get(`cart/item/${itemDisplay}`);

                          let item = res.data.item;
                          let price = res.data.price;
                          let path = res.data.path;
                          let quantity = UIquantity;
                          let description = res.data.Description;

                          let newItem = { item, price, path, quantity, description };

                          //add item to session storage

                          sessionStorage.setItem('newItem', `${JSON.stringify(newItem)}`);

                          await Swal.fire({
                            icon: 'info',
                            timer: 1100,
                            title: 'Please sign in to access your cart',
                            width: 400,
                          });

                          await setRoute(<Redirect to="signin" />);
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
