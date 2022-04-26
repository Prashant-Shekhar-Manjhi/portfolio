import React from 'react'
import about from "../../image/about.png";
import "./About.css"

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-main-container">
        <h2 className="about-heading">About me</h2>
        <div className="about-container">
            <div className="about-container-left">
              <div className="about-description">
                <p className="about-description-text">
                  Hello&#44;<br/>Prashant here&#44; I am a pre-final year engineering undergraduate student at National Institute of Technology, Calicut. I am a self learned programmer and a full stack developer.
                </p>
                <p className="about-description-text">
                  I am passionate about software development, the thrill of creating new tools and platforms instill me with joy and happiness.
                </p>
                <p className="about-description-text">
                  Competitive programmming is still a fascinating feild for me, need a little more time to get even. I enjoy participating in these competitions, not to forget the hackathons, Hacktober fest being my favorite one.
                </p>
                <p className="about-description-text about-desc-last">
                  Can't wait to see you as an integral part of my hack-dev-coding journey.
                </p>
              </div>
            </div>
            <div className="about-container-right">
              <div className="about-image-container">
                <img src={about} alt="it's Prashant" className='about-image'/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
