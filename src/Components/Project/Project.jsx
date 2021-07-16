import React, { useState } from 'react'
import styled from './Project.module.css'
import { AiFillGithub } from 'react-icons/ai'
import { BiLink } from 'react-icons/bi'
import Modal from 'react-modal'
const Project = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false)
  const handleClick = () => {
    setIsOpen(true)
  }
  return (
    <div id="project">
      <h1 className={styled.mid}>Projects</h1>
      <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
            src="https://www.ehospitalitytimes.com/wp-content/uploads/airbnb.jpg"
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>Airbnb Website</h2>
          <div className={styled.box}>
            <p>
              Airbnb allows you to find places to stay directly from individuals
              in thousands of cities around the India.
              <p className={styled.blue} onClick={handleClick}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen}>
              <h1>Airbnb</h1>
              <p>
                Airbnb allows you to find places to stay directly from
                individuals in thousands of cities around the India.
              </p>
              <p>
                A website that allows users to rent or lease accommodation not
                limited to bed and breakfasts, hostels, homestays, apartments,
                rooms, or hotels.
                <h3>
                  {' '}
                  Tech Stack: React, Redux, Thunk, NodeJs, Mongoose, MongoDB,
                  Express, Material UI, Axios
                </h3>
                A collaborative project in 5 days with 2 people
                <br />
                Roles & Responsibility: 1.A user can sign in or sing up 2.Google
                location API with google-maps to locate live places 3.i18next to
                translate a website from English to Hindi vice versa. 4.Build a
                backend with all functionality like fetching, mapping, sorting.
                5. Build Hotel List page 6.Build a host page to rent their
                property.
              </p>
              <button onClick={() => setIsOpen(false)} className={styled.btn}>
                Close
              </button>
            </Modal>
          </div>
          <h5>NodeJS || React || MongoDb || Redux || Express || Material UI</h5>
          <div className={styled.flex}>
            <a
              className={styled.size}
              href="https://github.com/vinayak-pk/airbnb-clone"
            >
              {' '}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              className={styled.size}
              href="https://clone-airbnb-green.vercel.app/"
            >
              <BiLink className={styled.size} />
            </a>
          </div>
        </div>
      </div>
      <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
            src="https://s3.amazonaws.com/sr-marketplace-prod/wp-content/uploads/2018/11/Screen-Shot-2018-11-16-at-14.08.51.png"
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>Naukri Website</h2>
          <div className={styled.box}>
            <p>
              Naukri.com is a recruitment platform that provides hiring-related
              services to corporates/recruiters, placement agencies and to
              company.
              <p onClick={() => setIsOpen1(true)} className={styled.blue}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen1}>
              <h1>Naukri.com</h1>
              <p>
                Naukri.com is a recruitment platform that provides
                hiring-related services to corporates/recruiters, placement
                agencies and to company.
              </p>
              <p>
                The website allows job seekers to find the right job that
                matches their aspirations.
                <h3> Tech Stack: React, Redux, Thunk, Axios, JavaScript</h3>
                A collaborative project in 5 days with 3<br />
                people. Roles & Responsibility: Built a profile page of the
                user. Built a resume page and store information at the JSON
                server. Built a host page to post jobs with all required
                details. Built homepage with functionality.
              </p>
              <button onClick={() => setIsOpen1(false)} className={styled.btn}>
                Close
              </button>
            </Modal>
          </div>
          <h5>React || Redux || JSON server || FireBase || Thunk</h5>
          <div className={styled.flex}>
            <a
              href="https://github.com/TusharTaral/naukri-clone"
              className={styled.size}
            >
              {' '}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              href="https://intense-taiga-94146.herokuapp.com/"
              className={styled.size}
            >
              <BiLink className={styled.size} />{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
