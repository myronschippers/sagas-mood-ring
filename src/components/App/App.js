import React, { Component } from 'react';

// COMPONENTS
import Carousel from '../Carousel/Carousel';

// CSS
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Carousel />
      </div>
    );
  }
}

export default App;
