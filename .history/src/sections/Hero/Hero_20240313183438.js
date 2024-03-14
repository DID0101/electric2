import React from 'react'
import Button from '../../components/Button/Button';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import { FaDownload } from "react-icons/fa6";
import Coding from '../../assets/coding.png'
// import { saveAs } from 'file-saver';
import CV from '../../assets/Resume.pdf';
import './Hero.css'

function Hero() {
    return (
    <div className='test container-md'>
        <div className="area" >
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div >
        <div id="Hero">
            <div className="hero_container">
                <div className="information">
                    <h1>
                        Freedom Electrical <span style={{color:'var(--main-color)'}}> Solution</span> <br /> 24 Hour <br /> 
                    </h1>
                    <p> A family owned electrical service company that proudly serves Liberty Hill & surrounding areas. TECL #36250</p>
                    <div className="btn">
                        <div id='button'>
                            <a href='contact' >
                            <div className="button">
                                Contact &nbsp;
                                <div className="mask"></div>
                            </div>
                            </a>
                        </div>
                    </div>
                    
                </div>
                <div className="Hero_image">
                    <img src={Coding} className="img-fluid" alt="Hero image" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero