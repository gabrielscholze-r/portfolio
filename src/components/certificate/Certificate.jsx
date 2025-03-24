import React from 'react'
import './Certificate.css'


export default function Certificate({ title, org, link }) {
    return (
        <div className='w-50 d-flex align-items-center mx-auto flex-column justify-content-between certificate p-3 rounded'>
            <div className='d-flex flex-column align-items-center gap-2'>
                <h2 className='my-auto title text-center'>{title}</h2>
                <h3 className='org rounded'>{org}</h3>
            </div>
            <div className='link d-flex flex-column text-center'>
                <a href={link} target='_blank' className='certificate-link'>
                    <i className="icon-go bi bi-arrow-right-circle-fill "></i>
                </a>
            </div>
        </div>
    )
}
