import React from "react";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import AdminPortal from "./components/AdminPortal";
import AdminSignUp from "./components/AdminSignUp";

function App() {
  return (
    <div>
      <Home />
      <Shop />
      <Cart />
      <AdminPortal />
      <AdminSignUp />
    </div>
  );
}

export default App;
