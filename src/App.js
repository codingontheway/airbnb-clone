import React, { Component } from 'react'
import './App.css'
import Header from '../src/header'
import Experiences from '../src/experiences'
import Homes from '../src/homes'
import JoinUs from '../src/joinUs'
import FeaturedDestinations from '../src/FeaturedDestinations'
import Footer from '../src/footer'




class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Experiences />
        <Homes />
        <JoinUs />
        <FeaturedDestinations />
        <Footer />

      </div>
    );
  }
}

export default App
