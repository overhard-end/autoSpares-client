import { Button, Card, Modal, Row, Spacer, Text } from '@nextui-org/react';
import React from 'react';
import { useMainState } from '../hooks/useMainState';
import { useMainAction } from '../hooks/useMainAction';
import { ProductPrice } from './product/productPrice';
import { ProductButtons } from './product/productButtons';
import { ProductOptions } from './product/productOptions';
export const ProductModal = () => {
  const { isProductOpen, selectedProduct } = useMainState();
  const { dispatch } = useMainAction();
  return (
    <Modal
      width="100%"
      closeButton
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      open={isProductOpen}
      onClose={() => dispatch({ type: 'product_close' })}>
      <Card>
        <Card.Body>
          <Card.Image width="400px" src={selectedProduct.image} />
        </Card.Body>
        <Card.Body>
          <Text h5>{selectedProduct.title}</Text>
          <Text>{selectedProduct.description}</Text>
        </Card.Body>
        <Card.Body>
          <Row css={{ flexWrap: 'wrap' }}>
            <ProductButtons
              location={'modal'}
              item={selectedProduct}
              buttonToShow={['toggle_item_reviews', 'toggle_item_questions', 'favorite_add']}
            />
          </Row>
        </Card.Body>
        <Card.Body>
          <ProductOptions />
        </Card.Body>
        <Card.Body>
          <Text h6>О товаре</Text>
          {['Тип', 'Партномер ', 'Марка ТС', 'Модель ТС', 'Цвет'].map((character) => (
            <Row justify="space-between">
              <Text size={15} color="gray">
                {character}
              </Text>
              <Spacer x={1} />
              <Text size={17}>{45}</Text>
              <></>
            </Row>
          ))}
        </Card.Body>

        <Card.Footer css={{ paddingBottom: '80px' }}>
          <ProductPrice price={selectedProduct.price} />
          <Button light auto>
            <ProductButtons
              location={'modal'}
              item={selectedProduct}
              buttonToShow={['add_cart_item']}
            />
          </Button>
        </Card.Footer>
      </Card>
    </Modal>
  );
};
