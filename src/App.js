import React, { Component } from 'react';
import './App.css';
import EasyAbc from './EasyAbc';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
          <h1>Easy ABC</h1>
      </div>
      <EasyAbc />
      </div>
    );
  }
}

export default App;
