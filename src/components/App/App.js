import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// COMPONENTS
import Carousel from '../Carousel/Carousel';

// CSS
import './App.css';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header vr vr_x3">
            <h1>Saga Mood Ring</h1>
          </header>

          <Route exact path="/" component={Carousel} />
        </Router>
      </div>
    );
  }
}

export default App;
