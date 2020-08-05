import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { StateContext, initialState, reducer } from "./context/StateContext";

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
  const [state, dispatch] = useReducer<any>(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <Router>
        <Universal />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </StateContext.Provider>
  );
}

export default App;
