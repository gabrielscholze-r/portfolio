import React from 'react'
import data from '../../assets/projects/projects.json'
import ProjectItem from '../../components/projects/projectItem/ProjectItem'
import './Projects.css'
export default function Projects() {
  
  return (
    <div className='w-100'>
      <div className='text-center'>
        <h2 className='projetos'>Projetos</h2>
      </div>
      <div className='projectList w-100'>
        {data.map(item => {
          return (
            <ProjectItem data={item}/>
          )
        })}
      </div>
    </div>
  )
}
