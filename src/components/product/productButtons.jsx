import React from 'react';
import { Button } from '@nextui-org/react';
import { useMainAction } from '../../hooks/useMainAction';
import { useMainState } from '../../hooks/useMainState';

export const ProductButtons = ({ item, buttonToShow, location }) => {
  const { dispatch } = useMainAction();
  const state = useMainState();

  const isInCart = () => state.itemsInCart.some((cartItem) => cartItem.id === item.id);
  const isInFavorite = () =>
    state.itemsInFavorite.some((favoriteItem) => favoriteItem.id === item.id);
  let productItemButtons = [
    {
      text: location === 'modal' ? (isInFavorite() ? 'В избраных' : 'Добавить') : '',
      active: isInFavorite(),
      type: isInFavorite() ? 'solid' : 'regular',
      color: isInFavorite() ? '#fd0000' : state.darkMode ? '#ffffff' : '#000000',
      icon: 'heart',
      action: 'favorite_add',
    },
    {
      text: location === 'modal' ? (isInCart() ? 'В корзине' : 'Добавить') : '',
      active: isInCart(),
      icon: isInCart() ? 'check' : 'cart-add',
      color: isInCart() ? '#29fd00' : state.darkMode ? '#ffffff' : '#000000',
      action: 'add_cart_item',
      type: 'regular',
    },
    {
      text: '35 отзывов',
      type: 'regular',
      action: 'toggle_item_reviews',
      icon: 'star',
      color: '#ffe600',
    },
    {
      text: '10 вопросов',
      type: 'regular',
      action: 'toggle_item_questions',
      icon: 'conversation',
      color: '#ffffff',
    },
  ];

  if (buttonToShow && buttonToShow.length > 0) {
    productItemButtons = productItemButtons.filter((btn) =>
      buttonToShow.some((item) => item === btn.action),
    );
  }
  return productItemButtons.map((button) => (
    <Button
      disabled={button.active && button.active}
      key={button.action}
      onPress={() => dispatch({ type: button.action, payload: item })}
      light
      auto
      rounded
      icon={
        <box-icon
          type={button.type && button.type}
          name={button.icon}
          color={button.color}></box-icon>
      }>
      {button.text && button.text}
    </Button>
  ));
};
