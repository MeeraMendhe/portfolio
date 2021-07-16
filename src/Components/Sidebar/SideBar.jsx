import React from 'react'
import { AiFillGithub,AiFillTwitterCircle,AiFillLinkedin,AiFillFacebook } from "react-icons/ai";
import styled from './SideBar.module.css'
const SideBar = () => {
  return (
    <div className={styled.fix}>
      <AiFillGithub className={styled.color1}/><br/>
      <AiFillTwitterCircle className={styled.color}/><br/>
      <AiFillLinkedin className={styled.color}/><br/>
      <AiFillFacebook className={styled.color}/><br/>
    </div>
  )
}

export default SideBar
