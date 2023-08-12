import { Button, Card, Col, Text } from '@nextui-org/react';
import React from 'react';
import { useMainAction } from '../hooks/useMainAction';

export const CartItem = ({ item }) => {
  const { dispatch } = useMainAction();
  const textCut = (text) =>
    text.split('').length > 30 ? text.split('').slice(0, 25).join('') + '...' : text;
  return (
    <Card
      css={{ flexDirection: 'row' }}
      onClick={() => dispatch({ type: 'product_open', payload: item })}
      isPressable>
      <Card.Image objectFit="cover" width="50%" height="100px" src={item.image} />
      <Card.Body>
        <Text h5>{textCut(item.title)}</Text>
      </Card.Body>
      <Card.Footer>
        <Col>
          <Text css={{ color: '$accents7', fontWeight: '$semibold', fontSize: '$sm' }}>Цена</Text>
          <Text>{item.price + ' руб'}</Text>
        </Col>
        <Button
          onPress={() => dispatch({ type: 'remove_cart_item', payload: item.id })}
          light
          auto
          rounded
          icon={<box-icon name="x" color="#ffffff"></box-icon>}
        />
      </Card.Footer>
    </Card>
  );
};
