import { Navbar } from '@nextui-org/react';
import React from 'react';
import { useWindowSize } from '@uidotdev/usehooks';
import { NavButtons } from './NavButtons';

export const MobileNav = ({ handleOpenFilter }) => {
  const size = useWindowSize();
  return (
    size.width < 650 && (
      <Navbar
        isCompact
        css={{
          zIndex: 1000000,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          position: 'fixed',
          bottom: '-1px',
        }}>
        <NavButtons location={'mobile'} />
      </Navbar>
    )
  );
};
