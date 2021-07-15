import React from 'react'
import styled from "./Navbar.module.css"
import {Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className={styled.main}>
 <div className={styled.flex}>
      <div>
      <img className={styled.img} src="https://cdn3.vectorstock.com/i/1000x1000/81/62/letter-m-beauty-women-face-logo-design-vector-27938162.jpg" alt="logo"/>
      </div>
      <div className={styled.margin}>
      <Link to="about" hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              className={styled.margin}>About</Link>
      </div>
      <div className={styled.left}>
      <Link to="skills" hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              className={styled.left}>Skills</Link>
      </div>
      <div className={styled.left}>
      <Link to="project" hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              className={styled.left}>Project</Link>
      </div>
      <div className={styled.left}>
     <Link to="contact" hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              className={styled.left}>Contact</Link>
      </div>
      <div className={styled.left}>
      <Link to="resume" hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              className={styled.left}>Resume</Link>
      </div>
      <div className={styled.left}>
      <Link to="intro" hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              className={styled.left}>Introduction</Link>
      </div>
    </div>
    </div>
  )
}

export default Navbar
