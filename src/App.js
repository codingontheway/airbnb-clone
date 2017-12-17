import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/header'
import Explore from '../src/explore'
import Experiences from '../src/experiences'
import Homes from '../src/homes'
import JoinUs from '../src/joinUs'
import FeaturedDestinations from '../src/FeaturedDestinations'
import Footer from '../src/footer'

class App extends Component {
  render() {
    return (
      <div className='mainBodyMutated conatiner-fluid'>
        <Header />
        <Explore />
        <Experiences />
        <Homes />

      </div>
    );
  }
}

export default App;
