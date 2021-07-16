import React from 'react'
import styled from "./Contact.module.css"
import emailjs from "emailjs-com";
const Contact = () => {
  const handleSubmit=(e)=>
  {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_f3322fh",
        "template_livi7up",
        e.target,
        "user_9LffP4jCfFdSRK43r6Mcn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <form onSubmit={handleSubmit} id="contact">
      <h1 className={styled.h1}>Contact Form</h1>
      <div>
      <input className={styled.color} name="user_name" placeholder="Full Name" type="text" required/>
      <input className={styled.color1} name="contact_number" placeholder="Mobile Number" type="text" required/>
      </div>
      <div>
      <input className={styled.color2} name="user_email" placeholder="Email Id" type="email" required/>
      </div>
      <div>
      <input className={styled.color2} name="message" placeholder="Subject of the message" type="text" required/>
      </div>
      <button type="submit" className={styled.btn}>Send Message</button>
    </form>
  )
}

export default Contact
