import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    pokeImg: true
  }

  togglePoke = () => {
    if(this.state.pokeImg)
    this.setState({
      pokeImg: false
    })
    else{
      this.setState({
        pokeImg: true
      })
    }
  }
  
  render() {
    return (
      <Card>
        <div>
          <div className="image" onClick={this.togglePoke}>
            {this.state.pokeImg ? <img src= {this.props.pokemon.sprites.front}/> : <img src= {this.props.pokemon.sprites.back}/>}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[0].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
