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
                        <a className="hero-right-button-text" href='https://drive.google.com/uc?export=download&id=1O3cBxhicD0iMZd9z6iu2IStkL25NkEmm'> Download CV</a>
                    </div>
                    <div className="hero-right-button-right">
                        <a className="hero-right-button-text-contact" href='#contact'> Contact me</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
