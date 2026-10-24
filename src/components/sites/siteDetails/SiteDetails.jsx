import React, { useState, useEffect } from 'react'
import { siteImageMapper } from '../../../util/util'
import { useLanguage } from '../../../context/Language.jsx'
import '../../projects/projectDetails/ProjectDetails.css'
import './SiteDetails.css'

function Compare({ before, after, title }) {
    const { t } = useLanguage()
    const [pos, setPos] = useState(50)

    return (
        <div className="sd-compare" style={{ '--pos': `${pos}%` }}>
            <img src={after} alt={`${title}, ${t("sites.newAlt")}`} className="sd-compare-img" />
            <img src={before} alt={`${title}, ${t("sites.oldAlt")}`} className="sd-compare-img sd-compare-before" />
            <span className="sd-compare-line"><span className="sd-compare-handle"><i className="bi bi-arrow-left-right" /></span></span>
            <span className="sd-compare-tag sd-compare-tag--before">{t("sites.before")}</span>
            <span className="sd-compare-tag sd-compare-tag--after">{t("sites.after")}</span>
            <input
                type="range"
                min="0"
                max="100"
                value={pos}
                onChange={e => setPos(Number(e.target.value))}
                className="sd-compare-range"
                aria-label={t("sites.compareLabel")}
            />
        </div>
    )
}

