import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state ={
    ninjas: [
      {name: 'Lorena', age: 31, belt:'orange', id: 1},
      {name: 'Tudor', age: 29, belt:'black', id: 2},
      {name: 'Alessia', age: 1, belt:'pink', id: 3},
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })        
  }
  render() {
    return (
      <div className="App">
        <h1> My React App</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
