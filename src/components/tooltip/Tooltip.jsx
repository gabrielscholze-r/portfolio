import React from 'react'
import './Tooltip.css'

export default function Tooltip(props) {
    return (
        <div 
            className={`tooltip ${(props.hover[0] && props.hover[1] === props.name) ? 'show' : 'hide'}`} 
        >
            <div className="px-3 py-2">
                <h2 style={{color: "var(--background-color)"}}>{props.title}</h2>
                <ul>
                    {props.list.map((text, index) => (
                        <li key={index} style={{color: "var(--background-color)"}}>{text}</li>
                    ))}
                </ul>
                <p style={{color: "var(--background-color)"}}>Experiência:</p>
                <div className="progress">
                    <div className="progress-bar progress-bar-animated">
                        <span className="visually-hidden">{props.exp}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
