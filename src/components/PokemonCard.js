import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {

  state ={
    cardImage: "front"
  }

  changeImage = () =>{
    if(this.state.cardImage === 'front'){
      this.setState({cardImage: 'back'})
    }
    else{
      this.setState({cardImage: 'front'})
    }
  }

  currentImage = () => {
     if(this.state.cardImage === 'front'){
  
      return <img alt="oh no!" src={this.props.pokemon.sprites.front}/> 
      }

      return <img alt="oh no!" src={this.props.pokemon.sprites.back}/>
    
  }


  render() {
    
    // debugger
    return (
      <Card>
        <div onClick={this.changeImage}>
          <div className="image">
            {this.currentImage()}
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
