import React from 'react'
import './DetailItem.css'

export default function DetailItem({ title, date, place, description, advancedDescription = [], file = []}) {
    return (
        <div className='detailitem px-3 py-1 rounded'>
            <div className='d-flex flex-column text-left pt-2 w-100'>
                <div className='text-date'>
                    <div className='title-detail-item text-left'>
                        <h3 className='title mx-0 px-0'>{title}</h3>
                        <h4 className='place rounded'>{place}</h4>
                    </div>
                    <p className='my-auto date'>{date}</p>
                </div>
                <p className='description-detailitem mx-0 px-0'>{description}</p>

            </div>
            <div className="w-100">
                {advancedDescription.length > 0 && (
                    <ul className="job-description-list">
                        {advancedDescription.map((item, index) => (
                            <li key={index} className="job-description mb-2">
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
                {
                    file.length > 0 && (
                        <a href={`/assets/${file[0]}`} download className="btn btn-outline-primary">
                            <i className="bi bi-download me-2"></i>
                            {file[1]}
                        </a>
                    // <a href="/assets/Cv.pdf" download className="btn btn-outline-primary">
                        //                     <i className="bi bi-file-earmark-arrow-down me-2"></i>
                        //                     Download CV
                        //                 </a>
                    )
                }
            </div>

        </div>
    )
}
