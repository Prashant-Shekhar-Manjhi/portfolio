import React from 'react'
import ColorLensIcon from '@mui/icons-material/ColorLens';
import "./Interest.css"
export default function Interest() {
  return (
    <div className='interest-container'>
        <ul className="interest-list">
            <li className="interest-list-item">
                <h2 className="interest-list-item-heading">Music</h2>
                <p className="interest-list-item-desc">
                    Listening to music is something i can never compromise with, skimming through spotify's pop songs charts is at times the best stress reliever that i can get my hands on.
                </p>
            </li>
            <li className="interest-list-item">
                <h2 className="interest-list-item-heading">Competitive Gaming</h2>
                <p className="interest-list-item-desc">I like to challenge my reflexes a lot while competing in Cricket games, pushing the rank and having interactive gaming session exites me the most.</p>
            </li>
        </ul>
        <ColorLensIcon className='interest-icon'/>
    </div>
  )
}
