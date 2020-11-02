import React, { useEffect, useState, useContext } from 'react';
import { MainSection, SecondarySection, BoxDiv, ItemBox1, ItemBox2, BoxSpacer } from '../../styling/ItemView';
import FlairText from '../../components/FlairText';
import { Redirect } from 'react-router-dom';
import { StateContext, initialState, APP_ACTIONS } from '../../context/StateContext';
import Navbar from '../../components/Navbar';
import axios from 'axios';

const ItemView: React.FC = () => {
  const { state, dispatch } = useContext<any>(StateContext);
  const [img, setImg] = useState<string>('');
  const [item, setItem] = useState<string>('');
  const [route, setRoute] = useState<any>('');

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

    console.log(res.data.path);

    setImg(res.data.path);
  };
  return (
    <div>
      {route}
      <FlairText />
      <Navbar />
      <MainSection>
        {itemDisplay}
        <SecondarySection>
          <BoxDiv>
            <BoxSpacer>
              <ItemBox1>
                <img src={img} />
              </ItemBox1>
            </BoxSpacer>
            <BoxSpacer>
              <ItemBox2></ItemBox2>
            </BoxSpacer>
          </BoxDiv>
        </SecondarySection>
      </MainSection>
    </div>
  );
};

export default ItemView;
