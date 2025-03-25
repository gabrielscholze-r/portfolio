import React from 'react'
import './Tooltip.css'

export default function Tooltip({hover, title, list, exp}) {
    return (
        <div
            className={`tooltip ${(hover) ? 'show' : 'hide'}`}
        >
            <div className="px-3 py-2">
                <h2 style={{ color: "var(--background-color)" }}>{title}</h2>
                <ul>
                    {list.map((text, index) => (
                        <li key={index} style={{ color: "var(--background-color)" }} className='py-1'>{text}</li>
                    ))}
                </ul>
                <p style={{ color: "var(--background-color)" }}>Experiência:</p>
                <div className="progress">
                    <div className="progress-container">
                        <div className="progress-bar" style={{width: `${exp}%`}}></div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
