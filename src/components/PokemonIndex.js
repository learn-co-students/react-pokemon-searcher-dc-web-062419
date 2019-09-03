import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    allPoke: [],
    searchWord: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokeArray => this.setState({allPoke: pokeArray}))
  }


renderSearch = (event, data) => {
  this.setState({ searchWord: data.value})
}
filterPokes = () => {
 return this.state.allPoke.filter(poke => poke.name.includes(this.state.searchWord))
}

addPokes = (poke) => {
  this.setState({allPoke: [...this.state.allPoke, poke]})
}



  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce((event, data) => this.renderSearch(event,data), 500)} showNoResults={false} />
        <br />
        <PokemonForm addPokes={this.addPokes}/>
        <br />
        <PokemonCollection 
        pokemons={this.filterPokes()}
        />
      </div>
    )
  }
}

export default PokemonPage
