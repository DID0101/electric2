import React from 'react'



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
                            <a href='contact#/Contact' >
                            <div className="button">
                                Contact 
                                <div className="mask"></div>
                            </div>
                            </a>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default Hero