import React from 'react'
import './Footer.css'
import { toast } from 'react-toastify';

export default function Footer() {
    function copyMail() {
        navigator.clipboard.writeText("gabrielscholze24@gmail.com").then(() => {
            toast.success('Email copied!', {
                position: "bottom-right",
                className: "custom-toast",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
            });
        });
    }

    return (
        <footer className="footer">
            <div className="footer-inner">
                <span className="footer-prompt">
                    <span className="fp-user">gabriel@portfolio</span>
                    <span className="fp-sep">:</span>
                    <span className="fp-dir">~</span>
                    <span className="fp-dollar">$</span>
                </span>
                <div className="footer-links">
                    <a
                        className="footer-link"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/gabriel-scholze-rosa-28b9ab1b2/"
                        title="LinkedIn"
                    >
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <button
                        className="footer-link footer-link-btn"
                        onClick={copyMail}
                        title="Copy email"
                    >
                        <i className="bi bi-envelope-fill"></i>
                    </button>
                    <a
                        href="/assets/Cv.pdf"
                        download
                        className="footer-cv-btn"
                        title="Download CV"
                    >
                        <i className="bi bi-file-earmark-arrow-down"></i>
                        <span>CV</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}
