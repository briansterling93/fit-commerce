import React from "react";
import { MainSection, AuthBoxBorder, AuthUI } from "../styling/SignIn";
import Flair from "../components/Flair";
import Navbar from "../components/Navbar";
const SignIn: React.FC = () => {
  return (
    <div>
      <Flair />
      <MainSection>
        <Navbar />
        <AuthBoxBorder>
          <AuthUI></AuthUI>
        </AuthBoxBorder>
      </MainSection>
    </div>
  );
};

export default SignIn;
