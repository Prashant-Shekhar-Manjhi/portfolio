import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import "./Education.css"

export default function Education() {
  return (
    <div className='education-container'>
        <ul className="education-list">
            <li className="education-list-item">
                <div className="education-list-item-degree">
                    <h2 className="education-list-item-degree-name">B.Tech in Computer Science and Engineering</h2>
                    <p className="education-list-item-degree-duration">2019-Present</p>
                </div>
                <p className="education-list-item-institute">
                    National Institute of Technology Calicut, India
                </p>
            </li>
            <li className="education-list-item">
                <div className="education-list-item-degree">
                    <h2 className="education-list-item-degree-name">12th Board</h2>
                    <p className="education-list-item-degree-duration">2017-2019</p>
                </div>
                <p className="education-list-item-institute">
                    Yamuna Singh Collage - Ekma,Saran (Bihar)
                </p>
            </li>
            <li className="education-list-item">
                <div className="education-list-item-degree">
                    <h2 className="education-list-item-degree-name">10th Board</h2>
                    <p className="education-list-item-degree-duration">2015-2016</p>
                </div>
                <p className="education-list-item-institute">
                    Jyoti Central High School Ekma, Saran (Bihar)
                </p>
            </li>
        </ul>
        <SchoolIcon className='education-icon'/>
    </div>
  )
}
