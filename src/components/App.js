import React, { Component } from 'react';
import './App.css';
import GetData from './GetData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>ATX Traffic Cameras</h1>
          <hr />
        </header>
        <GetData />
      </div>
    );
  }
}

export default App;
