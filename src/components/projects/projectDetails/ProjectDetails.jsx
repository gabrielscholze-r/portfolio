import React from 'react'
import './ProjectDetails.css'

export default function ProjectDetails({ data, onClose, image, modal}) {


    return (
        <div className={`projectDetails ${modal ? "open":""}`}>
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
        </div>
    )
}
