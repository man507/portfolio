import React from 'react'
import'./About.css'
import theme_pattern from'../../assets/theme_pattern.svg'
import profile_img from'../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a  Web Developer specializing in  front-end development. I build robust and scalable web applications using technologies like Html,Css,React js,and JavaScript. I enjoy turning complex problems into elegant, user-friendly solutions.</p>
                </div>
               <div className="about-skills">
    <h3 className="skills-header">My Skills</h3>
    <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
    <div className="about-skill"><p>JavaScript</p><hr style={{width:"55%"}}/></div>
    <div className="about-skill"><p>Html5 & Css3</p><hr style={{width:"75%"}}/></div>
    <div className="about-skill"><p>Java</p><hr style={{width:"50%"}}/></div>
    <div className="about-skill"><p>Figma</p><hr style={{width:"40%"}}/></div>
    <div className="about-skill"><p>Git Hub</p><hr style={{width:"70%"}}/></div>
    <div className="about-skill"><p>Vs Code</p><hr style={{width:"75%"}}/></div>
    <div className="about-skill"><p>Cursor</p><hr style={{width:"75%"}}/></div>

</div>

            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>0+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
            <div className="about-achievement">
                <h1>3+</h1>
                <p>INTERNSHIP</p>
                </div>
                </div>

    </div>
)
}

export default About


