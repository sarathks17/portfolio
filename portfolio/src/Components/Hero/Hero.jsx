import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.Svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1> <span>I'm Sarathkumar s,</span> frontend developer based in India.</h1>
      <p>I'm a Frontend Developer based in Ernakulam, Kerala. I completed an 8-month internship focused on building responsive and dynamic web applications using React.js. Additionally, I have foundational knowledge of Node.js and MongoDB, enabling me to work with full-stack applications.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
