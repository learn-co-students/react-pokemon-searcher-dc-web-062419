import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  constructor(){
    super()
    this.state={
      pokemons: [],
      searchTerm: ''
    }
  }

  componentDidMount = ()=>{
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemons => this.setState
      ( { pokemons } )
    )
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search 
          onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} 
          
        />
        <br />       
        <PokemonForm />
        <br />
        <PokemonCollection pokemons={this.state.pokemons} />
        <br />
      </div>
    )
  }
}

export default PokemonPage
