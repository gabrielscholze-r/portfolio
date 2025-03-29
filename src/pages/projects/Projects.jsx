import React, { useState } from 'react'
import data from '../../assets/projects/projects.json'
import ProjectItem from '../../components/projects/projectItem/ProjectItem'
import './Projects.css'
export default function Projects() {
  const [anyOpen, setAny] = useState(false)
  return (
    <div className='w-100 py-5 body-no-scroll'>
      <div className='text-center'>
        <h2 className='projetos'>Projetos</h2>
      </div>
      <div className='projectList w-75 mx-auto'>
        {data.map((item,index) => {
          return (
            <ProjectItem data={item} key={index} anyOpen={anyOpen} setAny={setAny}/>
          )
        })}
      </div>
    </div>
  )
}
