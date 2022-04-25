import React from 'react'
import "./Hero.css"
import prashant from "./../../image/prashant.png"
// import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

export default function Hero() {
  return (
    <div className='hero' id="hero">
        <div className="hero-container">
            <div className='hero-left'>
                <div className="hero-image-box">
                    <img src={prashant} alt="hero-pic" className='hero-left-image'/>
                </div>
            </div>
            <div className='hero-right'>
                <p className="hero-right-heading">
                    Full Stack Developer | MERN
                </p>
                <h2 className="hero-right-name">
                    Prashant Shekhar
                </h2>
                <p className="hero-right-description">
                    Software Engineer with excellent problem-solving skills and ability to perform well, Passionate about coding.
                </p>
                <div className="hero-right-button">
                    <div className="hero-right-button-left">
                        <p className="hero-right-button-text"> Download CV</p>
                    </div>
                    <div className="hero-right-button-right">
                        <p className="hero-right-button-text"> Contact me</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
