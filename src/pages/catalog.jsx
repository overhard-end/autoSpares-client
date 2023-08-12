import React from 'react';

import { Container, Grid, Loading } from '@nextui-org/react';

import { useMainState } from '../hooks/useMainState';
import { useMainAction } from '../hooks/useMainAction';

import { ProductItem } from '../components/productItem';

export const Catalog = () => {
  const { getProducts } = useMainAction();
  const state = useMainState();

  getProducts();
  return (
    <Container
      css={{
        paddingTop: '40px',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
      }}
      md>
      {state.allProducts.length <= 0 ? (
        <Loading css={{ marginTop: '50%' }} type="points" />
      ) : (
        <Grid.Container wrap="wrap" justify="space-around" css={{ paddingTop: '25px' }} gap={1}>
          {state.allProducts.map((item) => (
            <Grid css={{ marginBottom: '15px' }} key={item.id}>
              <ProductItem item={item} />
            </Grid>
          ))}
        </Grid.Container>
      )}
    </Container>
  );
};
