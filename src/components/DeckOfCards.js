import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

export default function Deck({ characters }) {
  return (
    <section>
      <header>
        <h2>Characters</h2>
      </header>
      {characters.map(({ _id, name, image }) => (
        <Card key={_id} _id={_id} name={name} image={image} />
      ))}
    </section>
  )
};

Deck.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string,
    image: PropTypes.string.isRequired
  }))
};
