import React, { useState, useContext } from 'react';
import { MainSection, AdminBox, AddItem, InputSpacer, PreviewItem, ErrorMsg } from '../../styling/Admin';
import { StateContext, initialState, APP_ACTIONS } from '../../context/StateContext';
import AdminFlair from '../../components/AdminFlair';
import axios from 'axios';

const Admin: React.FC = () => {
  const [itemError, setItemError] = useState<string>('');
  const [priceError, setPriceError] = useState<string>('');
  const [pathError, setPathError] = useState<string>('');
  const { state, dispatch } = useContext<any>(StateContext);
  const { item, price, path } = state;

  const handlePreview: any = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!state.item) {
        setItemError('Item name is required');
      } else {
        setItemError('');
      }
      if (!state.price) {
        setPriceError('Please enter a price for the item');
      } else {
        setPriceError('');
      }
      if (!state.path) {
        setPathError('Valid src/path url is required for the image');
      } else {
        setPathError('');
      }
      if (item && price && path) {
        let newItem = { item, price, path };

        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const body = JSON.stringify(newItem);

        const res = await axios.post('/admin', body, config);

        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <AdminFlair />
      <MainSection>
        <AdminBox>
          <h1>Add a new item below</h1>
          <AddItem>
            <InputSpacer>
              <input
                type="text"
                placeholder="Enter the name of the item"
                onChange={(e) =>
                  dispatch({
                    type: APP_ACTIONS.UPDATE_ITEM,
                    payload: e.target.value,
                  })
                }
              />
              <ErrorMsg>{itemError}</ErrorMsg>
            </InputSpacer>
            <InputSpacer>
              <input
                type="text"
                placeholder="Price of item (0.00)"
                onChange={(e) =>
                  dispatch({
                    type: APP_ACTIONS.UPDATE_PRICE,
                    payload: e.target.value,
                  })
                }
              />
              <ErrorMsg>{priceError}</ErrorMsg>
            </InputSpacer>
            <InputSpacer>
              <input
                type="text"
                placeholder="Enter the image src url"
                onChange={(e) =>
                  dispatch({
                    type: APP_ACTIONS.UPDATE_PATH,
                    payload: e.target.value,
                  })
                }
              />
              <ErrorMsg>{pathError}</ErrorMsg>
            </InputSpacer>
            <InputSpacer>
              <button onClick={handlePreview}>Add Item</button>
            </InputSpacer>
          </AddItem>
          <h1>Preview Item Below</h1>
          <PreviewItem></PreviewItem>
        </AdminBox>
      </MainSection>
    </div>
  );
};

export default Admin;
