import React from 'react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';
import { Search } from 'semantic-ui-react';

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchTerm: '',
  };

  componentDidMount() {
    fetch(`http://localhost:3000/pokemon`)
      .then(res => res.json())
      .then(pokemon => this.setState({ pokemon }))
      .catch(e => console.error(e));
  }

  handleSearchChange = ({ value }) => {
    this.setState({ searchTerm: value });
  };

  filterPokemon() {
    if (this.state.searchTerm === '') return this.state.pokemon;
    return this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.searchTerm));
  }

  addPokemon = newPokemon => {
    this.setState({ pokemon: [...this.state.pokemon, newPokemon] });
  };

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearchChange} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.filterPokemon()} />
        <br />
        <PokemonForm handleSubmit={this.addPokemon} />
      </div>
    );
  }
}

export default PokemonPage;
