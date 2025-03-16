import React from 'react'
import './Tooltip.css'
export default function Tooltip(props) {



    return (
        <div className={`tooltip ${(props.hover[0] && props.hover[1]===props.name) ? 'show' : 'hide'} mx-auto`}>
            <div className="px-3 py-2">
                <h2>{props.title}</h2>
                <ul>
                    {props.list.forEach(text => {
                        <li className="list-item">{text}</li>
                    })}
                </ul>
                <p>Experiência:</p>
                <div className="progress">
                    <div className="progress-bar progress-bar-animated"><span className="visually-hidden">{props.exp}</span></div>
                </div>
            </div>
        </div>
    )
}
