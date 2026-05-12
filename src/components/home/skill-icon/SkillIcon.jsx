import React, { useState } from 'react'
import './SkillIcon.css'
import Tooltip from '../tooltip/Tooltip'

export default function SkillBar({ icon, title, list, exp }) {
    const [hover, setHover] = useState(false)

    return (
        <div
            className="skill-row"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="skill-icon-wrap">
                <i className={`${icon} skill-devicon`}></i>
            </div>
            <div className="skill-info">
                <div className="skill-header">
                    <span className="skill-name">{title}</span>
                    <span className="skill-pct">{exp}%</span>
                </div>
                <div className="skill-bar-track">
                    <div
                        className="skill-bar-fill"
                        style={{ width: `${exp}%` }}
                    ></div>
                </div>
            </div>
            <Tooltip hover={hover} title={title} list={list} exp={exp} />
        </div>
    )
}
