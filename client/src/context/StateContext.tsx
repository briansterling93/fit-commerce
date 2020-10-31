import { createContext } from 'react';
import Cart from '../pages/public/Cart';

export interface IState {
  email_address: string;
  password: string;
  item: string;
  price: string;
  path: string;
  Description: string;
  cart: string[];
  token: string;
  itemDisplay: number;
}

export const initialState = {
  name: '',
  email_address: '',
  password: '',
  item: '',
  price: '',
  path: '',
  cart: [],
  token: '',
  itemDisplay: '',
};

export enum APP_ACTIONS {
  UPDATE_NAME = 'UPDATE_NAME',
  UPDATE_EMAIL = 'UPDATE_EMAIL',
  UPDATE_PASSWORD = 'UPDATE_PASSWORD',
  UPDATE_ITEM = 'UPDATE_ITEM',
  UPDATE_PRICE = 'UPDATE_PRICE',
  UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION',
  UPDATE_PATH = 'UPDATE_PATH',
  UPDATE_CART = 'UPDATE_CART',
  UPDATE_TOKEN = 'UPDATE_TOKEN',
  UPDATE_DISPLAY = 'UPDATE_DISPLAY',
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
  [APP_ACTIONS.UPDATE_DESCRIPTION]: (state: IState, actions: any) => {
    return { ...state, Description: actions.payload };
  },
  [APP_ACTIONS.UPDATE_CART]: (state: IState, actions: any) => {
    return { ...state, cart: [...state.cart, actions.payload] };
  },
  [APP_ACTIONS.UPDATE_TOKEN]: (state: IState, actions: any) => {
    return { ...state, token: actions.payload };
  },

  [APP_ACTIONS.UPDATE_DISPLAY]: (state: IState, actions: any) => {
    return { ...state, itemDisplay: actions.payload };
  },
};

export const reducer = (state: IState, action: any) => {
  return appActions[action.type](state, action);
};

export const StateContext: any = createContext(initialState);
