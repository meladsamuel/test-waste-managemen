import React from 'react';
import { ListGroupItem, Button, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDelete } from '../api/api';

const Basket = ({ data, onDeleted }) => {
  const { isPending: deletingBasket, deleteItem } = useDelete('baskets', onDeleted);

  return (
    <ListGroupItem key={data.id}>
      <p>
        basket {data.id} {'=>'} {data.level}
      </p>
      <ButtonGroup>
        <Button variant="danger" onClick={() => deleteItem(data.id)}>
          {deletingBasket ? 'deleting Basket...' : 'delete basket'}
        </Button>
        <Button onClick={() => null}>update software</Button>
      </ButtonGroup>
    </ListGroupItem>
  );
};

Basket.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  onDeleted: PropTypes.func.isRequired,
};

export default Basket;
