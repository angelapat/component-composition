import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ _id, name, image }) {
  return (
    <div >
      <header><h3>{name}</h3></header>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p>{name} has {_id}</p>
    </div>
  )
};

Card.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};