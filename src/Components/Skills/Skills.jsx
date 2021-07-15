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
    <div id="skills">
      <h1 className={styled.mid}>Skills</h1>
       <div   className={styled.flex}>
         <div>
         <FaReact className={styled.color}/>
         <h3 className={styled.mid}>React</h3>
         </div>
         <div>
           <SiRedux className={styled.color}/>
           <h3 className={styled.mid}>Redux</h3>
         </div>
         <div>
         <AiOutlineHtml5 className={styled.color}/>
         <h3 className={styled.mid}>HTML</h3>
         </div>
         <div>
         <FaCss3Alt className={styled.color}/>
         <h3 className={styled.mid}>CSS</h3>
         </div>
         <div>
         <DiNodejs className={styled.color}/>
         <h3 className={styled.mid}>NodeJS</h3>
         </div>
         <div>
         <DiMongodb className={styled.color}/>
         <h3 className={styled.mid}>MongoDb</h3>
         </div>
         <div>
         <SiMysql className={styled.color}/>
         <h3 className={styled.mid}>MySql</h3>
         </div>
         <div>
           <AiFillGithub className={styled.color}/>
           <h3 className={styled.mid}>GitHub</h3>
         </div>
       </div>
    </div>
  )
}

export default Skills
