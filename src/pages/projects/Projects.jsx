import React from 'react'
import data from '../../assets/projects/projects.json'
import ProjectItem from '../../components/projects/projectItem/ProjectItem'
import './Projects.css'
export default function Projects() {
  
  return (
    <div className='w-100 py-5'>
      <div className='text-center'>
        <h2 className='projetos'>Projetos</h2>
      </div>
      <div className='projectList w-75 mx-auto'>
        {data.map(item => {
          return (
            <ProjectItem data={item}/>
          )
        })}
      </div>
    </div>
  )
}
