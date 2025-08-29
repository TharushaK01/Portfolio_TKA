import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.webp';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-text">
        <h1><span>I'm Tharusha Kavinda,</span> Full Stack Developer | Specializing in Scalable Web Applications</h1>
        <p>Computer Science graduate and Full Stack Developer with experience in frontend and backend development. Skilled in React, Next.js, Angular, Node.js, Spring Boot, and WordPress. Passionate about building scalable, responsive, and user-focused web applications.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
        </div>
        <div className="hero-image">
            <img src={profile} alt=''/>
        </div>
        </div>
  )
}

export default Hero