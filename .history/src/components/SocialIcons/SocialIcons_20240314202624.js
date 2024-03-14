import React from 'react'
import './SocialIcons.css'
// react icons
import { FaFacebook, FaInstagram} from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className='SocialIcons'>  
        <a href='https://github.com/AchrafMR' className="github">
          <span><FaFacebook /></span>     
        </a>
        <a href='https://www.linkedin.com/in/achraf-mechhour-6825a2289' className="linkedin">
          <span><FaInstagram /></span>           
        </a>
    </div>
  )
}

export default SocialIcons