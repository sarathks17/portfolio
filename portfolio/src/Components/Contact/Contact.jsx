import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.Svg'
import mail_icon from '../../assets/mail_icon.Svg'
import location_icon from '../../assets/location_icon.Svg'
import call_icon from '../../assets/call_icon.Svg'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
             <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    <p>sarathKumar@gmail.com</p>
                </div>
                <div className="contact-detail">
                     <img src={call_icon} alt="" />
                     <p>8587574789865</p>
                </div>
                <div className="contact-detail">
                   <img src={location_icon} alt="" />
                   <p>CA, United States</p>
                </div>
             </div>
        </div>
        <form className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter Your Name' name='name' />
           <label htmlFor="">Your Email</label>
           <input type="email" placeholder='Enter Your Email'/>
           <label htmlFor="Write Your Message Here"></label>
           <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
           <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
