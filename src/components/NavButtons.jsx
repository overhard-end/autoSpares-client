import { Badge, Button } from '@nextui-org/react';
import React from 'react';
import { useMainState } from '../hooks/useMainState';
import { useMainAction } from '../hooks/useMainAction';

export const NavButtons = ({ location }) => {
  const { dispatch } = useMainAction();
  const { darkMode, itemsInCart, itemsInFavorite, filters } = useMainState();

  let buttons = [
    { type: 'home', icon: 'home', action: { type: 'favorite_toggle' } },
    { type: 'mode', icon: darkMode ? 'sun' : 'moon', action: { type: 'change_theme' } },
    { type: 'cart', icon: 'cart', action: { type: 'cart_toggle' }, badgeCount: itemsInCart.length },
    {
      type: 'favorite',
      icon: 'heart',
      action: { type: 'favorite_toggle' },
      badgeCount: itemsInFavorite.length,
    },
    {
      type: 'filter',
      icon: 'filter-alt',
      action: { type: 'filter_toggle' },
      badgeCount: filters.length,
    },
  ];
  if (location === 'header') {
    buttons = buttons.filter((button) => button.type !== 'filter' && 'home');
  }
  const buttonComponents = (button) => (
    <Button
      key={button.type}
      onPress={() => dispatch(button.action)}
      light
      auto
      rounded
      icon={
        <box-icon size="md" name={button.icon} color={darkMode ? '#ffffff' : '#000000'}></box-icon>
      }
    />
  );
  return buttons.map((button) =>
    button.badgeCount ? (
      <Badge color="error" disableOutline content={button.badgeCount} size="md">
        {buttonComponents(button)}
      </Badge>
    ) : (
      buttonComponents(button)
    ),
  );
};
