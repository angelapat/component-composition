import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import Deck from './Deck';

export default function DeckOfCards({ items }) {
  return (
    <Deck>
      { items.map(({ _id, name, image }) => (
        <Card key={_id} _id={_id} name={name} image={image} />
      ))}
    </Deck>
  )
};

DeckOfCards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    image: PropTypes.string.isRequired
  }))
};
