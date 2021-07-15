import React from 'react'
import styled from "./Skills.module.css"
import { AiFillGithub } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
const Skills = () => {
  return (
    <div>
      <h1 className={styled.mid}>Skills</h1>
       <div  className={styled.flex}>
         <div>
         <FaReact className={styled.color}/>
         </div>
         <div>
           <SiRedux className={styled.color}/>
         </div>
         <div>
         <AiOutlineHtml5 className={styled.color}/>
         </div>
         <div>
         <FaCss3Alt className={styled.color}/>
         </div>
         <div>
         <DiNodejs className={styled.color}/>
         </div>
         <div>
         <DiMongodb className={styled.color}/>
         </div>
         <div>
         <SiMysql className={styled.color}/>
         </div>
         <div>
           <AiFillGithub className={styled.color}/>
         </div>
       </div>
    </div>
  )
}

export default Skills
