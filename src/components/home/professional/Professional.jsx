import React from 'react'
import DetailItem from '../detailItem/DetailItem'

import './Professional.css'

export default function Professional() {
    return (
        <div className="w-100 text-center pt-5">
            <h1 className='sector-profession py-5'>Experiência Profissional</h1>
            <div className="w-50 d-flex justify-content-evenly mx-auto align-items-center d-flex flex-column gap-2">
                <DetailItem title={"Desenvolvedor Fullstack"} date={"03/2024 - Atualmente"} place={"Sumersoft"} description={"Desenvolvimento Fullstack .NET e React.js"} />
                <DetailItem title={"Estagiário Fullstack"} date={"03/2023 - 02/2024"} place={"Sumersoft"} description={"Estágio em Desenvolvimento Fullstack .NET e React.js"} />
                <DetailItem title={"Estagiário Backend"} date={"06/2022 - 02/2023"} place={"Celepar"} description={"Desenvolvimento Backend em Java (JSP)"} />
                <DetailItem title={"Estagiário de Administração"} date={"01/2019 - 12/2019"} place={"Tribunal de Justiça do Paraná"} description={"Gerenciamento de inventário, comunicação entre setores e emissão de ofícios."} />
            </div>
        </div>
    )
}
