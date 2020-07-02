import React from "react";
import {
  MainSection,
  SecondarySection,
  PortalBox,
} from "../styling/AdminPortal";

const AdminPortal: React.FC = () => {
  return (
    <MainSection>
      <SecondarySection>
        <PortalBox>Admin Portal</PortalBox>
      </SecondarySection>
    </MainSection>
  );
};

export default AdminPortal;
