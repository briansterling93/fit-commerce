import { createContext } from "react";

export interface IState {
  email_address: string;
  password: string;
  item: string;
  price: string;
  stock: string;
}

export const initialState = {
  email_address: "",
  password: "",
  item: "",
  price: "",
  stock: "",
};

export enum APP_ACTIONS {
  UPDATE_EMAIL = "UPDATE_EMAIL",
}

type AppAction = { [key: string]: (state: IState, action: any) => IState };

export const appActions: AppAction = {
  [APP_ACTIONS.UPDATE_EMAIL]: (state: IState, actions: any) => {
    return { ...state, email: actions.payload };
  },
};

export const reducer = (state: IState, action: any) => {
  return appActions[action.type](state, action);
};

export const StateContext: any = createContext(initialState);
