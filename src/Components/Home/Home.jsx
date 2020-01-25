import React, { Component } from 'react'

import Header from '../Header/Header'
import About from './About/About'
import Cover from './Cover/Cover'
import PastGlimpse from './PastGlimpse/PastGlimpse'
import Sponsors from './Sponsors/Sponsors'
import Footer from '../Footer/Footer'

class Home extends Component {
  render() {
    return (
      <div className="home">
      <Header />
      <Cover />
      <About />
      <PastGlimpse />
      <Sponsors />
      <Footer />
      </div>
    )
  }
}

export default Home
