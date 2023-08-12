import { Button, Grid, Text } from '@nextui-org/react';
import React from 'react';

export const ProductOptions = () => {
  return (
    <>
      <Text h6>Количество</Text>
      <Grid.Container gap={2}>
        {[1, 3, 5, 9].map((count) => (
          <Grid>
            <Button disabled={count > 1 ? true : false} auto size={count > 1 ? 'xs' : 'sm'}>
              {count + ' шт'}
            </Button>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};
