import React from 'react';
import { StoreContext } from '../Context';

export const useMainState = () => {
  const { state } = React.useContext(StoreContext);
  return state;
};
