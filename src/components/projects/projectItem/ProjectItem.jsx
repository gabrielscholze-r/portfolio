import React, { useState } from 'react'
import { imageMapper } from '../../../util/util'
import './ProjectItem.css'
import ProjectDetails from '../projectDetails/ProjectDetails'

const langMap = {
    "SpendZero":         { lang: "Go",          color: "#00acd7" },
    "AppNotas":          { lang: "React",        color: "#61dafb" },
    "CodeCracker (SwiftUI)": { lang: "Swift",   color: "#f05138" },
    "Exoplanet Finder":  { lang: "Angular",      color: "#dd1b16" },
    "Academic Management": { lang: "Kotlin",     color: "#7f52ff" },
    "GamerTag":          { lang: "React",        color: "#61dafb" },
    "iMóveis":           { lang: "Node.js",      color: "#3fb950" },
    "TapTake E-Sports":  { lang: "Java",         color: "#f89820" },
}

export default function ProjectItem({ data, anyOpen, setAny }) {
    const [modal, setModal] = useState(false)
    const image = imageMapper(data.imgPath)
    const meta = langMap[data.title] || { lang: "Code", color: "#8b949e" }

    const handleOpen = () => {
        if (!anyOpen) { setModal(true); setAny(true); }
    }
    const handleClose = () => { setModal(false); setAny(false); }

    return (
        <>
            <div className="ide-card" onClick={handleOpen}>
                <div className="ide-tab-bar">
                    <div className="ide-dots">
                        <span className="idot idot-red"></span>
                        <span className="idot idot-yellow"></span>
                        <span className="idot idot-green"></span>
                    </div>
                    <span className="ide-filename">{data.title}</span>
                    <span className="ide-lang-badge" style={{ color: meta.color }}>
                        <span className="lang-dot" style={{ background: meta.color }}></span>
                        {meta.lang}
                    </span>
                </div>
                <div className="ide-body">
                    <div className="ide-comment">
                        <span className="comment-line"><span className="comment-sym">/**</span></span>
                        <span className="comment-line">
                            <span className="comment-sym">&nbsp;*</span>
                            <span className="comment-text"> {data.initialDescription}</span>
                        </span>
                        <span className="comment-line"><span className="comment-sym">&nbsp;*/</span></span>
                    </div>
                    <div className="ide-preview-wrap">
                        <img src={image} alt={data.title} className="ide-preview" />
                    </div>
                    <div className="ide-footer">
                        <span className="ide-open-btn">
                            <i className="bi bi-play-fill"></i> open project
                        </span>
                    </div>
                </div>
            </div>
            <ProjectDetails data={data} image={image} onClose={handleClose} modal={modal} />
        </>
    )
}
