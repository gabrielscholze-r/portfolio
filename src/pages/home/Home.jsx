import React, { useState } from 'react'
import './Home.css'
import Tooltip from '../../components/tooltip/Tooltip'
export default function Home() {

  const [hover, setHover] = useState([false, ""])
  return (
    <div>
      <div className="intro text-center w-75 mx-auto py-5">
        <h2 className='py-4'>
          Gabriel Scholze Rosa
        </h2>
        <h3 className='py-4'>
          Programador Fullstack
        </h3>
        <p className='py-4'>
          Sou desenvolvedor full-stack com cerca de três anos de experiência, atuando principalmente com C# (.NET) e React.js. Atualmente, trabalho na manutenção e evolução de um projeto para clientes nos Estados Unidos. Sou formado em Ciência da Computação (2024) e estou cursando uma pós-graduação em Desenvolvimento de Aplicativos Móveis para expandir meus conhecimentos e aprofundar minha atuação no mercado de tecnologia
        </p>
      </div>
      <hr className='mx-5' />
      <div>
        <div className="row techs text-center w-75 p-5 mx-auto justify-content-center">
          <h2 className='pt-2 pb-5 techs-title'>Skills</h2>
          <div
            className='col-sm-auto devicon-col d-flex react'
            style={{ position: 'relative' }}
            onMouseOver={() => setHover([true, "react"])}
            onMouseOut={() => setHover([false, ''])}
          >
            <i className="devicon-react-original-wordmark devicon"></i>
            <Tooltip hover={hover} title={"React.js"} list={["Construção de SPAs"]} name={'react'} exp={80}/>
          </div>
          <div className='col-sm-auto devicon-col'>
            <i className="devicon-csharp-plain-wordmark devicon"></i>
          </div>
          <div className='col-sm-auto devicon-col'>
            <i className="devicon-java-plain-wordmark devicon"></i>
          </div>
        </div>
        <div className="row techs text-center w-75 p-5 mx-auto justify-content-center">
          <div className='col-sm-auto devicon-col'>
            <i className="devicon-csharp-plain-wordmark devicon"></i>
          </div>
          <div className='col-sm-auto devicon-col'>
            <i className="devicon-java-plain-wordmark devicon"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
