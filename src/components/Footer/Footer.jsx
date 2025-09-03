import React from 'react';
import './Footer.css';
import footer_logo from '../../assets/footer_logo.png';
import resumePdf from '../../assets/Darshan_Resume.pdf'
// import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" />
          <p>I am a frontend and backend developer from Bangalore.</p>
        </div>

        <div className="footer-top-right">
          {/* <div className="footer-email-input"> */}
            {/* <img src={user_icon} alt="User Icon" /> */}
            
          </div>
          {/* <div className="footer-subscribe">resume</div> */}
          <a
                    className="hero-resume"
                    href={resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My Resume
                  </a>


        </div>
      {/* </div> */}

      <hr />

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          ©2025 Darshan. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
