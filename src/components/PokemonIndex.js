import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

class PokemonPage extends React.Component {
  state = { data: [], searchText: "" };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(data => this.setState({ data: data }));
  }

  handleSearchChange = (event, { value }) => {
    this.setState({ searchText: value });
  };

  createPokemon = returnedData => {
    this.setState({ data: [...this.state.data, returnedData] });
  };

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createPokemon={this.createPokemon} />
        <br />
        <Search
          onSearchChange={_.debounce(this.handleSearchChange, 500)}
          showNoResults={false}
        />
        <br />
        <PokemonCollection
          data={this.state.data}
          searchText={this.state.searchText}
        />
      </div>
    );
  }
}

export default PokemonPage;
