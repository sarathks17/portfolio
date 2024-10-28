import React from 'react'
import './Hero.css'
import profileimage from '../../assets/portfoliopic.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profileimage} alt="" />
      <h1> <span>I'm Sarathkumar s,</span> frontend developer based in India.</h1>
      <p>I'm a Frontend Developer based in Ernakulam, Kerala. I completed an 8-month internship focused on building responsive and dynamic web applications using React.js. Additionally, I have foundational knowledge of Node.js and MongoDB, enabling me to work with full-stack applications.</p>
      <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href="#contact">Connect With Me</AnchorLink></div>
      </div>
    </div>
  )
}

export default Hero
