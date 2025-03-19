import React from 'react'
import './Home.css'
import Tooltip from '../../components/tooltip/Tooltip'
import Skills from '../../components/skills/Skills'
import Professional from '../../components/professional/Professional'
export default function Home() {

  
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
      <hr className='mx-5' style={{ color: "var(--text-color)" }} />
      <Skills/>
      <hr className='mx-5' style={{ color: "var(--text-color)" }} />
      <Professional/>
    </div >
  )
}
