import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {


  render() {
    const {name,stats, sprites} = this.props.pokemon
    const stat = (stats.find(stat =>{
      return stat.name === 'hp'}))
      
    return (
      <Card>
        <div>
          <div className="image">
            <img  src={sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stat.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
