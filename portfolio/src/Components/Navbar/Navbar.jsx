import React, { useState,useRef } from 'react'
import './Navbar.css'
import portfoliologo from '../../assets/portfoliologo.png'
import underline from '../../assets/nav_underline.svg' // Check the actual case
import AnchorLink from 'react-anchor-link-smooth-scroll'
import toogle_icon from '../../assets/menu_open.Svg'
import menu_close_icon from '../../assets/menu_close.Svg'

const Navbar = () => {
  const [menu, setMenu] = useState("") // Initialize the state with an empty string
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const colseMenu = () => {
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      <img src={portfoliologo} alt="Logo" className='main-logo'/>
      <img src={toogle_icon} onClick={openMenu} alt="" className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img onClick={colseMenu} src={menu_close_icon} alt="" className="nav-mob-close" />
        <li>
          <AnchorLink className='anchor-link' href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt='underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === 'about' && <img src={underline} alt='underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" && <img src={underline} alt='underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href="#work">
            <p onClick={() => setMenu("portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "portfolio" && <img src={underline} alt='underline' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt='underline' />}
        </li>
      </ul>
      
      <div className="nav-connect">
      <AnchorLink className='anchor-link' offset={50} href="#contact">Connect With Me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar

