import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
     let data = {name: e.target.name.value, stats: [{value:  e.target.hp.value, name: 'hp' }], sprites: {front:  e.target.frontUrl.value, back: e.target.backUrl.value }}

    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(poke => this.props.addPokes(poke))

    e.target.name.value = ''
    e.target.hp.value = ''
    e.target.frontUrl.value = ''
    e.target.backUrl.value = ''

    }
  
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button >Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm


  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   this.setState({
  //     name: e.target.name.value,
  //     hp: e.target.hp.value,
  //     frontUrl: e.target.frontUrl.value,
  //     backUrl: e.target.backUrl.value
  //   }) 
   
  // }