import React from 'react';
import { characters, gifs } from '../content.json';
import Deck from './DeckOfCards';

export default function App() {
  return (
    <>
      <Deck characters={characters} />
      <Deck characters={gifs} />
    </>
  );
}
