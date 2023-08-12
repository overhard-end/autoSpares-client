import React from 'react';
import { StoreContext } from '../Context';

export const useMainAction = () => {
  const { dispatch } = React.useContext(StoreContext);
  function getProducts() {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((products) => dispatch({ type: 'set_products', payload: products }));
  }
  return { getProducts, dispatch };
};
