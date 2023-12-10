import React from 'react'
import goalx from "../assets/goalx.png"
import "./Footer.css"
import facebookIcon from "../assets/fbicon.png"
import instaIcon from "../assets/igicon.png"
import googleIcon from "../assets/gicon.png"
import youtubeIcon from "../assets/youtubeicon.png"

function Footer() {
  return (
    <div className='footer-container'>
      <div className='logo-container'>
        <img src={goalx} alt="logo" className='footer-logo'/>
        <div className='vertical-line'></div>
        <div className='social-text'>
          Connect with us
          <div className='social-imgs'>
            <a href="https://www.facebook.com/">
              <img src={facebookIcon} alt="facebook-icon" className='facebook-icon'/>
              </a>
            <a href='https://www.instagram.com/'>
              <img src={instaIcon} className='instaIcon' alt="instaIcon"/></a>
            <a href='https://www.google.com/?gl=us&hl=en&pws=0&gws_rd=cr'><img src={googleIcon} className='googleIcon' alt="googleIcon"/></a>
            <a href='https://www.youtube.com/'><img src={youtubeIcon} className='youtubeIcon' alt="youtube"/></a>
          </div>
        </div>
        {/* <div className='footer-text'>
          <ul>
            <li>About Us</li>
            <li>Support</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>

        </div> */}
      </div>
      
    </div>
  )
}

export default Footer