export default function SiteDetails({ data, domain, modal, onClose }) {
    const { t } = useLanguage()
    const [view, setView] = useState('desktop')
    const [shot, setShot] = useState(0)
    const [lightbox, setLightbox] = useState(null)

    const gallery = data.images.gallery.map(siteImageMapper)
    const mobile = siteImageMapper(data.images.mobile)
    const before = data.images.before && siteImageMapper(data.images.before)
    const views = ['desktop', 'mobile', ...(before ? ['compare'] : [])]

    useEffect(() => {
        if (!modal) return
        const onKey = (e) => { if (e.key === 'Escape') { if (lightbox) setLightbox(null); else onClose(); } }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [modal, lightbox, onClose])

    const sentences = data.advancedDescription
        .split(/\. (?=\p{Lu})/u)
        .map((s, i, arr) => (i < arr.length - 1 ? s + '.' : s))

    return (
        <>
            <div
                className={`pd-backdrop ${modal ? 'pd-backdrop--open' : ''}`}
                onClick={onClose}
            />
            <div className={`pd-window sd-window ${modal ? 'pd-window--open' : ''}`}>

                <div className="pd-titlebar">
                    <div className="ide-dots">
                        <span className="idot idot-red" onClick={onClose} style={{ cursor: 'pointer' }} />
                        <span className="idot idot-yellow" />
                        <span className="idot idot-green" />
                    </div>
                    <div className="pd-tabs">
                        <span className="pd-tab-active">
                            <i className="bi bi-globe2" />
                            {domain}
                        </span>
                    </div>
                    <span className="pd-close-x" onClick={onClose}>✕</span>
                </div>

                <div className="pd-body">

                    <div className="pd-code-panel">
                        <div className="pd-line">
                            <span className="pd-kw">const</span>
                            {' '}
                            <span className="pd-var">site</span>
                            {' '}
                            <span className="pd-op">=</span>
                            {' {'}
                        </div>

                        <div className="pd-line pd-i1">
                            <span className="pd-prop">client</span>
                            <span className="pd-op">: </span>
                            <span className="pd-str">"{data.title}"</span>
                            <span className="pd-op">,</span>
                        </div>

                        <div className="pd-line pd-i1">
                            <span className="pd-prop">url</span>
                            <span className="pd-op">: </span>
                            <a href={data.url} target="_blank" rel="noreferrer" className="pd-str sd-url">"{data.url}"</a>
                            <span className="pd-op">,</span>
                        </div>

                        <div className="pd-line pd-i1">
                            <span className="pd-prop">stack</span>
                            <span className="pd-op">: [</span>
                            {data.stack.map((s, i) => (
                                <span key={s}>
                                    <span className="pd-str">"{s}"</span>
                                    {i < data.stack.length - 1 && <span className="pd-op">, </span>}
                                </span>
                            ))}
                            <span className="pd-op">],</span>
                        </div>

                        <div className="pd-line pd-i1">
                            <span className="pd-prop">story</span>
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

                        <div className="pd-line pd-i1">
                            <span className="pd-prop">built</span>
                            <span className="pd-op">: [</span>
                        </div>
                        {data.highlights.map((h, i) => (
                            <div key={i} className="pd-line pd-i2 sd-highlight">
                                <span className="pd-str">"{h}"</span>
                                <span className="pd-op">,</span>
                            </div>
                        ))}
                        <div className="pd-line pd-i1">
                            <span className="pd-op">],</span>
                        </div>

                        <div className="pd-line">{'}'}</div>
                    </div>

                    <div className="pd-preview-panel sd-preview-panel">
                        <div className="sd-views" role="tablist">
                            {views.map(v => (
                                <button
                                    key={v}
                                    role="tab"
                                    aria-selected={view === v}
                                    className={`sd-view-btn${view === v ? ' sd-view-btn--active' : ''}`}
                                    onClick={() => setView(v)}
                                >
                                    {t(`sites.view.${v}`)}
                                </button>
                            ))}
                        </div>

                        {view === 'desktop' && (
                            <>
                                <div className="pd-img-wrap" onClick={() => setLightbox(gallery[shot])} title={t("projects.expand")}>
                                    <img src={gallery[shot]} alt={`${data.title} ${t("sites.desktopAlt")} ${shot + 1}`} className="pd-img" />
                                    <div className="pd-img-overlay">
                                        <i className="bi bi-arrows-fullscreen" />
                                    </div>
                                </div>
                                <div className="sd-thumbs">
                                    {gallery.map((img, i) => (
                                        <button
                                            key={i}
                                            className={`sd-thumb${i === shot ? ' sd-thumb--active' : ''}`}
                                            onClick={() => setShot(i)}
                                            aria-label={`${t("sites.screen")} ${i + 1}`}
                                        >
                                            <img src={img} alt="" loading="lazy" />
                                        </button>
                                    ))}
                                </div>
                            </>
                        )}

                        {view === 'mobile' && (
                            <div className="sd-phone-wrap">
                                <div className="sd-phone" onClick={() => setLightbox(mobile)} title={t("projects.expand")}>
                                    <img src={mobile} alt={`${data.title} ${t("sites.mobileAlt")}`} />
                                </div>
                            </div>
                        )}

                        {view === 'compare' && (
                            <>
                                <Compare before={before} after={gallery[0]} title={data.title} />
                                <span className="pd-preview-label">{t("sites.compareHint")}</span>
                            </>
                        )}

                        <div className="pd-links">
                            <a href={data.url} target="_blank" rel="noreferrer" className="pd-link">
                                <i className="bi bi-box-arrow-up-right" /> {t("sites.visitDomain")} {domain}
                            </a>
                            {data.github && (
                                <a href={data.github} target="_blank" rel="noreferrer" className="pd-link">
                                    <i className="bi bi-github" /> {t("projects.repository")}
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="pd-statusbar">
                    <span className="pd-status-item">
                        <span className="lang-dot sd-live-dot" />
                        {t("sites.live")}
                    </span>
                    <span className="pd-status-item">{data.niche} · {data.year}</span>
                </div>
            </div>
            {lightbox && (
                <div className="pd-lightbox" onClick={() => setLightbox(null)}>
                    <img src={lightbox} alt={data.title} className="pd-lightbox-img" onClick={e => e.stopPropagation()} />
                    <span className="pd-lightbox-close" onClick={() => setLightbox(null)}>✕</span>
                </div>
            )}
        </>
    )
}
