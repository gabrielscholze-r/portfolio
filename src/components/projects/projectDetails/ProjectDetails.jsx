import React, { useEffect } from 'react'
import './ProjectDetails.css'

export default function ProjectDetails({ data, onClose, image, modal }) {
    useEffect(() => {
        if (modal) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.classList.add('body-no-scroll');
            
            return () => {
                document.body.classList.remove('body-no-scroll');
                document.body.style.position = '';
                document.body.style.top = '';
                window.scrollTo(0, scrollY);
            };
        }
    }, [modal]);
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
                    <i class="bi bi-github github"></i>
                </a>
                {data.videoPath && (
                    <a className='project-link' href={data.videoPath} target='_blank'>
                        <i class="bi bi-youtube youtube"></i>
                    </a>
                )
                }
            </div>
        </div>
    )
}
