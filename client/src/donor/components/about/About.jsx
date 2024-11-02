import React from 'react'
import './about.css'
import image1 from '../../../assets/image1.jpeg'


const About = () => {
  return (
    <>
    <h1 className="about-heading">About</h1>
    <div className="about-section">
      
      <div className="about-left">
        <img src={image1} alt="not found" />
      </div>
      <div className="about-right">
        <h4>Our Mission</h4>
        <p>Caritas is a dedicated donation platform aiming to connect users with NGOs in need. By facilitating donations for essential items like food, clothing,and medicines, we strive to make a positive impact on communities. Join us in out mission to support those in need.</p>
        <button>Learn More</button>
      </div>
    </div>
    </>
  )
}

export default About
