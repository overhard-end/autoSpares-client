import { Card, Grid, Text } from '@nextui-org/react';
import React from 'react';
import SparesImg from '../assets/1.png';
import Jack from '../assets/jacks.png';
import Others from '../assets/others.png';
import Pipes from '../assets/pipes.png';
import Seals from '../assets/seals.png';

export const CategoriesCards = () => {
  const cards = [
    { name: 'Смотреть все детали', src: SparesImg },
    { name: 'Патрубки', src: Pipes },
    { name: 'Домкраты', src: Jack },
    { name: 'Уплотнители', src: Seals },
    { name: 'Резино-Технические изделие', src: Others },
  ];
  return (
    <Grid.Container gap={2} justify="space-around">
      {cards.map((item) => (
        <Grid key={item}>
          <Card isPressable isHoverable>
            <Card.Header>
              <Text css={{ textTransform: 'uppercase' }}>{item.name}</Text>
            </Card.Header>
            <Card.Body css={{ p: 0 }}>
              <Card.Image width="100px" src={item?.src} />
            </Card.Body>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};
