import React from 'react'
import './PortfolioModal.css'
export default function PortfolioModal({ info, close }) {

    return (
        <div className={`portfolio-modal ${info ? 'open' : ''}`}>
            <div onClick={close} className='close-modal ms-auto mx-4'>
                <p>✕</p>
            </div>
            <div className='info-content'>
                <div className="sector-portfolio my-3">Este portfólio foi desenvolvido utilizando React.JS</div>
                <div className="sector-portfolio2 my-3">Para mais informações sobre projeto, acesse o github abaixo</div>
                <a className='project-link-info my-3' href="https://github.com/gabrielscholze-r/portfolio" target='_blank'>
                    <i className="bi bi-github github-info"></i>
                </a>
            </div>
        </div>
    )
}
