import React, { Component } from 'react';
import Ninjas from './Ninjas'

class App extends Component {
  state ={
    ninjas: [
      {name: 'Lorena', age: 31, belt:'orange', id: 1},
      {name: 'Tudor', age: 29, belt:'black', id: 2},
      {name: 'Alessia', age: 1, belt:'pink', id: 3},
    ]
  }
  render() {
    return (
      <div className="App">
        <h1> My React App</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
