import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Intro from './Intro/Intro'
import Navbar from './Navbar/Navbar'
import Project from './Project/Project'
import Resume from './Resume/Resume'
import Skills from './Skills/Skills'

const Main = () => {
  return (
    
    <>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Project/>
      <Resume/>
      <Contact/>
    </>
  )
}

export default Main
