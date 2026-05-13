import { useState } from "react";
import "./DevlogItem.css";
import DevlogDetail from "../devlogDetail/DevlogDetail";
import DevlogTag from "../devlogTag/DevlogTag.jsx";
import { formatDates } from "../../../util/util.js";

function fakeHash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        h = Math.imul(31, h) + str.charCodeAt(i) | 0;
    }
    return Math.abs(h).toString(16).padStart(7, '0').slice(0, 7);
}

export default function DevlogItem({ data, anyOpen, setAny, isLast }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        if (!anyOpen) { setAny(true); setOpen(true); }
    };
    const handleClose = () => { setAny(false); setOpen(false); };

    const hash = fakeHash(data.title);

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
                        <span className="commit-date">{formatDates(data.date)}</span>
                    </div>
                    <p className="commit-desc">{data.description}</p>
                    <span className="commit-expand">
                        <i className="bi bi-chevron-right"></i> read more
                    </span>
                </div>
            </div>
            <DevlogDetail data={data} onClose={handleClose} open={open} />
        </>
    );
}
