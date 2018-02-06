import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import BoyfriendUber from './containers';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Route path="/" component={BoyfriendUber} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
