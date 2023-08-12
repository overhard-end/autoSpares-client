import React, { useReducer } from 'react';
import { init, reducer } from './state';

export const StoreContext = React.createContext();
export const Context = (props) => {
  const [state, dispatch] = useReducer(reducer, init);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>{props.children}</StoreContext.Provider>
  );
};
