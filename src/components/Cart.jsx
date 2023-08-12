import { Button, Grid, Modal, Text } from '@nextui-org/react';
import React from 'react';

import { useMainState } from '../hooks/useMainState';
import { useMainAction } from '../hooks/useMainAction';
import { CartItem } from './cartItem';

export const Cart = () => {
  const state = useMainState();
  const { dispatch } = useMainAction();
  return (
    <Modal
      scroll
      fullScreen
      closeButton
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      open={state.isCartOpen}
      css={{ paddingTop: '100px' }}
      onClose={() => dispatch({ type: 'close_cart' })}>
      <Modal.Header>
        <Text h3>Корзина</Text>
      </Modal.Header>

      <Modal.Body css={{ justifyContent: 'center', textAlign: 'center' }}>
        {state.itemsInCart.length <= 0 ? (
          <Text h2 color="gray">
            Пусто
          </Text>
        ) : (
          <Grid.Container gap={2} justify="space-between" css={{ flexDirection: 'column' }}>
            {state.itemsInCart &&
              state.itemsInCart.map((item) => (
                <Grid key={item.id}>
                  <CartItem item={item} />
                </Grid>
              ))}
          </Grid.Container>
        )}
        {/* <Card css={{ backgroundColor: 'gray', width: '35%', position: 'fixed', bottom: 0 }}>
          <Card.Header>
            <Text h4> Детали заказа </Text>
          </Card.Header>
          <Card.Body>
            <Input aria-label="phone" type="phone" placeholder="Номер телефона" />
            <Spacer />
            <Input aria-label="email" type="email" placeholder="Почта" />
          </Card.Body>
          <Card.Footer>
            <Button>Заказать</Button>
          </Card.Footer>
        </Card> */}
      </Modal.Body>
      <Modal.Footer>
        <Text h4> ИТОГО 20303 руб</Text>
        <Button flat auto color="error" onPress={() => dispatch({ type: 'close_cart' })}>
          Выйти
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
