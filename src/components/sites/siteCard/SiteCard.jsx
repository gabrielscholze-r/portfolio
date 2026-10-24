import React, { useState } from 'react'
import { siteImageMapper, localize } from '../../../util/util'
import { useLanguage } from '../../../context/Language.jsx'
import '../../projects/projectItem/ProjectItem.css'
import './SiteCard.css'
import SiteDetails from '../siteDetails/SiteDetails'

export default function SiteCard({ data: original, index }) {
    const { lang, t } = useLanguage()
    const data = localize(original, lang)
    const [modal, setModal] = useState(false)
    const [imgLoaded, setImgLoaded] = useState(false)
    const cover = siteImageMapper(data.images.cover)
    const mobile = siteImageMapper(data.images.mobile)
    const domain = data.url.replace(/^https?:\/\//, '')
    const eager = index < 2

    return (
        <>
            <article className="site-card">
                <div className="browser" onClick={() => setModal(true)} title={t("sites.openCase")}>
                    <div className="browser-bar">
                        <div className="ide-dots">
                            <span className="idot idot-red"></span>
                            <span className="idot idot-yellow"></span>
                            <span className="idot idot-green"></span>
                        </div>
                        <div className="browser-address">
                            <i className="bi bi-lock-fill"></i>
                            <span>{domain}</span>
                        </div>
                    </div>
                    <div className="browser-viewport">
                        {!imgLoaded && <div className="ide-img-skeleton browser-skeleton" />}
                        <img
                            src={cover}
                            alt={`${data.title} ${t("sites.desktopAlt")}`}
                            className={`browser-shot${imgLoaded ? ' browser-shot--loaded' : ''}`}
                            loading={eager ? 'eager' : 'lazy'}
                            fetchPriority={eager ? 'high' : 'auto'}
                            decoding="async"
                            onLoad={() => setImgLoaded(true)}
                        />
                        {mobile && (
                            <div className="phone">
                                <img src={mobile} alt={`${data.title} ${t("sites.mobileAlt")}`} loading="lazy" decoding="async" />
                            </div>
                        )}
                    </div>
                </div>

                <div className="site-info">
                    <span className="site-meta">
                        <span className="comment-sym">// </span>{data.niche} · {data.year}
                    </span>
                    <h2 className="site-title">{data.title}</h2>
                    <p className="site-desc">{data.initialDescription}</p>
                    <div className="site-stack">
                        {data.stack.map(s => <span key={s} className="site-chip">{s}</span>)}
                    </div>
                    <div className="site-actions">
                        <a href={data.url} target="_blank" rel="noreferrer" className="site-btn site-btn--primary">
                            <i className="bi bi-box-arrow-up-right" /> {t("sites.visit")}
                        </a>
                        <button className="site-btn" onClick={() => setModal(true)}>
                            <i className="bi bi-file-earmark-text" /> {t("sites.caseStudy")}
                        </button>
                    </div>
                </div>
            </article>
            <SiteDetails data={data} domain={domain} modal={modal} onClose={() => setModal(false)} />
        </>
    )
}
