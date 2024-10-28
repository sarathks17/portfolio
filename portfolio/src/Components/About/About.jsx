import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import aboutimage from '../../assets/aboutimage.jpg'




const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={aboutimage} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I'm a Frontend Developer from Ernakulam, Kerala, with an 8-month internship in React.js development and basic knowledge of Node.js and MongoDB.</p>
                <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML $ CSS</p><hr  style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                    <p>React JS</p><hr  style={{width:"70%"}}/>
                </div>
                <div className="about-skill">
                    <p>JavaScript</p><hr  style={{width:"60%"}}/>
                </div>
                <div className="about-skill">
                    <p>Node JS</p><hr  style={{width:"50%"}}/>
                </div>
                <div className="about-skill">
                    <p>Mongo DB</p><hr  style={{width:"50%"}}/>
                </div>
               
                
            </div>
        </div>
   
      </div>
      {/* <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>ACTIVE CLIENTS</p>
            </div>
        </div> */}
    </div>
  )
}

export default About
