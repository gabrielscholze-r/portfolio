import React from 'react'
import imageMapper from '../../../util/projectImagesImport'
import './ProjectItem.css'

export default function ProjectItem({ data }) {
    const image = imageMapper(data.imgPath)
    return (
        <div>
            <div className="img">
                <img src={image} alt={data.title} />
            </div>
            <div className="title">{data.title}</div>
            <div className="description"></div>
        </div>
    )
}
