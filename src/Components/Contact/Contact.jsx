import React from 'react'
import styled from "./Contact.module.css"
const Contact = () => {
  return (
    <div>
      <h1 className={styled.h1}>Contact Form</h1>
      <div>
      <input className={styled.color} placeholder="First Name" type="text"/>
      <input className={styled.color1} placeholder="Full Name" type="text"/>
      </div>
      <div>
      <input className={styled.color2} placeholder="Email Id" type="text"/>
      </div>
      <div>
      <input className={styled.color2} placeholder="Subject of the message" type="text"/>
      </div>
      <div>
      <input className={styled.color3} placeholder="Type your message herex" type="text"/>
      </div>
      <button className={styled.btn}>Send Message</button>
    </div>
  )
}

export default Contact
