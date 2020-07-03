import React from "react";
import { MainSection, TextDiv } from "../styling/AdminFlair";

const Flair: React.FC = () => {
  return (
    <MainSection>
      <TextDiv>
        <i className="fa fa-lock" aria-hidden="true"></i> Admin Portal
      </TextDiv>
    </MainSection>
  );
};

export default Flair;
