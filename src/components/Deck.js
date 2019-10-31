import React from 'react';
import PropTypes from 'prop-types';

export default function Deck({ children }) {
  return (
    <>
    <section>{children}</section>
    </>
  );
};

Deck.propTypes = {
  children: PropTypes.node.isRequired
};