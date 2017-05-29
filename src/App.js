import React, { Component } from 'react';
import Reader from './Reader.js'
import './App.css';

class App extends Component {
  render() {
    let inputString = 'yo this is the input string im testing right here';
    return (
      <div className="App">
        <div>
          <Reader inputString={inputString} />
        </div>
      </div>
    );
  }
}

export default App;
