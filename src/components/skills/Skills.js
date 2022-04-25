import React from 'react'
import LaptopMacTwoToneIcon from '@mui/icons-material/LaptopMacTwoTone';
import "./Skills.css"

export default function Skills() {
  return (
    <div className='skills-container'>
        <ul className="skills-list">
            <li className="skills-list-item">
                <h2 className="skills-list-item-heading">
                    Programming Language
                </h2>
                <div className="skills-list-item-names">
                    <p className="skills-list-item-name">C/C++</p>
                    <p className="skills-list-item-name">Javascript</p>
                    <p className="skills-list-item-name">Python</p>
                </div>
            </li>
            <li className="skills-list-item">
                <h2 className="skills-list-item-heading">
                    Web Development
                </h2>
                <div className="skills-list-item-names">
                    <p className="skills-list-item-name">React JS</p>
                    <p className="skills-list-item-name">HTML</p>
                    <p className="skills-list-item-name">CSS</p>
                </div>
            </li>
            <li className="skills-list-item">
                <h2 className="skills-list-item-heading">
                    Backend
                </h2>
                <div className="skills-list-item-names">
                    <p className="skills-list-item-name">Node JS</p>
                    <p className="skills-list-item-name">Express</p>
                </div>
            </li>
            <li className="skills-list-item">
                <h2 className="skills-list-item-heading">
                    Database
                </h2>
                <div className="skills-list-item-names">
                    <p className="skills-list-item-name">MongoDB</p>
                </div>
            </li>
            <li className="skills-list-item">
                <h2 className="skills-list-item-heading">
                    Others
                </h2>
                <div className="skills-list-item-names">
                    <p className="skills-list-item-name">Git &#38; Github</p>
                    <p className="skills-list-item-name">Javascript</p>
                    <p className="skills-list-item-name">Python</p>
                </div>
            </li>
        </ul>
        <LaptopMacTwoToneIcon className='skills-icon'/>
    </div>
  )
}
