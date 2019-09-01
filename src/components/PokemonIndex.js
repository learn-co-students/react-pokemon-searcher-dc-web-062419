import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";
import { format } from "path";

class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state = {
      allavailablePokemon: [],
      searchResults: ""
    }
  }

  componentDidMount = () =>{
    fetch('http://localhost:3000/pokemon')
    .then(res=> res.json())
    .then(res=>
    this.setState({
      allavailablePokemon: res
    }))
  }

  filteredPokemons = () => {
    return this.state.allavailablePokemon.filter(pokemon => pokemon.name.includes(this.state.searchResults))
  }


  searchInput = (event, data) =>{
   this.setState({searchResults: data.value})
  }

  addingPokemon = (res) => {
    let addingPoke = this.state.allavailablePokemon
    addingPoke.push(res)
    this.setState({allavailablePokemon: addingPoke})
  }



  render() {
    // debugger
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.addingPokemon}/>
        <br />
        <Search
          onSearchChange={_.debounce((event, data) => this.searchInput(event, data), 500)}
          showNoResults={false}
        />
        <br />
        <PokemonCollection allpokemons={this.filteredPokemons()}/>
      </div>
    );
  }
}

export default PokemonPage;
