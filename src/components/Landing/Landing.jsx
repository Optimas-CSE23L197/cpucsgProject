import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import Footer from './Footer'
import AboutUs from './AboutUs'

function Landing() {
  return (
    <div className="landing">
      <Navbar />
      <Hero />
      <Features />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default Landing