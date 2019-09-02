import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

class PokemonIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      allPokemon: [],
      filteredPokemon: [],
      searchTerm: ""
    };
  }
  // once i have my fetch data set to the state, I want to give this data to the pokemon collection
  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(r => r.json())
      .then(data => {
        this.setState({ allPokemon: data, filteredPokemon: data });
      });
  }

  onAddPokemon = event => {
    event.persist();
    let name = event.target[0];
    let hp = event.target[1];
    let front = event.target[2];
    let back = event.target[3];
  };
  // I want to use my fetched pokemon data and set it to state to be rendered to the DOM
  handleSearchInput = (e, { value }) => {
    let x = this.state.allPokemon.filter(poke => {
      return poke.name.includes(value);
    });
    this.setState({
      filteredPokemon: x
    });
  };

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={_.debounce(this.handleSearchInput, 500)}
          showNoResults={false}
        />
        <br />
        <PokemonForm onAddPokemon={this.onAddPokemon} />
        <br />
        <PokemonCollection pokemon={this.state.filteredPokemon} />
      </div>
    );
  }
}

export default PokemonIndex;

// I need to give my pokemon collection actual pokemons that it in turn can give each of those to an individual pokecard
// By default i would like all of the pokemon to show when the page loads
// pokemon index is going to hold the majority of my state
// I need to fetch all of the pokemon
