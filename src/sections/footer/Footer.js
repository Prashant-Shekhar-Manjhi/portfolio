import React from 'react'
import logo from "./../../logo/logo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import nitcLogo from "../../image/nitcLogo.png";
import "./footer.css";

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-wrapper">
        <div className="footer-main-container">
            <div className="footer-left">
              <a href="/">
                <img class="logo" alt="logo" src={logo} />
              </a>
              <div className="footer-left-links">
                <a href="https://www.facebook.com/lakshya.shekhar.7/" target="_blank" rel="noreferrer">
                    <FacebookIcon className='footer-icon'/>
                </a>
                <a href="https://www.instagram.com/diary.of.shekhar/" target="_blank" rel="noreferrer">
                    <InstagramIcon className='footer-icon'/>
                </a>
                <a href="https://www.linkedin.com/in/prashant-shekhar-manjhi/" target="_blank" rel="noreferrer">
                    <LinkedInIcon className='footer-icon'/>
                </a>
                <a href="https://twitter.com/prashan91608714" target="_blank" rel="noreferrer">
                    <TwitterIcon className='footer-icon'/>
                </a>
              </div>
              <a href="https://goo.gl/maps/u6qbjW9qFkusDxMV8" target="_blank" rel="noreferrer" className='footer-left-location'>
                    <LocationOnIcon className='footer-icon'/>
              </a>
            </div>
            <div className="footer-middle">
                <h2 className="footer-middle-heading">Contact me</h2>
                <p className='address'>
                    National Institute of Technology, Calicut<br/>
                    NIT Campus (P.O.), Kozhikode - 673 601, Kerela,<br/>
                    India
                </p>
                <p>+91-7295853132</p>
                <p>shekharprashant789@gmail.com</p>
            </div>
            <div className="footer-right">
              <div className="footer-right-wrapper">
                  <img src={nitcLogo} alt="NITC LOGO" className='footer-right-nitc-logo'/>
              </div>
            </div>
        </div>
      </div>
      <div className="footer-copyright">
          <p className="footer-copyright-text">
              Copyright &#169; 2022 All Rights Reserved
          </p>
      </div>
    </div>
  )
}
