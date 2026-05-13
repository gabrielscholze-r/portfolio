import React, { useState, useEffect } from 'react'
import './ProjectDetails.css'

export default function ProjectDetails({ data, onClose, image, modal, meta }) {
    const [lightbox, setLightbox] = useState(false)

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') { if (lightbox) setLightbox(false); else onClose(); } }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [lightbox, onClose])

    const sentences = data.advancedDescription
        .split(/\. (?=[A-Z])/)
        .map((s, i, arr) => (i < arr.length - 1 ? s + '.' : s))

    return (
        <>
            <div
                className={`pd-backdrop ${modal ? 'pd-backdrop--open' : ''}`}
                onClick={onClose}
            />
            <div className={`pd-window ${modal ? 'pd-window--open' : ''}`}>

                {/* ── Title bar ── */}
                <div className="pd-titlebar">
                    <div className="ide-dots">
                        <span className="idot idot-red"  onClick={onClose} style={{ cursor: 'pointer' }} />
                        <span className="idot idot-yellow" />
                        <span className="idot idot-green"  />
                    </div>
                    <div className="pd-tabs">
                        <span className="pd-tab-active">
                            <i className="bi bi-file-code" />
                            {data.title}.md
                        </span>
                    </div>
                    <span className="pd-close-x" onClick={onClose}>✕</span>
                </div>

                {/* ── Body ── */}
                <div className="pd-body">

                    {/* Left – code view */}
                    <div className="pd-code-panel">
                        <div className="pd-line">
                            <span className="pd-kw">const</span>
                            {' '}
                            <span className="pd-var">project</span>
                            {' '}
                            <span className="pd-op">=</span>
                            {' {'}
                        </div>

                        <div className="pd-line pd-i1">
                            <span className="pd-prop">name</span>
                            <span className="pd-op">: </span>
                            <span className="pd-str">"{data.title}"</span>
                            <span className="pd-op">,</span>
                        </div>

                        <div className="pd-line pd-i1">
                            <span className="pd-prop">lang</span>
                            <span className="pd-op">: </span>
                            <span className="lang-dot pd-lang-dot" style={{ background: meta?.color }} />
                            <span className="pd-str">"{meta?.lang}"</span>
                            <span className="pd-op">,</span>
                        </div>

                        <div className="pd-line pd-i1">
                            <span className="pd-prop">description</span>
                            <span className="pd-op">:</span>
                        </div>

                        <div className="pd-line pd-i2">
                            <span className="pd-cmt">/**</span>
                        </div>
                        {sentences.map((s, i) => (
                            <div key={i} className="pd-line pd-i2">
                                <span className="pd-cmt"> * {s.trim()}</span>
                            </div>
                        ))}
                        <div className="pd-line pd-i2">
                            <span className="pd-cmt"> */</span>
                        </div>

                        <div className="pd-line">{'}'}</div>
                    </div>

                    {/* Right – preview */}
                    <div className="pd-preview-panel">
                        <span className="pd-preview-label">{'// preview'}</span>
                        <div className="pd-img-wrap" onClick={() => setLightbox(true)} title="Expand image">
                            <img src={image} alt={data.title} className="pd-img" />
                            <div className="pd-img-overlay">
                                <i className="bi bi-arrows-fullscreen" />
                            </div>
                        </div>

                        <div className="pd-links">
                            {data.github && (
                                <a href={data.github} target="_blank" rel="noreferrer" className="pd-link">
                                    <i className="bi bi-github" /> repository
                                </a>
                            )}
                            {data.videoPath && (
                                <a href={data.videoPath} target="_blank" rel="noreferrer" className="pd-link pd-link--yt">
                                    <i className="bi bi-youtube" /> demo
                                </a>
                            )}
                            {data.articlePath && (
                                <a href={data.articlePath} target="_blank" rel="noreferrer" className="pd-link">
                                    <i className="bi bi-file-earmark-text" /> article
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* ── Status bar ── */}
                <div className="pd-statusbar">
                    <span className="pd-status-item">
                        <span className="lang-dot" style={{ background: meta?.color }} />
                        {meta?.lang}
                    </span>
                </div>
            </div>
            {/* ── Lightbox ── */}
            {lightbox && (
                <div className="pd-lightbox" onClick={() => setLightbox(false)}>
                    <img src={image} alt={data.title} className="pd-lightbox-img" onClick={e => e.stopPropagation()} />
                    <span className="pd-lightbox-close" onClick={() => setLightbox(false)}>✕</span>
                </div>
            )}
        </>
    )
}
