import { Grid, Modal, Text } from '@nextui-org/react';
import React from 'react';

import { useMainState } from '../hooks/useMainState';
import { useMainAction } from '../hooks/useMainAction';

import { ProductItem } from './productItem';
import { useWindowSize } from '@uidotdev/usehooks';
import { CartItem } from './cartItem';

export const Favorite = () => {
  const state = useMainState();
  const { dispatch } = useMainAction();
  const size = useWindowSize();
  return (
    <Modal
      scroll
      fullScreen
      closeButton
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      open={state.isFavoriteOpen}
      onClose={() => dispatch({ type: 'open_favorite' })}>
      <Modal.Header>
        <Text h3>Избранное</Text>
      </Modal.Header>
      <Modal.Body css={{ justifyContent: 'center', textAlign: 'center' }}>
        {state.itemsInFavorite.length <= 0 ? (
          <Text h2 color="gray">
            Пусто
          </Text>
        ) : (
          <Grid.Container justify="center" gap={1}>
            {state.itemsInFavorite &&
              state.itemsInFavorite.map((item) => (
                <Grid key={item.id}>
                  <CartItem location="favorite" item={item} />
                </Grid>
              ))}
          </Grid.Container>
        )}
      </Modal.Body>
    </Modal>
  );
};
