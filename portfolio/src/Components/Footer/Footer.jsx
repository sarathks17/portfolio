import React from 'react'
import './Footer.css'
import portfoliologo from '../../assets/portfoliologo.png'
import user_icon from '../../assets/user_icon.Svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={portfoliologo} alt="" />
            <p>I am a dedicated frontend developer with 8 months of internship experience, during which I successfully completed four dynamic web projects. I am currently open to freelancing opportunities or joining a company to contribute my skills in creating responsive and engaging user interfaces.</p>
        </div>
        <div className="footer-top-right">
           <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder='Enter Your Email' />
           </div>
           <div className="footer-subscribe">
            Subscribe
           </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
