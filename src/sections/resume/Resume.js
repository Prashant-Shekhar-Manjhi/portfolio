import React, { useState } from 'react'
import Education from '../../components/Education/Education';
import Skills from '../../components/skills/Skills';
import Achievement from '../../components/achievements/Achievement';
import Certificate from '../../components/certificates/Certificate';
import Interest from '../../components/interest/Interest';
import SchoolIcon from '@mui/icons-material/School';
import LaptopMacTwoToneIcon from '@mui/icons-material/LaptopMacTwoTone';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import "./Resume.css"

export default function Resume() {
    const [isVisible, setIsVisible] = useState({
        education: true,
        skills: false,
        achivement: false,
        certificate: false,
        interest: false,
    });

    const educationClick = ()=>{
        setIsVisible({
            education: true,
            skills: false,
            achivement: false,
            certificate: false,
            interest: false,
        })
    }

    const skillsClick = ()=>{
        setIsVisible({
            education: false,
            skills: true,
            achivement: false,
            certificate: false,
            interest: false,
        })
    }

    const achivementClick = ()=>{
        setIsVisible({
            education: false,
            skils: false,
            achivement: true,
            certificate: false,
            interest: false,
        })
    }

    const certificatesClick = ()=>{
        setIsVisible({
            education: false,
            skils: false,
            achivement: false,
            certificate: true,
            interest: false,
        })

    }

    const interestClick = ()=>{
        setIsVisible({
            education: false,
            skils: false,
            achivement: false,
            certificate: false,
            interest: true,
        })
    }
  return (
    <div className='resume' id='resume'>
        <div className="resume-main-container">
            <h2 className="resume-heading">Resume</h2>
                <div className="resume-container">
                    <div className="resume-left">
                        <ul className="resume-left-list">
                            <li className={isVisible.education ? "resume-left-list-item active-btn" : "resume-left-list-item"} onClick={educationClick}>
                                <SchoolIcon className="resume-left-list-item-icon"/>
                                <p className="resume-left-list-text">
                                    Education
                                </p>
                            </li>
                            <li className={isVisible.skills ? "resume-left-list-item active-btn" : "resume-left-list-item"} onClick={skillsClick}>
                                <LaptopMacTwoToneIcon className="resume-left-list-item-icon"/>
                                <p className="resume-left-list-text">
                                    Programming Skills
                                </p>
                            </li>
                            <li className={isVisible.certificate ? "resume-left-list-item active-btn" : "resume-left-list-item"} onClick={certificatesClick}>
                                <WorkspacePremiumIcon className="resume-left-list-item-icon"/>
                                <p className="resume-left-list-text">
                                    Certificates
                                </p>
                            </li>
                            <li className={isVisible.achivement ? "resume-left-list-item active-btn" : "resume-left-list-item"} onClick={achivementClick}>
                                <EmojiEventsIcon className="resume-left-list-item-icon"/>
                                <p className="resume-left-list-text">
                                    Achivements
                                </p>
                            </li>
                            <li className={isVisible.interest ? "resume-left-list-item active-btn" : "resume-left-list-item"} onClick={interestClick}>
                                <ColorLensIcon className="resume-left-list-item-icon"/>
                                <p className="resume-left-list-text">
                                    Interests
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="resume-Right">
                        {isVisible.education && <Education/>}
                        {isVisible.skills && <Skills/> }
                        {isVisible.achivement && <Achievement/>}
                        {isVisible.certificate && <Certificate/>}
                        {isVisible.interest && <Interest/>}
                    </div>
                </div>
        </div>
    </div>
  )
}
