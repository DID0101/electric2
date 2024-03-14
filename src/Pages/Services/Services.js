import React from 'react'
import './Services.css'
import {FaCode,FaFileCode,FaMobileScreenButton} from 'react-icons/fa6'
import {MdWeb} from 'react-icons/md'
import Service_img from '../../assets/service_img.png'
import FirstSectionOfPages from '../../components/FirstSectionOfPages/FirstSectionOfPages'
import MoveToNextPage from '../../sections/MoveToNextPage/MoveToNextPage'

const Services = () => {
  return (
    <>
        <FirstSectionOfPages title="Safety" logo={Service_img} />
        <div className='container-md' id='services_id'>
            <section className="service" id="service">    

                <div className="box_se-container">

                    <div className="box_se">
                        <div className="icon"><MdWeb /></div>
                        <h3>Culture</h3>
                        <p>About Culture</p>
                    </div>

                    <div className="box_se">
                        <div className="icon"><FaCode /></div>
                        <h3>Team</h3>
                        <p>Team safety</p>
                    </div>

                    <div className="box_se">
                        <div className="icon"><FaMobileScreenButton /></div>
                        <h3>EQUIPMENT</h3>
                        <p>About EQUIPMENT </p>
                    </div>

                    <div className="box_se">
                        <div className="icon"><FaFileCode /></div>
                        <h3>Client</h3>
                        <p>About Client Safety</p>
                    </div>
                </div>
            </section>
        </div>
        <MoveToNextPage move_title="Services" move_link="/Skills" />
    </>
  )
}

export default Services