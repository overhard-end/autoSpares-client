import { Dropdown, Modal, Text, Grid, Button, Card, Row, Spacer } from '@nextui-org/react';
import React from 'react';
import { useWindowSize } from '@uidotdev/usehooks';
import { useMainState } from '../hooks/useMainState';
import { useMainAction } from '../hooks/useMainAction';

export const Filters = () => {
  const sort = {
    name: 'Сортировка',
    options: ['по убыванию', 'по популярности', 'по возрастанию'],
    type: 'dropdown',
    action: 'filter_set_sort',
  };
  const filters = [
    { name: 'Марка', options: ['bmw', 'mersedes'], type: 'checkbox', action: 'filter_set_brand' },

    {
      name: 'Категории',
      options: ['Двигатели', 'Системы охлаждения', 'Расходники'],
      type: 'multiple',
      action: 'filter_set_categories',
    },
    {
      name: 'Тип',
      options: ['Патрубки радиатора', 'Патрубки охлаждения', 'Патрубок воздушный'],
      type: 'checkbox',
      action: 'filter_set_type',
    },
    {
      name: 'Страна-изготовитель ',
      options: ['Россия', 'Китай'],
      type: 'checkbox',
      action: 'filter_set_country',
    },
  ];

  const size = useWindowSize();
  const state = useMainState();
  const { dispatch } = useMainAction();

  const mapSelectOptions = (options) => {
    return options.map((option) => (
      <Grid key={option}>
        <Button
          onPress={() => dispatch({ type: 'filter_remove', payload: option })}
          color="default"
          size="xs"
          auto
          rounded
          iconRight={<box-icon size="sm" name="x" color={'#ffffff'}></box-icon>}>
          {option}
        </Button>
      </Grid>
    ));
  };

  const mapFilters = () =>
    filters.map((filter) => (
      <Grid key={filter.name}>
        <Dropdown>
          <Dropdown.Button flat>{filter.name}</Dropdown.Button>
          <Dropdown.Menu
            selectionMode="single"
            onSelectionChange={(option) =>
              dispatch({ type: 'filter_set', payload: option.currentKey })
            }
            aria-label="Static Actions">
            {filter.options.map((option) => (
              <Dropdown.Item key={option}>{option}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Grid>
    ));

  const sortCard = (
    <Row justify="flex-end">
      <Dropdown>
        <Dropdown.Button
          size={size.width > 650 ? 'md' : 'sm'}
          css={{ marginTop: 'auto' }}
          icon={<box-icon name=""></box-icon>}
          auto
          rounded>
          {state.sortOption}
        </Dropdown.Button>
        <Dropdown.Menu
          variant="light"
          selectionMode="single"
          onSelectionChange={(option) =>
            dispatch({ type: 'sort_set', payload: option.currentKey })
          }>
          {sort.options.map((option) => (
            <Dropdown.Item key={option}>{option}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Spacer x={0.5} />
      <Button
        onPress={() => dispatch({ type: 'grid_set' })}
        rounded
        auto
        icon={
          state.gridType && (
            <box-icon
              color="#ffffff"
              name={state.gridType === 'grid' ? 'list-ul' : 'grid-alt'}></box-icon>
          )
        }
      />
    </Row>
  );
  const filterCard = (
    <Card>
      <Card.Body>
        <Row>
          <Grid.Container gap={1}>{mapFilters(filters)}</Grid.Container>
        </Row>
      </Card.Body>

      <Card.Body>
        <Row justify="flex-end">
          <Grid.Container gap={0.8}>{mapSelectOptions(state.filters)}</Grid.Container>
          <Spacer x={2} />
          {size.width > 650 && sortCard}
        </Row>
      </Card.Body>
    </Card>
  );
  return (
    <>
      <Modal
        closeButton
        open={state.isFilterOpen}
        onClose={() => dispatch({ type: 'close_filter' })}>
        <Modal.Header>
          <Text h3>Фильтр</Text>
        </Modal.Header>
        <Modal.Body>{filterCard}</Modal.Body>
      </Modal>
      {size.width > 650 ? filterCard : sortCard}
    </>
  );
};
