import React, { useEffect } from "react";
import "./DevlogDetail.css";
import DevlogTag from "../devlogTag/DevlogTag.jsx";

export default function DevlogDetail({ data, open, onClose }) {
    useEffect(() => {
        const onKey = (e) => { if (e.key === "Escape") onClose(); };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    const slug = data.title.toLowerCase().replace(/\s+/g, "-");

    const headerLines = [
        { type: "heading", content: data.title },
        { type: "blank" },
        { type: "date",    content: data.date },
        { type: "blank" },
        { type: "tags" },
        { type: "blank" },
        { type: "divider" },
        { type: "blank" },
    ];

    const paraLines = data.paragraphs.flatMap((p, i) => [
        { type: "para", content: p },
        ...(i < data.paragraphs.length - 1 ? [{ type: "blank" }] : []),
    ]);

    const lines = [...headerLines, ...paraLines];

    return (
        <>
            <div
                className={`dd-backdrop ${open ? "dd-backdrop--open" : ""}`}
                onClick={onClose}
            />
            <div className={`dd-window ${open ? "dd-window--open" : ""}`}>

                {/* Title bar */}
                <div className="dd-titlebar">
                    <div className="dd-dots">
                        <span className="dd-dot dd-dot-red" onClick={onClose} />
                        <span className="dd-dot dd-dot-yellow" />
                        <span className="dd-dot dd-dot-green" />
                    </div>
                    <div className="dd-tabs">
                        <span className="dd-tab-active">
                            <i className="bi bi-markdown" />
                            {slug}.md
                        </span>
                    </div>
                    <span className="dd-close-x" onClick={onClose}>✕</span>
                </div>

                {/* Editor body */}
                <div className="dd-body">
                    {lines.map((line, i) => (
                        <div key={i} className="dd-editor-line">
                            <span className="dd-ln">{i + 1}</span>
                            <span className="dd-line-content">
                                {line.type === "heading" && (
                                    <>
                                        <span className="dd-kw">#</span>
                                        {" "}
                                        <span className="dd-heading">{line.content}</span>
                                    </>
                                )}
                                {line.type === "date" && (
                                    <span className="dd-cmt">{"// "}{line.content}</span>
                                )}
                                {line.type === "tags" && (
                                    <DevlogTag tags={data.tags} />
                                )}
                                {line.type === "divider" && (
                                    <span className="dd-op">---</span>
                                )}
                                {line.type === "para" && (
                                    <span className="dd-para">{line.content}</span>
                                )}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Status bar */}
                <div className="dd-statusbar">
                    <span className="dd-status-item">
                        <i className="bi bi-journal-code" />
                        devlog
                    </span>
                    <span className="dd-status-item">
                        <i className="bi bi-calendar3" />
                        {data.date}
                    </span>
                </div>
            </div>
        </>
    );
}
