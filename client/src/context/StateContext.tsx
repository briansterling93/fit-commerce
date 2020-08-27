import { createContext } from "react";
import Cart from "../pages/Cart";

export interface IState {
  email_address: string;
  password: string;
  item: string;
  price: string;
  stock: string;
  cart: string[];
  purchase_history: string[];
}

export const initialState = {
  name: "",
  email_address: "",
  password: "",
  item: "",
  price: "",
  path: "",
  cart: [],
};

export enum APP_ACTIONS {
  UPDATE_NAME = "UPDATE_NAME",
  UPDATE_EMAIL = "UPDATE_EMAIL",
  UPDATE_PASSWORD = "UPDATE_PASSWORD",
  UPDATE_ITEM = "UPDATE_ITEM",
  UPDATE_PRICE = "UPDATE_PRICE",
  UPDATE_PATH = "UPDATE_PATH",
  UPDATE_CART = "UPDATE_CART",
}

type AppAction = { [key: string]: (state: IState, action: any) => IState };

export const appActions: AppAction = {
  [APP_ACTIONS.UPDATE_NAME]: (state: IState, actions: any) => {
    return { ...state, name: actions.payload };
  },
  [APP_ACTIONS.UPDATE_EMAIL]: (state: IState, actions: any) => {
    return { ...state, email_address: actions.payload };
  },
  [APP_ACTIONS.UPDATE_PASSWORD]: (state: IState, actions: any) => {
    return { ...state, password: actions.payload };
  },
  [APP_ACTIONS.UPDATE_ITEM]: (state: IState, actions: any) => {
    return { ...state, item: actions.payload };
  },
  [APP_ACTIONS.UPDATE_PRICE]: (state: IState, actions: any) => {
    return { ...state, price: actions.payload };
  },
  [APP_ACTIONS.UPDATE_PATH]: (state: IState, actions: any) => {
    return { ...state, path: actions.payload };
  },
  [APP_ACTIONS.UPDATE_CART]: (state: IState, actions: any) => {
    return { ...state, cart: [actions.payload] };
  },
  // [APP_ACTIONS.UPDATE_CART]: (state: IState, actions: any) => {
  //   return { ...state, cart: [...actions.payload, cart.push(actions.payload)] };
  // },
};

export const reducer = (state: IState, action: any) => {
  return appActions[action.type](state, action);
};

export const StateContext: any = createContext(initialState);
