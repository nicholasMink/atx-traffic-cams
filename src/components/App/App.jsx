import React, { Component } from 'react';
import TrafficCameras from '../TrafficCameras';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h2 className='app-title'>ATX Traffic Cams</h2>
        </header>
        <TrafficCameras />
      </div>
    );
  }
}

export default App;
