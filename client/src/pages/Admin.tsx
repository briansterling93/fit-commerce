import React, { useState } from "react";
import {
  MainSection,
  AdminBox,
  AddItem,
  InputSpacer,
  PreviewItem,
} from "../styling/Admin";
import AdminFlair from "../components/AdminFlair";

const Admin: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [img, setImg] = useState<string>("");

  return (
    <div>
      <AdminFlair />
      <MainSection>
        <AdminBox>
          <h1>Add a new item below</h1>
          <AddItem>
            <InputSpacer>
              <input type="text" placeholder="Enter the name of the item" />
            </InputSpacer>
            <InputSpacer>
              <input type="text" placeholder="Price of item (0.00)" />
            </InputSpacer>
            <InputSpacer>
              <input
                type="text"
                placeholder="Enter the image src link here"
                onChange={(e) => setImg(e.target.value)}
              />
            </InputSpacer>
            <InputSpacer>
              <button>Preview Item</button>
            </InputSpacer>
          </AddItem>
          <h1>Preview Item Below</h1>
          <PreviewItem>
            <div>
              <img src={img} />
            </div>
            <div>Item name:</div>
            <div>Item price:</div>
          </PreviewItem>
        </AdminBox>
      </MainSection>
    </div>
  );
};

export default Admin;
