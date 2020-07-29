import { createContext } from "react";

export interface IState {
  email_address: string;
  password: string;
  item: string;
  price: string;
  stock: string;
}

export const initialState = {
  email_address: "fdfgfgf",
  password: "",
  item: "",
  price: "",
  stock: "",
};

export enum APP_ACTIONS {
  UPDATE_EMAIL = "UPDATE_EMAIL",
  UPDATE_PASSWORD = "UPDATE_PASSWORD",
  UPDATE_ITEM = "UPDATE_ITEM",
  UPDATE_PRICE = "UPDATE_PRICE",
  UPDATE_STOCK = "UPDATE_STOCK",
}

type AppAction = { [key: string]: (state: IState, action: any) => IState };

export const appActions: AppAction = {
  [APP_ACTIONS.UPDATE_EMAIL]: (state: IState, actions: any) => {
    return { ...state, email_address: actions.payload };
  },
  // UPDATE_PASSWORD: (state: IState, actions: any) => {
  //   return { ...state, password: actions.payload };
  // },
  // UPDATE_ITEM: (state: IState, actions: any) => {
  //   return { ...state, item: actions.payload };
  // },
  // UPDATE_PRICE: (state: IState, actions: any) => {
  //   return { ...state, price: actions.payload };
  // },
  // UPDATE_STOCK: (state: IState, actions: any) => {
  //   return { ...state, stock: actions.payload };
  // },
};

export const reducer = (state: IState, action: any) => {
  return appActions[action.type](state, action);
};

export const StateContext: any = createContext(initialState);
