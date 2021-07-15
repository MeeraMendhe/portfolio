import React from 'react'
import styled from "./Project.module.css"
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
//import {  Redirect } from 'react-router-dom';

const Project = () => {
    // const handleClick=()=>
    // {
    //     <Redirect to="https://github.com/vinayak-pk/airbnb-clone"/> 
    // }
  return (
    <div>
      <h1 className={styled.mid}>Projects</h1>
      <div className={styled.width}>
          <div className={styled.left}>
              <img className={styled.img} src="https://www.ehospitalitytimes.com/wp-content/uploads/airbnb.jpg" alt="logo"/>
          </div>
          <div className={styled.right}>
              <h4 className={styled.color}>Featured</h4>
              <h2>Airbnb Website</h2>
              <div className={styled.box}>
                  <p>
                  Airbnb allows you to find places to stay directly from individuals in thousands of cities around the India.<p className={styled.blue}>Read More</p>
                  </p>
              </div>
              <h5>NodeJS || React || MongoDb || Redux || Express || Material UI</h5>
              <div className={styled.flex}>
               <AiFillGithub className={styled.size}/>
                  <BiLink className={styled.size} />
              </div>
          </div>
      </div>
      <div className={styled.width}>
          <div className={styled.left}>
              <img className={styled.img} src="https://s3.amazonaws.com/sr-marketplace-prod/wp-content/uploads/2018/11/Screen-Shot-2018-11-16-at-14.08.51.png" alt="logo"/>
          </div>
          <div className={styled.right}>
              <h4 className={styled.color}>Featured</h4>
              <h2>Naukri Website</h2>
              <div className={styled.box}>
                  <p>
                  Naukri.com is a recruitment platform that provides hiring-related services to corporates/recruiters, placement agencies and to<p className={styled.blue}>Read More</p>
                  </p>
              </div>
              <h5>React || Redux || JSON server || FireBase || Thunk</h5>
              <div className={styled.flex}>
                  <AiFillGithub className={styled.size}/>
                  <BiLink className={styled.size} />
              </div>
          </div>
      </div>
    </div>
  )
}

export default Project