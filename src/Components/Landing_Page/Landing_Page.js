import React from 'react'
import "./LandingPage.css"
import { useEffect, useState } from 'react'


const Landing_Page = () => {
  const [handleSize,setHandleSize] = useState(false)
  
  useEffect(() => {
    const handleResize = () => {
    if (window.innerWidth >= 576){
        setHandleSize(false) }
    if (window.innerWidth<576){ 
      setHandleSize(true)
    }  
  } 
    window.addEventListener('resize', handleResize)
})



  return (
    <div>
        <section className="hero-section">
        <div className='mx-auto col-12 '>
          <div data-aos="fade-up" className="flex-hero ">              
              <h1 style={{fontSize: handleSize && "50px"}}>
                Your Health<br/>
                <span className="text-gradient " >                  
                  Our Responsibility
                </span>
              </h1>
                <div className="blob-cont">
                    <div className="blue blob"></div>
                </div>
                <div className="blob-cont">
                    <div className="blue1 blob"></div>
                </div>
              <h4>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque at quae ducimus. Suscipit omnis quibusdam non cum rem voluptatem! 
              </h4>
              <a href="/booking-consultation">
                <button className="button">Get Started</button>
              </a>                
          </div>  
        </div>
      </section>
    </div>
  )
}

export default Landing_Page