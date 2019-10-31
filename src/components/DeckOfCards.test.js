import React from 'react';
import { shallow } from 'enzyme';
import Deck from './DeckOfCards';

describe('Deck component', () => {

  it('renders Deck', () => {
    const characters = [
      {
        _id: "5da23754845fd2cb76d59f0b",
        image: "https://media.tenor.com/images/8f6432a3fae8f961b38c107fb46f6722/tenor.gif"
      },
      {
        _id: "5da237699734fdcb7bef8f52",
        name: "Grandpa Phil",
        image: "https://vignette.wikia.nocookie.net/heyarnold/images/7/79/GrandpaPhil.png/revision/latest/scale-to-width-down/300?cb=20160924030436"
      }
    ] 
    const deck = shallow(<Deck characters={characters} />
    );
    expect(deck).toMatchSnapshot();
  });
});

