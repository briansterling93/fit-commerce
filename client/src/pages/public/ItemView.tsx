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
  FlexDiv,
} from '../../styling/ItemView';
import FlairText from '../../components/FlairText';
import { Redirect } from 'react-router-dom';
import { StateContext, initialState, APP_ACTIONS } from '../../context/StateContext';
import Navbar from '../../components/Navbar';
import axios from 'axios';

const ItemView: React.FC = () => {
  const { state, dispatch } = useContext<any>(StateContext);
  const [img, setImg] = useState<string>('');
  const [item, setItem] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('');

  const [route, setRoute] = useState<any>('');

  const { itemDisplay } = state;
  useEffect(() => {
    // if (!itemDisplay) {
    //   setRoute(<Redirect to="/" />);
    // } else generateItem();
    generateItem();
  }, []);

  //generate incoming "clicked item"
  const generateItem = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // const res = await axios.get(`cart/item/${itemDisplay}`, config);

    const res = await axios.get('cart/item/5', config);

    console.log(res.data);

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
                <img src={img} />
              </ItemBox1>
            </BoxSpacer>
            <BoxSpacer2>
              <ItemBox2>
                <Title>{item}</Title>
                <Description>{description}</Description>
                <Quantity>
                  Quantity:{' '}
                  <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </Quantity>
                <FlexDiv>
                  <Price>{price}</Price>

                  <AddBtn>
                    <button>Add To Cart</button>
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
