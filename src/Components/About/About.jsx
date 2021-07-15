import React from 'react'
import styled from "./About.module.css"
const About = () => {
  return (
    <div className={styled.flex}>
      <div className={styled.div1}>
          <h1>About Me</h1>
          <p>I'm a highly resourceful and passionate Software Engineer and well-rounded IT Professional possessing expert knowledge of the Software Development lifecycle and a solid understanding of technologies required for the development and deployment of highly available and scalable applications, including their networks and infrastructure.</p>
          <p>Passionate about creating a positive user experience, I enjoy working with and adapting to technologies as they develop.</p>
          <p>I build things for the Android and Web Platforms, Professional Deejay, Young Entrepreneur and a Lover of Life!</p>
      </div>
      <div className={styled.div2}>
          <img className={styled.img} src="https://scontent.fnag7-1.fna.fbcdn.net/v/t1.6435-9/107734795_3187540907970781_363601340376008551_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=TnbVbXH7ALoAX_wKFve&_nc_ht=scontent.fnag7-1.fna&oh=b78bcc891e9c35a9350f8e9e06f469aa&oe=60F523D3" alt="photo1"/>
      </div>
    </div>
  )
}

export default About
