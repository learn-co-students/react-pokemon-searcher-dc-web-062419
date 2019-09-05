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

  handleChange = (event, {name, value})=>{
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    console.log(this.props)

    const { name, hp, frontUrl, backUrl } = this.state
    
    const data = {
      name: name,
      sprites: {
        front: frontUrl,
        back: backUrl
       },
       stats: [{
         name: 'hp',
         value: hp
       }]
    }

    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data)})
      .then(res=>res.json())
      .then(newPokemon => this.props.addPokemon(newPokemon))

      // resets form, event.target.reset() doesn't work
      this.setState({
        name: '',
        hp: '',
        frontUrl: '',
        backUrl: ''
      })
  }
  
  
  render() {
    
    return (
      <div className='container'>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit} className='container'>
          <Form.Group widths="equal">
            <Form.Input fluid 
              label="Name" 
              placeholder="Name" 
              name="name"
              value={this.state.name} 
              onChange={this.handleChange}
            />
            <Form.Input fluid 
              label="hp" 
              placeholder="hp" 
              name="hp"
              value={this.state.hp}
              onChange={this.handleChange}
            />
            <Form.Input fluid 
              label="Front Image URL" 
              placeholder="url" 
              name="frontUrl" 
              value={this.state.frontUrl}
              onChange={this.handleChange}
            />
            <Form.Input fluid 
              label="Back Image URL" 
              placeholder="url" 
              name="backUrl"
              value={this.state.backUrl} 
              onChange={this.handleChange}
            />

          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
