import React from 'react'
import styled from "./Navbar.module.css"
import { WiDaySunny } from "react-icons/wi";
const Navbar = () => {
  return (
    <div className={styled.flex}>
      <div>
      <img className={styled.img} src="https://cdn3.vectorstock.com/i/1000x1000/81/62/letter-m-beauty-women-face-logo-design-vector-27938162.jpg" alt="logo"/>
      </div>
      <div className={styled.margin}>
          <h3>About</h3>
      </div>
      <div className={styled.left}>
      <h3>Skills</h3>
      </div>
      <div className={styled.left}>
      <h3>Project</h3>
      </div>
      <div className={styled.left}>
      <h3>Contact</h3>
      </div>
      <div className={styled.icon}>
      <WiDaySunny className={styled.width}/>
      </div>
    </div>
  )
}

export default Navbar
