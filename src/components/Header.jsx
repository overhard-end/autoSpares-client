import { Col, Image, Navbar, Spacer, Text } from '@nextui-org/react';
import React from 'react';
import Logo from '../assets/piston.png';
import { Search } from './Search';
import { NavButtons } from './NavButtons';

export const Header = () => {
  return (
    <Navbar css={{ zIndex: 1000 }} maxWidth="xl" variant="sticky">
      <Navbar.Brand>
        <Col>
          <Spacer x={0.3} />
          <Image alt="logo" css={{ background: 'white' }} width={40} height={30} src={Logo} />

          <Text css={{ textTransform: 'uppercase' }} b>
            AutoSpares
          </Text>
        </Col>
      </Navbar.Brand>
      <Search />

      <Navbar.Content hideIn="xs">
        <NavButtons location={'header'} />
      </Navbar.Content>
    </Navbar>
  );
};
