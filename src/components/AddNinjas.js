import React, { Component } from 'react'

class AddNinja extends Component {

  state = {
    name: '',
    age: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.catchNewNinja(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render () {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={ this.handleChange }></input>
          <label htmlFor="age">Age</label>
          <input type="text" id="age" onChange={ this.handleChange }></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddNinja