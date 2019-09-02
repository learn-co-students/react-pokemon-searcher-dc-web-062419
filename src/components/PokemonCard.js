import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {front: true}

  imgURL = () => {
    if (this.state.front){
      return (this.props.pokemon.sprites.front)
    } else {
      return (this.props.pokemon.sprites.back)
    }
  }

  flipCard = () => {
    this.setState({front: !this.state.front})
  }

  render() {
    const hp = this.props.pokemon.stats.filter(stat => stat.name==="hp")[0].value
    
    return (
      <Card onClick={this.flipCard}>
        <div>
          <div className="image">
            <img src={this.imgURL()} alt={this.props.pokemon.name} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
                {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
