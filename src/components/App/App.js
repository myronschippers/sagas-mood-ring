import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

// CSS
import './App.css';

// COMPONENTS
import Carousel from '../Carousel/Carousel';
import StatsPage from '../StatsPage/StatsPage';
import HeaderBar from '../HeaderBar/HeaderBar';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="app">
        <Router>
          <HeaderBar primaryHdg="Saga Mood Ring" />

          <div className="app-body">
            <Route exact path="/" component={Carousel} />
            <Route exact path="/stats" component={StatsPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
