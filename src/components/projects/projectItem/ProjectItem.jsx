import React, { useState } from 'react'
import imageMapper from '../../../util/util'
import './ProjectItem.css'
import ProjectDetails from '../projectDetails/ProjectDetails'

export default function ProjectItem({ data, anyOpen, setAny}) {
    const [modal, setModal] = useState(false)
    const image = imageMapper(data.imgPath)

    const handleOpen = () => {
        if (!anyOpen) {
            setModal(true);
            setAny(true)
        }
    }
    const handleClose = () => {
        setModal(false);
        setAny(false)

    }
    return (
        <>
            <div className='item rounded' onClick={handleOpen}>
                <img src={image} alt={data.title} className='rounded' />
                <div className="title">{data.title}</div>
                <div className="description">{data.initialDescription}</div>
            </div>
            <ProjectDetails data={data} image={image} onClose={handleClose} modal={modal} />
        </>
    )
}