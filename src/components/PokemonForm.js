import React from "react";
import { Form } from "semantic-ui-react";
import { format } from "path";

class PokemonForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    };
  }

  handleSubmit = (event) =>{
    let data = {
      name: event.target.name.value,
      stats: [{value: parseInt(event.target.hp.value),
                name: 'hp'}],
      sprites: {front: event.target.frontUrl.value,
                 back: event.target.backUrl.value}
    }
    event.target.reset()
    fetch('http://localhost:3000/pokemon', {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      this.props.handleSubmit(res)
    })
    
    
    
  }


  render() {
    const {name, hp, frontUrl, backUrl} = this.state
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name"/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
            />
            <Form.Input
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;


