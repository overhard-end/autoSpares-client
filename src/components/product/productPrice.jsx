import { Col, Text } from '@nextui-org/react';
import React from 'react';

export const ProductPrice = ({ price }) => {
  return (
    <Col>
      <Text css={{ color: '$accents7', fontWeight: '$semibold', fontSize: '$sm' }}>Цена</Text>
      <Text>{price + ' руб'}</Text>
    </Col>
  );
};
