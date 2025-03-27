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
            <div className='advanced-description px-5 pt-3 mx-auto'>
                <p>
                    {data.advancedDescription}
                </p>
            </div>
            <div className='d-flex justify-content-center icon-details'>
                <div>
                    <i class="bi bi-github github"></i>
                </div>
                {data.videoPath && (
                    <a>
                        <i class="bi bi-youtube youtube"></i>
                    </a>
                )
                }
            </div>
        </div>
    )
}
