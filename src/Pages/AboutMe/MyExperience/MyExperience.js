import React from 'react'
// import Button from '../../../components/Button/Button'
import './MyExperience.css'
// react-icon
import {FaCalendar} from 'react-icons/fa6'

const MyExperience = () => {
  return (
    <div>
        <section className="container-md experience" id="experience">
        <h1 className="heading"> TEAM : </h1>
        <div className="box-container">
            <div className="box">
                <div className="content">
                    <span className='span'><FaCalendar /> date </span>
                    <h3>Team</h3>
                    <p>About Team  <br />
                    <span className='mx-4'>-About Team body </span></p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default MyExperience