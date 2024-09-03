import React, { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/hero/Hero'
import Program from './components/program/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/videoPlayer/VideoPlayer'

const App = () => {
  const [playState , setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What We Offer' />
        <Program />
        <About setPlayState={setPlayState} />
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='TESTIMONIAL' title='What Student Says' />
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
