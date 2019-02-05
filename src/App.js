import React, { Component } from 'react';
import Ninjas from './components/Ninjas';
import AddNinja from './components/AddNinjas';
import './App.css';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 20, id: 1},
      { name: 'Jin', age: 30, id: 2}
    ]
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(val => {
      return val.id !== id
    })
    this.setState({
      ninjas: ninjas
    })
  }

  catchNewNinja = (ninja) => {
    ninja.id = Math.random()
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={ this.deleteNinja }></Ninjas>
        <AddNinja catchNewNinja={ this.catchNewNinja }></AddNinja>
      </div>
    );
  }
}

export default App;
