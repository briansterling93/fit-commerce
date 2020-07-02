import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import AdminPortal from "./pages/AdminPortal";
import AdminSignUp from "./pages/AdminSignUp";

const Universal = createGlobalStyle`
  body {
    padding: 0;
    box-sizing: none;
    margin: 0;
    background-color: white;
    font-family: "Segoe UI";
    input {
      font-family: "Segoe UI"; 
    }
  }
`;

function App() {
  return (
    <Router>
      <Universal />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/admin" component={AdminPortal} />
        <Route exact path="/signup" component={AdminSignUp} />
      </Switch>
    </Router>
  );
}

export default App;
