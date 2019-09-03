import React from 'react';
import { Card } from 'semantic-ui-react';

class PokemonCard extends React.Component {
  state = {
    front: true,
  };

  flip = () => {
    this.setState({ front: !this.state.front });
  };

  render() {
    const {
      abilities,
      height,
      id,
      moves,
      name,
      sprites,
      stats,
      types,
      weight,
    } = this.props.pokemon;

    return (
      <Card>
        <div>
          <div className="image">
            <img
              src={this.state.front ? sprites.front : sprites.back}
              alt={name}
              onClick={this.flip}
            />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats[3].value}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
