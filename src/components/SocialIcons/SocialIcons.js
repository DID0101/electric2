import React from 'react'
import './SocialIcons.css'
// react icons
import { FaFacebook, FaInstagram} from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className='SocialIcons'>  
        <a href='https://www.facebook.com/103183915317540' className="github">
          <span><FaFacebook /></span>     
        </a>
        <a href='https://www.instagram.com/freedom_electrical_solutions' className="linkedin">
          <span><FaInstagram /></span>           
        </a>
    </div>
  )
}

export default SocialIcons