import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  handleClick = () => {
    if (this.state.clicked === false) {
      this.setState({
        clicked: true
      });
    } else {
      this.setState({
        clicked: false
      });
    }
  };

  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img
              onClick={this.handleClick}
              alt="oh no!"
              src={
                this.state.clicked
                  ? this.props.details.sprites.back
                  : this.props.details.sprites.front
              }
            />
          </div>
          <div className="content">
            <div className="header">{this.props.details.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.details.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
