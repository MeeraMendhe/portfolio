import React, { useState } from 'react'
import styled from './Project.module.css'
import { AiFillGithub } from 'react-icons/ai'
import { BiLink } from 'react-icons/bi'
import Modal from 'react-modal'
const Project = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)
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
              <p className={styled.blue} onClick={() => setIsOpen(true)}>
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
         {/* ----project2 */}
         <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
            src="https://shop.stepupstudent.com/wp-content/uploads/2020/05/linkedin-lead-ninja.jpg"
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>LinkedIn</h2>
          <div className={styled.box}>
            <p>
            This is the clone of LinkedIn, which is a web application primarily used for professional networking and career development.
              <p onClick={() => setIsOpen1(true)}  className={styled.blue}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen1}>
              <h1>LinkedIn</h1>
              <p>
              This is the clone of LinkedIn, which is a web application primarily used for professional networking and career development.
              You can invite anyone to connect (and accept their invitations to connect with you), but they must have their own LinkedIn account to use the site. LinkedIn saves the connections that you make to a list called My Network.
              </p>
              <p>
                
LinkedIn enables you to network with people and professional organizations in your industry.
                <h3> Tech Stack: React, Redux, Firebase, Styled-Components</h3>
                A collaborative project in 5 days with 4<br />
                people. Roles & Responsibility: Built a profile page of the
                user. Get and Post and Update data of profile page using firebase.
              </p>
              <button onClick={() => setIsOpen1(false)} className={styled.btn}>
                Close
              </button>
            </Modal>
          </div>
          <h5>React || Redux || Firebase || Styled-Components</h5>
          <div className={styled.flex}>
            <a
              href="https://github.com/mehtab39/linkedin-clone-project"
              className={styled.size}
            >
              {' '}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              href="https://linkedin-production-app.web.app/"
              className={styled.size}
            >
              <BiLink className={styled.size} />{' '}
            </a>
          </div>
        </div>
      </div>
      {/* ----project3 */}
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
              <p onClick={() => setIsOpen2(true)} className={styled.blue}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen2}>
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
              <button onClick={() => setIsOpen2(false)} className={styled.btn}>
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
      {/* -------- project 4 */}
      <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxZj7hHjLZJzM0ltri_8cMauWJzGVRXlKFfA&usqp=CAU"
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>Sudoku Solver</h2>
          <div className={styled.box}>
            <p>
            Sudoku Solver is a Website that gives you the Solution of Every Sudoko Problem that you input and 
              <p className={styled.blue} onClick={() => setIsOpen3(true)}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen3}>
              <h1>Sudoku Solver</h1>
              <p>
              Sudoku Solver is a Website that gives you the Solution of Every Sudoko Problem that you input and also you can visualize each step of how the sudoku is getting solved.
              </p>
              <p>
                A website that allows users to solve any sudoku problem
                <h3>
                  {' '}
                  Tech Stack: HTML, CSS, JavaScript
                </h3>
                Solo Project was done in 2 days.
                <br />
              </p>
              <button onClick={() => setIsOpen3(false)} className={styled.btn}>
                Close
              </button>
            </Modal>
          </div>
          <h5>HTML || CSS || JavaScript</h5>
          <div className={styled.flex}>
            <a
              className={styled.size}
              href="https://github.com/MeeraMendhe/Sudoku"
            >
              {' '}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              className={styled.size}
              href="https://sudoku-game9.herokuapp.com/?"
            >
              <BiLink className={styled.size} />
            </a>
          </div>
        </div>
      </div>
      {/* ------ project 5 */}
      <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
            src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5e7d481d23b951f6d15b61f2_Screen%20Shot%202020-03-26%20at%205.25.44%20PM.png"
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>AirGarage</h2>
          <div className={styled.box}>
            <p>
            AirGarage helps churches and small businesses generate extra funding and income by renting out their unused parking spaces
              <p className={styled.blue} onClick={() => setIsOpen4(true)}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen4}>
              <h1>AirGarage</h1>
              <p>
              AirGarage helps churches and small businesses generate extra funding and income by renting out their unused parking spaces.
              </p>
              <p>
                A website that allows users to rent or lease accommodation not
                limited to bed and breakfasts, hostels, homestays, apartments,
                rooms, or hotels.
                <h3>
                  {' '}
                  Tech Stack: HTML, CSS, JavaScript
                </h3>
                A collaborative project in 5 days with 2 people
                <br />
                Roles & Responsibility: Make Navbar and Footer with responsive website.
              </p>
              <button onClick={() => setIsOpen4(false)} className={styled.btn}>
                Close
              </button>
            </Modal>
          </div>
          <h5>HTML || CSS || JavaScript</h5>
          <div className={styled.flex}>
            <a
              className={styled.size}
              href="https://github.com/MeeraMendhe/Airgarage"
            >
              {' '}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              className={styled.size}
              href="https://meeramendhe.github.io/Airgarage/"
            >
              <BiLink className={styled.size} />
            </a>
          </div>
        </div>
      </div>
           {/* ------ project 6 */}
      <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
            src="https://www.aptiv.com/images/default-source/games/memory-game-share-image.png"
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>Memory Game</h2>
          <div className={styled.box}>
            <p>
            Memory games give space to critical thinking and that helps children nurture their attention to detail.
              <p className={styled.blue} onClick={() => setIsOpen5(true)}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen5}>
              <h1>Mwmory Game</h1>
              <p>
Playing memory games can improve other brain functions, such as attention, concentration, and focus. Memory games give space to critical thinking and that helps children nurture their attention to detail. Memory games can improve visual recognition. ... A good short-term memory can improve a person's long-term memory too.
              </p>
              <p>
                A website that allows users to solve any memory game
                <h3>
                  {' '}
                  Tech Stack: React
                </h3>
                Solo Project was done in 1 days.
                <br />
              </p>
              <button onClick={() => setIsOpen5(false)} className={styled.btn}>
                Close
              </button>
            </Modal>
          </div>
          <h5>React</h5>
          <div className={styled.flex}>
            <a
              className={styled.size}
              href="https://github.com/MeeraMendhe/MemoryGame"
            >
              {' '}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              className={styled.size}
              href="memorygame27.herokuapp.com/"
            >
              <BiLink className={styled.size} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
