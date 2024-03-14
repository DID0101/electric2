import React from 'react'
import { FaCalendar } from 'react-icons/fa6'
import './MyEducation.css'

const MyEducation = () => {
  return (
      <>
        <section className="container-md education" id="education">
          <h1 className="heading"> <span> my </span> education : </h1>
          <div className="box-container">
              <div className="box">
                  <div className="content">
                      <span className='span'><FaCalendar /> 2020 - 2021 </span>
                      <h3>Founder </h3>
                      <p>About Founder</p>
                  </div>
              </div>
              <div className="box">
                  <div className="content">
                      <span className='span'><FaCalendar /> 2021 - 2023 </span>
                      <h3>Services Area</h3>
                      <p>City</p>
                  </div>
              </div>

          </div>
        </section>
      </>
  )
}

export default MyEducation