import React from 'react'
import './PortfolioModal.css'
export default function PortfolioModal({ info, close }) {

    return (
        <div className={`portfolio-modal ${info ? 'open' : ''}`}>
            <div onClick={close} className='close-modal ms-auto mx-4'>
                <p>✕</p>
            </div>
            <div className='info-content'>
                <div className="sector-portfolio my-3">
                    <i className="bi bi-code-slash me-2"></i>
                    Este portfólio foi desenvolvido utilizando <strong>React.JS</strong>
                </div>

                <div className="deploy-section mt-4">
                    <h5><i className="bi bi-cloud-upload me-2"></i>Estratégia de Deploy</h5>
                    <div className="deploy-item">
                        <i className="bi bi-droplet-fill text-primary me-2"></i>
                        Hospedagem: Digital Ocean Droplet (Ubuntu 22.04)
                    </div>
                    <div className="deploy-item">
                        <i className="bi bi-server text-success me-2"></i>
                        Web Server: Caddy 2.6 com HTTPS automático
                    </div>
                    <div className="deploy-item">
                        <i className="bi bi-gear-wide-connected text-warning me-2"></i>
                        CI/CD: GitHub Actions para deploy automático
                    </div>
                </div>

                <div className="infra-details mt-4">
                    <h5><i className="bi bi-diagram-3 me-2"></i>Fluxo de Atualização</h5>
                    <ol>
                        <li>Push para branch main no GitHub</li>
                        <li>GitHub Actions executa build</li>
                        <li>Arquivos transferidos via SCP</li>
                        <li>Caddy serve nova versão instantaneamente</li>
                    </ol>
                </div>

                <div className="sector-portfolio2 mt-5">Para mais informações sobre projeto, acesse o github abaixo</div>
                <a className='project-link-info my-3' href="https://github.com/gabrielscholze-r/portfolio" target='_blank'>
                    <i className="bi bi-github github-info"></i>
                </a>
            </div>
        </div>
    )
}
