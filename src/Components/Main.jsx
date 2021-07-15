import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Intro from './Intro/Intro'
import Navbar from './Navbar/Navbar'
import Skills from './Skills/Skills'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default Main
