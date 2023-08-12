import { Card, Row, Text } from '@nextui-org/react';
import React from 'react';
import { useMainAction } from '../hooks/useMainAction';
import { ProductPrice } from './product/productPrice';
import { ProductButtons } from './product/productButtons';

export const ProductItem = ({ item }) => {
  const { dispatch } = useMainAction();
  const textCut = (text) =>
    text.split('').length > 30 ? text.split('').slice(0, 25).join('') + '...' : text;

  return (
    <>
      <Card css={{ width: '200px' }}>
        <Row css={{ position: 'absolute' }} justify="flex-end">
          <ProductButtons location={'item'} item={item} buttonToShow={['favorite_add']} />
        </Row>

        <Card.Image
          onClick={() => dispatch({ type: 'product_open', payload: item })}
          objectFit="cover"
          width="100%"
          height="100px"
          src={item.image}
        />

        <Card.Body>
          <Text h5>{textCut(item.title)}</Text>
        </Card.Body>

        <Card.Footer>
          <ProductPrice price={item.price} />
          <ProductButtons location={'item'} item={item} buttonToShow={['add_cart_item']} />
        </Card.Footer>
      </Card>
    </>
  );
};
