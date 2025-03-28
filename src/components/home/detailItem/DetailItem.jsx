import React from 'react'
import './DetailItem.css'

export default function DetailItem({ title, date, place, description }) {
    return (
        <div className='detailitem px-3 py-1 rounded'>
            <div className='d-flex flex-column text-left pb-3 pt-2 w-100'>
                <div className='text-date'>
                    <div className='title-detail-item text-left'>
                        <h3 className='title mx-0 px-0'>{title}</h3>
                        <h4 className='place rounded'>{place}</h4>
                    </div>
                    <p className='my-auto date'>{date}</p>
                </div>
                <p className='description mx-0 px-0'>{description}</p>
            </div>
        </div>
    )
}
