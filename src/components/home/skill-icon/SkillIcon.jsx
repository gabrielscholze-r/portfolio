import React, { useState } from 'react'
import './SkillIcon.css'
import Tooltip from '../tooltip/Tooltip'

export default function SkillIcon({icon, title, list, exp}) {

    const [hover, setHover] = useState(false)

    return (
        <div
            className='col-sm-auto devicon-col'
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            <i className={`${icon} devicon`}></i>
            <Tooltip hover={hover} title={title} list={list} name={'react'} exp={exp} />
        </div>
    )
}
 