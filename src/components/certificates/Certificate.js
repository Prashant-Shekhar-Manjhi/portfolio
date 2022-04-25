import React from 'react'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import "./Certificate.css";

export default function Certificate() {
  return (
    <div className='certificate-container'>
        <ul className="certificate-list">
            <li className="certificate-list-item">
                <div className='certificate-list-item-heading-wrapper'>
                    <a className="certificate-list-item-heading" href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/" target="_blank" rel="noreferrer">
                        Build Responsive Real-World Websites with HTML and CSS
                    </a>
                </div>
                <p className="certificate-list-item-tutor">
                    &#8212; taught by Jonas Schmedtmann
                </p>
            </li>
            <li className="certificate-list-item">
                <div className='certificate-list-item-heading-wrapper'>
                    <a className="certificate-list-item-heading" href="https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/" target="_blank" rel="noreferrer">
                        Node.js, Express, MongoDB & More: The Complete Bootcamp 2022
                    </a>
                </div>
                <p className="certificate-list-item-tutor">
                    &#8212; taught by Jonas Schmedtmann
                </p>
            </li>
            <li className="certificate-list-item">
                <div className='certificate-list-item-heading-wrapper'>
                    <a className="certificate-list-item-heading" href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/" target="_blank" rel="noreferrer">
                        React - The Complete Guide (incl Hooks, React Router, Redux)
                    </a>
                </div>
                <p className="certificate-list-item-tutor">
                    &#8212; taught by Maximilian Schwarzmüller
                </p>
            </li>
        </ul>
        <WorkspacePremiumIcon className='certificate-icon'/>
    </div>
  )
}
