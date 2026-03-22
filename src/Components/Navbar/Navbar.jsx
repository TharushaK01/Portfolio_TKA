import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.webp'
import Home from '../Hero/Hero';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='nav-logo' src={logo} alt='nav-logo'/>
        <ul className="nav-menu">
          <li><NavHashLink to="/">Home</NavHashLink></li>
            <li><NavHashLink to="/#about">About</NavHashLink></li>
            <li><NavHashLink to="/#services">Services</NavHashLink></li>
            <li><NavHashLink to="/#portfolio">Portfolio</NavHashLink></li>
            {/* <li>Contact</li> */}
        </ul>
        <div className="nav-connect"><NavHashLink to="/#contact">Connect With Me</NavHashLink></div>
    </div>
  )
}

export default Navbar