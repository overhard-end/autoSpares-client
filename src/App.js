import React from 'react';

import { Catalog } from './pages/catalog';
import { NextUIProvider } from '@nextui-org/react';
import { useMainState } from './hooks/useMainState';
import { darkTheme, lightTheme } from './theme';
import { Header } from './components/Header';
import { MobileNav } from './components/MobileNav';
import { ProductModal } from './components/productModal';
import { Filters } from './components/Filters';
import { Cart } from './components/Cart';
import { Favorite } from './components/Favorite';

export const App = () => {
  const { darkMode } = useMainState();

  return (
    <NextUIProvider theme={darkMode ? darkTheme : lightTheme}>
      <Header />
      <MobileNav />
      <ProductModal />
      <Filters />
      <Cart />
      <Favorite />
      <Catalog />;
    </NextUIProvider>
  );
};
