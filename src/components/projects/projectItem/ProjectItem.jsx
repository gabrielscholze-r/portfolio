import React, { useState } from 'react'
import imageMapper from '../../../util/projectImagesImport'
import './ProjectItem.css'
import ProjectDetails from '../projectDetails/ProjectDetails'

export default function ProjectItem({ data }) {
    const [modal, setModal] = useState(false)

    const image = imageMapper(data.imgPath)

    return (
        <>
            <div className='item rounded' onClick={() => setModal(true)}>
                <img src={image} alt={data.title} className='rounded' />
                <div className="title">{data.title}</div>
                <div className="description">{data.initialDescription}</div>
            </div>
            {modal && (
                <div className="modal-overlay">
                    <ProjectDetails data={data} image={image} onClose={() => setModal(false)} />
                </div>
            )
            }
        </>
    )
}