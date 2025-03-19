import React from 'react'
import './Professional.css'
export default function Professional() {
    return (
        <div className="work-experienca w-100 text-center pt-5">
            <h1 className='sector py-5'>Experiência Profissional</h1>
            <div className="w-50 d-flex justify-content-evenly mx-auto align-items-center d-flex flex-column">
                <hr className='mx-5' style={{ color: "var(--text-color)" }} />
                <div className='description d-flex flex-column text-left pb-5 w-100'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h3 className='title'>Estagiário de Administração</h3>
                        <p className='my-auto date'>01/2019 - 12/2019</p>
                    </div>
                    <h4 className='place rounded'>Tribunal de Justiça do Paraná</h4>
                    <p className='description'>Gerenciamento de inventário, comunicação entre setores e emissão de ofícios.</p>
                </div>
                <hr className='mx-5' style={{ color: "var(--text-color)" }} />
                <div className='description d-flex flex-column text-left pb-5 w-100'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h3 className='title'>Estagiário de Desenvolvimento Fullstack</h3>
                        <p className='my-auto date'>06/2022 - 02/2023</p>
                    </div>
                    <h4 className='place rounded'>Celepar</h4>
                    <p className='description'>Desenvolvimento Fullstack em Java (JSP)</p>
                </div>
                <hr className='mx-5' style={{ color: "var(--text-color)" }} />
                <div className='description d-flex flex-column text-left pb-5 w-100'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h3 className='title'>Estagiário de Desenvolvimento Fullstack</h3>
                        <p className='my-auto date'>03/2023 - 02/2024</p>
                    </div>
                    <h4 className='place rounded'>Sumersoft</h4>
                    <p className='description'>Estagio em Desenvolviemento Fullstack .NET e React.js</p>
                </div>
                <div className='description d-flex flex-column text-left pb-5 w-100'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h3 className='title'>Desenvolvedor Fullstack</h3>
                        <p className='my-auto date'>03/2024 - Atualmente</p>
                    </div>
                    <h4 className='place rounded'>Sumersoft</h4>
                    <p className='description'>Desenvolviemento Fullstack .NET e React.js</p>
                </div>
            </div>
        </div>
    )
}
