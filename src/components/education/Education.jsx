import React from 'react'
import DetailItem from '../detailItem/DetailItem'

export default function Education() {
  return (
      <div className="w-100 text-center pt-5">
        <h1 className='sector py-5'>Formação Acadêmica</h1>
        <div className="w-50 d-flex justify-content-evenly mx-auto align-items-center d-flex flex-column">
          <DetailItem title={"Ensino Médio"} date={"2017 - 2019"} place={"Colégio Estadual do Paraná"} description={"Ensino Médio Regular"} />
          <DetailItem title={"Ciência da Computação"} date={"2020 - 2023"} place={"PUC-PR"} description={"Bacharelado em Ciência da Computação"} />
          <DetailItem title={"Desenvolvimento de Aplicativos Móveis"} date={"Em andamento"} place={"PUC-PR"} description={"Pós-Graduação em Desenvolvimento de Aplicativos Móveis"} />
        </div>
      </div>

  )
}
