import React from 'react'
import './Certifications.css'

const certs = [
    { title: "C",                        org: "Alura",  link: "https://drive.google.com/drive/folders/15nOx8T03qNhsya07zfYaFcPzSVhzWmIR?usp=sharing" },
    { title: "iOS (Swift)",              org: "PUC-PR", link: "https://drive.google.com/file/d/1P0wFHipgHzN_PpwbEWzpMpHATcVwnaYX/view?usp=sharing" },
    { title: "Angular",                  org: "PUC-PR", link: "https://drive.google.com/drive/folders/1Jd-C6IpZTTbjKbwldcXbKgih0TDMwLmu?usp=sharing" },
    { title: "SQL Server",               org: "Alura",  link: "https://drive.google.com/drive/folders/1OMsfnUrNPfnZ-ofHPX8EoIf7PzAKxUoJ?usp=sharing" },
    { title: "UI & Mobile Guidelines",   org: "PUC-PR", link: "https://drive.google.com/file/d/1ys7eibXIFNHoL4luYXu22hvxFLfc2v7S/view?usp=sharing" },
    { title: "UX & Interaction Design",  org: "PUC-PR", link: "https://drive.google.com/file/d/1v5MVJuf3EPCNam2OXLAtuT6ecsuEVPlo/view?usp=sharing" },
    { title: "C++",                      org: "Alura",  link: "https://drive.google.com/drive/folders/1N-NJwDdqM0J7F4s-yhGefXPNEQzZhmnr?usp=sharing" },
    { title: "React.js",                 org: "Alura",  link: "https://drive.google.com/drive/folders/1-htZ7H8fQMAgsD4oVLjmbCdbTfHVx3uF?usp=sharing" },
    { title: "Node.js",                  org: "Alura",  link: "https://drive.google.com/file/d/17NC7Hx25VmdI6OvYMnc9mqn-tA0mTaGM/view?usp=sharing" },
]

export default function Certifications() {
    return (
        <section className="certs-section">
            <div className="section-cmd-header">
                <span className="dollar">$</span>
                <span className="cmd-text"> ls certifications/</span>
            </div>
            <div className="certs-grid">
                {certs.map((c, i) => (
                    <a
                        key={i}
                        href={c.link}
                        target="_blank"
                        rel="noreferrer"
                        className="cert-card"
                    >
                        <div className="cert-icon">
                            <i className="bi bi-patch-check-fill"></i>
                        </div>
                        <div className="cert-info">
                            <span className="cert-title">{c.title}</span>
                            <span className="cert-org">{c.org}</span>
                        </div>
                        <i className="bi bi-arrow-up-right cert-arrow"></i>
                    </a>
                ))}
            </div>
        </section>
    )
}
