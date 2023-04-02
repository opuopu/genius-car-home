import React from 'react'
import About from '../About/About'
import Services from '../services/Services'
import Carousel from './Carousel'

export default function Home() {
  return (
    <div>
      <Carousel/>
      <About></About>
      <Services></Services>
    </div>
  )
}
