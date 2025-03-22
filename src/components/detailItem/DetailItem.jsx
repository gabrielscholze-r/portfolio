import React from 'react'
import './DetailItem.css'

export default function DetailItem(props) {
    return (
        <div className='w-100'>
            <hr className='mx-5' style={{ color: "var(--text-color)" }} />
            <div className='d-flex flex-column text-left pb-3 pt-2 w-100'>
                <div className='d-flex align-items-center justify-content-between'>
                    <h3 className='title'>{props.title}</h3>
                    <p className='my-auto date'>{props.date}</p>
                </div>
                <h4 className='place rounded'>{props.place}</h4>
                <p className='description'>{props.description}</p>
            </div>
        </div>
    )
}
