import React, { useEffect } from 'react'
import './PortfolioModal.css'
import { useLanguage } from '../../context/Language.jsx'

export default function PortfolioModal({ info, close }) {
    const { t } = useLanguage()

    useEffect(() => {
        document.body.style.overflow = info ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [info])

    return (
        <>
        <div className={`modal-backdrop ${info ? 'open' : ''}`} onClick={close} />
        <div className={`portfolio-modal ${info ? 'open' : ''}`}>
            <div onClick={close} className='close-modal ms-auto mx-4'>
                <p>✕</p>
            </div>
            <div className='info-content'>
                <div className="sector-portfolio my-3">
                    <i className="bi bi-code-slash me-2"></i>
                    {t('modal.builtWith')} <strong>React.JS</strong>
                </div>

                <div className="deploy-section mt-4">
                    <h5><i className="bi bi-cloud-upload me-2"></i>{t('modal.deploy')}</h5>
                    <div className="deploy-item">
                        <i className="bi bi-droplet-fill text-primary me-2"></i>
                        {t('modal.hosting')}
                    </div>
                    <div className="deploy-item">
                        <i className="bi bi-server text-success me-2"></i>
                        {t('modal.server')}
                    </div>
                    <div className="deploy-item">
                        <i className="bi bi-gear-wide-connected text-warning me-2"></i>
                        {t('modal.cicd')}
                    </div>
                </div>

                <div className="infra-details mt-4">
                    <h5><i className="bi bi-diagram-3 me-2"></i>{t('modal.workflow')}</h5>
                    <ol>
                        <li>{t('modal.step1')}</li>
                        <li>{t('modal.step2')}</li>
                        <li>{t('modal.step3')}</li>
                        <li>{t('modal.step4')}</li>
                    </ol>
                </div>

                <div className="sector-portfolio2 mt-5">{t('modal.more')}</div>
                <a className='project-link-info my-3' href="https://github.com/gabrielscholze-r/portfolio" target='_blank'>
                    <i className="bi bi-github github-info"></i>
                </a>
            </div>
        </div>
        </>
    )
}
