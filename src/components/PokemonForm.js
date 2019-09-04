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

  getInitialState = () => ({ name: '', hp: '', frontUrl: '', backUrl: '' })

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name] : value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, hp, frontUrl, backUrl } = this.state
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        name,
        stats: [
          {
            value: hp,
            name: 'hp'
          }
        ],
        sprites: {
          front: frontUrl,
          back: backUrl
        }
      })
    })
      .then(resp => resp.json())
      .then(pokemon => this.props.addPokemon(pokemon))
      .catch(error => console.error(error))
    this.setState(this.getInitialState())
  }

  render() {
    const {name, hp, frontUrl, backUrl} = this.state
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} value={name} />
            <Form.Input fluid label="hp" placeholder="hp" name="hp"  onChange={this.handleChange} value={hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} value={frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange} value={backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form><br/>
        <button onClick={this.props.sortPokemon}>Sort</button>
      </div>
    )
  }
}

export default PokemonForm
