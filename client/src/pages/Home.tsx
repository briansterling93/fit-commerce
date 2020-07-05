import React from "react";
import { MainSection } from "../styling/Home";
import Navbar from "../components/Navbar";
import Flair from "../components/Flair";

const Home: React.FC = () => {
  return (
    <div>
      <Flair />
      <MainSection>
        <Navbar />
        Hello Home
      </MainSection>
    </div>
  );
};

export default Home;
