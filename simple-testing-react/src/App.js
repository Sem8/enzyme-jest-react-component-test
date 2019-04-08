import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0
  }

  increment = () => {
    let { counter } = this.state;
    counter += 1;
    this.setState({
      counter
    }); 
  }
  render() {
    let { counter } = this.state
    return (
      <div className="App">
        <h2>Testing components</h2>
        <h3> Counter: {counter} </h3>
        <button onClick={this.increment}> Increment </button>
        
      </div>
    );
  }
}

export default App;
