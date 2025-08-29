import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Working from '../components/Working'
import CTA from '../components/CTA'

function Landing() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Features />
        <Working />
        <CTA />
    </div>
  )
}

export default Landing