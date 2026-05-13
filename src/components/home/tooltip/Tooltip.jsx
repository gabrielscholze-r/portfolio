import React from 'react'
import './Tooltip.css'

export default function Tooltip({ hover, title, list, exp }) {
    return (
        <div className={`skill-tooltip ${hover ? 'skill-tooltip--show' : ''}`}>
            <div className="skill-tooltip__inner">
                <h2 className="skill-tooltip__title">{title}</h2>
                <ul className="skill-tooltip__list">
                    {list.map((text, index) => (
                        <li key={index}>{text}</li>
                    ))}
                </ul>
                <p className="skill-tooltip__label">Experience:</p>
                <div className="skill-tooltip__track">
                    <div className="skill-tooltip__fill" style={{ width: `${exp}%` }}></div>
                </div>
            </div>
        </div>
    )
}
