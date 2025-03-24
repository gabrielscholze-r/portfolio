import React from 'react'
import './DetailItem.css'

export default function DetailItem({title, date, place, description}) {
    return (
        <div className='w-100 detailitem px-3 py-1 rounded'>
            <div className='d-flex flex-column text-left pb-3 pt-2 w-100'>
                <div className='d-flex align-items-center justify-content-between'>
                    <h3 className='title'>{title}</h3>
                    <p className='my-auto date'>{date}</p>
                </div>
                <h4 className='place rounded'>{place}</h4>
                <p className='description'>{description}</p>
            </div>
        </div>
    )
}
