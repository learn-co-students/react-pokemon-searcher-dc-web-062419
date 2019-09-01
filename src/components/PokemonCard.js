import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor(){
    super()
    this.state = {
      frontSpriteShown: true
    }
  }

  flipSprite = ()=>{
    this.setState({
      frontSpriteShown: !this.state.frontSpriteShown
    })
  }

  render() {
    console.log(this.props.pokemon)
    return (
      <Card>
        <div>
          <div className="image" onClick={this.flipSprite} >
            { this.state.frontSpriteShown ? <img alt="front of pokemon" src={this.props.pokemon.sprites.front} /> : 
              <img alt="back of pokemon" src={this.props.pokemon.sprites.back} />
            }
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
