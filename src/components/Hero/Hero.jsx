import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import resumePdf from '../../assets/Darshan_Resume.pdf'   // ← import the PDF
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Darshan,</span>frontend and Backend developer based in Bangalore.</h1>
      <p>I'm a passionate Web developer with a deep love for clean code,and turning ideas into functional web applications.</p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="AnchorLink" offset={50} href="#contact">Connect With Me</AnchorLink>
        </div>

        {/* Open in new tab */}
        <a
          className="hero-resume"
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
        >
          My Resume
        </a>

        {/* Or: Direct download */}
        {/*
        <a className="hero-resume" href={resumePdf} download="Darshan_Resume.pdf">
          Download Resume
        </a>
        */}
      </div>
    </div>
  )
}

export default Hero
