import React from 'react';
import PropTypes from 'prop-types';
import styles from './Deck.css';

export default function Deck({ children, title, justify }) {
  return (
    <>
      {title && <h1>{title}</h1>}
      <section className={styles.Flex} style={{ justifyContent: justify }}>
        {children}
      </section>
    </>
  );
};

Deck.propTypes = {
  title: PropTypes.string,
  justify: PropTypes.string,
  children: PropTypes.node.isRequired
};

Deck.defaultProps = {
  justify: 'center'
};