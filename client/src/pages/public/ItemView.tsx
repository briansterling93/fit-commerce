import React, { useEffect, useState } from 'react';
import { MainSection, SecondarySection, BoxDiv, ItemBox1, ItemBox2, BoxSpacer } from '../../styling/ItemView';
import FlairText from '../../components/FlairText';
import Navbar from '../../components/Navbar';
import axios from 'axios';

const ItemView: React.FC = () => {
  const [img, setImg] = useState<string>('');
  const [item, setItem] = useState<string>('');
  useEffect(() => {
    generateItem();
  }, []);

  const generateItem = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.get('cart/item/10', config);

    console.log(res.data.path);

    setImg(res.data.path);
  };
  return (
    <div>
      <FlairText />
      <MainSection>
        <Navbar />
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
