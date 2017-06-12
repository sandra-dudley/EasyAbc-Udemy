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
      <div className="footer">
        <div className="inner-footer">
          <h2>About this game</h2>
          <p>Game created as part of a <a href="https://www.udemy.com/reactjs-for-beginners-build-real-world-react-apps-deploy-on-cloud/" target="_blank" title="Go to ReactJS for beginner course on Udemy" rel="noopener noreferrer">Udemy course assignment</a></p>
          <p>Key learning points demonstrated in this assignment:</p>
          <ul>
            <li>Components (including state and life cycle)</li>
            <li>Load and use of JSON file</li>
            <li>Play, stop, rewind sound (HTML5 audio)</li>
            <li>Use of <a href="https://www.npmjs.com/package/classnames" target="_blank" title="Go to classnames package" rel="noopener noreferrer">classnames package</a> to update class names</li>
            <li>Push to <a href="https://github.com/sandra-dudley/EasyAbc-Udemy" target="_blank" title="Go to GitHub repo" rel="noopener noreferrer">GitHub repo</a></li>
            <li>Deploy to Heroku</li>
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
