import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './pages/public/Home';
import Shop from './pages/public/Shop';
import ProtectedShop from './pages/protected/ProtectedShop';
import ProtectedCart from './pages/protected/ProtectedCart';
import Orders from './pages/protected/Orders';
import Cart from './pages/public/Cart';
import SignIn from './pages/public/SignIn';
import SignUp from './pages/public/SignUp';
import Admin from './pages/protected/Admin';
import Dashboard from './pages/protected/Dashboard';
import { StateContext, initialState, reducer } from './context/StateContext';
import ItemView from './pages/public/ItemView';
import ProtectedItemView from './pages/protected/ProtectedItemView';

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
 

    ::-webkit-scrollbar{
      width: 0px;  /* Remove scrollbar space */
      background: transparent;  /* Optional: just make scrollbar invisible */
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
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/item" component={ItemView} />
          <Route exact path="/user/item" component={ProtectedItemView} />
          <Route exact path="/user/dashboard" component={Dashboard} />
          <Route exact path="/user/shop" component={ProtectedShop} />
          <Route exact path="/user/cart" component={ProtectedCart} />
          <Route exact path="/user/orders" component={Orders} />
        </Switch>
      </Router>
    </StateContext.Provider>
  );
}

export default App;
