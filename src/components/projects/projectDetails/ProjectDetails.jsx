import React from 'react'
import './ProjectDetails.css'

export default function ProjectDetails({ data, onClose, image, modal }) {

    return (
        <div className={`projectDetails ${modal ? "open" : ""}`}>
            <div onClick={onClose} className='close-modal ms-auto mx-4'>
                <p>✕</p>
            </div>
            <div className='sector'>
                <h2 className='text-center'>
                    {data.title}
                </h2>
            </div>
            <div className='image-details mx-auto'>
                <img src={image} alt={data.title} />
            </div>
            <div className='advanced-description pt-3 mx-auto'>
                <p>
                    {data.advancedDescription}
                </p>
            </div>
            <div className='d-flex justify-content-evenly icon-details py-3 w-100'>
                <a className='project-link' href={data.github} target='_blank'>
                    <i className="bi bi-github github"></i>
                </a>
                {data.videoPath && (
                    <a className='project-link' href={data.videoPath} target='_blank'>
                        <i className="bi bi-youtube youtube"></i>
                    </a>
                )
                }
            </div>
        </div>
    )
}
