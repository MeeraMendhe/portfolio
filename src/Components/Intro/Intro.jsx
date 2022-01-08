import React from 'react'
import styled from "./Intro.module.css"
import {Link } from "react-scroll";
import TypeWriter from "../TypeWriter/TypeWriter"
const Intro = () => {
  return (
    <div id="intro">
      <h1 className={styled.h1}>About Me</h1>
      <h3 className={styled.color}>Hi, My Name Is</h3>
      <p className={styled.fontS}>Meera Mendhe</p>
       {/* <p className={styled.fontS2}>Full Stack Web Developer</p> */}
        <p className={styled.fontS2} ><TypeWriter/></p>
       <h3 className={styled.left}>A highly technical, team-oriented professional with extensive experience in Full Stack Web Development with demonstrated ability to work through a problem effectively and provide the best solutions.</h3>
       <Link to="contact" hashSpy={true}
              spy={true}
              smooth={true}
              delay={100}
              duration={500}
              className={styled.btn}>Get In Touch</Link> 
    </div>
  )
}

export default Intro
