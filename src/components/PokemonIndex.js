import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'


class PokemonPage extends React.Component {
  constructor(){
    super()
    this.state = {
      pokemonArr: [],
      searchTerm: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pokemonArr: data
      })
    })
  }

  handleSearchChange = (e) => {
    const {value} = e.target
    this.setState({
      searchTerm: value})
  }

  sortPokemon = () => {
    let sorted = this.state.pokemonArr.sort(function(a,b){
      if (b.name > a.name){
        return -1
      } else {
        return 1
      }
    } )
    console.log(sorted[0])
    this.setState({
      pokemonArr: sorted
    })

  }

  
  render() {
    const desiredPokemon = this.state.pokemonArr.filter(pokemon => pokemon.name.includes(this.state.searchTerm) )
    console.log(desiredPokemon)

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearchChange} showNoResults={false} />
        <br />
        <PokemonForm sortPokemon={this.sortPokemon} />
        <br />
        <PokemonCollection pokemonArr={desiredPokemon} />
      </div>
    )
  }
}

export default PokemonPage
