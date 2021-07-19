import React from 'react'
import { AiFillGithub,AiFillTwitterCircle,AiFillLinkedin,AiFillFacebook } from "react-icons/ai";
import styled from './SideBar.module.css'
const SideBar = () => {
  return (
    <div className={styled.fix}>
          <a
              className={styled.color3}
              href="https://github.com/MeeraMendhe"
            >
              <AiFillGithub className={styled.color1}/><br/>
            </a>
            <a
              className={styled.color3}
              href="https://twitter.com/home?lang=en"
            >
              <AiFillTwitterCircle className={styled.color}/><br/>
            </a>     <a
              className={styled.color3}
              href="https://www.linkedin.com/in/meera-mendhe-953240201/"
            >
              <AiFillLinkedin className={styled.color}/><br/>
            </a>     <a
              className={styled.color3}
              href="https://www.facebook.com/meera.mendhe"
            >
              <AiFillFacebook className={styled.color}/><br/>
            </a>
    
    </div>
  )
}

export default SideBar
