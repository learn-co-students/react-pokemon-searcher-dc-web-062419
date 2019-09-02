import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  // now that this componenet has ALL of the pokemon obj's from the index component...I want to create a method that will
  // Create a pokemon card and give each card it's appropraite obj to use to render info to the card.
  createCard = () => {
    return this.props.pokemon.map(poke => {
      return <PokemonCard details={poke} key={poke.name} />;
    });
  };

  render() {
    return <Card.Group itemsPerRow={6}>{this.createCard()}</Card.Group>;
  }
}

export default PokemonCollection;

//this.props.pokemon.each => render a pokecard within a div or something
