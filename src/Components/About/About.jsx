import React from 'react'
import styled from "./About.module.css"
import img from "../files/dp.jpeg"
const About = () => {
  return (
    <div id="about" className={styled.flex}>
      <div className={styled.div1}>
          <h1>About Me</h1>
          <p className={styled.top}>I'm a highly resourceful and passionate Full Stack Web Developer. I love designing websites and I am looking for more opporunity to work in coding.</p>
          <p>Passionate about creating a positive user experience, I enjoy working with and adapting to technologies as they develop.</p>
          <p>I build things for Web Platforms, Young Entrepreneur and a Lover of Life!</p>
      </div>
      <div className={styled.div2}>
          <img className={styled.img} src={img} alt="photo1"/>
      </div>
    </div>
  )
}

export default About
