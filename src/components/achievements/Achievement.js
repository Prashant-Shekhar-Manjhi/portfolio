import React from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import "./Achievement.css"

export default function Achievement() {
  return (
    <div className='achievement-container'>
        <ul className="achievement-list">
            <li className="achievement-list-item">
                <h2 className="achievement-list-item-heading">Collage Topper in 12th Board</h2>
                <p className="achievement-list-item-marks">82.2%</p>
            </li>
            <li className="achievement-list-item">
                <h2 className="achievement-list-item-heading">Bihar Topper in Mathematics</h2>
                <p className="achievement-list-item-marks">98 Marks</p>
            </li>
        </ul>
        <EmojiEventsIcon className='achievement-icon'/>
    </div>
  )
}
