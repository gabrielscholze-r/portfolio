import { useState } from "react";
import "./DevlogItem.css";
import DevlogDetail from "../devlogDetail/DevlogDetail";
import DevlogTag from "../devlogTag/DevlogTag.jsx";
import { formatDates, localize } from "../../../util/util.js";
import { useLanguage } from "../../../context/Language.jsx";

function fakeHash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        h = Math.imul(31, h) + str.charCodeAt(i) | 0;
    }
    return Math.abs(h).toString(16).padStart(7, '0').slice(0, 7);
}

export default function DevlogItem({ data: original, anyOpen, setAny, isLast }) {
    const { lang, t } = useLanguage();
    const data = localize(original, lang);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        if (!anyOpen) { setAny(true); setOpen(true); }
    };
    const handleClose = () => { setAny(false); setOpen(false); };

    const hash = fakeHash(original.title);

    return (
        <>
            <div className="commit-row" onClick={handleOpen}>
                <div className="commit-gutter">
                    <div className={`commit-dot ${data.isPortfolioChange ? "commit-dot--portfolio" : ""}`}></div>
                    {!isLast && <div className="commit-line"></div>}
                </div>
                <div className="commit-content">
                    <div className="commit-meta">
                        <div className="commit-meta-top">
                            <span className="commit-hash">{hash}</span>
                            <span className="commit-title-text">{data.title}</span>
                        </div>
                        <div className="commit-meta-bottom">
                            <DevlogTag tags={data.tags} />
                            {data.isPortfolioChange && (
                                <span className="commit-portfolio-badge">
                                    <i className="bi bi-globe2" /> portfolio
                                </span>
                            )}
                        </div>
                        <span className="commit-date">{formatDates(data.date, lang)}</span>
                    </div>
                    <p className="commit-desc">{data.description}</p>
                    <span className="commit-expand">
                        <i className="bi bi-chevron-right"></i> {t("devlog.readMore")}
                    </span>
                </div>
            </div>
            <DevlogDetail data={data} onClose={handleClose} open={open} />
        </>
    );
}
