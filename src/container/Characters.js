import React, { Component } from 'react';
import DeckOfCards from '../components/DeckOfCards';

export default class Characters extends Component {

  state = {
    characters: []
  }

  componentDidMount() {
    fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(characters => this.setState({ characters }))
  }

  render() {
    return(
      <DeckOfCards items={this.state.characters}/>
    )
  }
}
