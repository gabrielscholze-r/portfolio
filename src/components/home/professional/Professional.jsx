import React from 'react'
import DetailItem from '../detailItem/DetailItem'

import './Professional.css'

export default function Professional() {
    return (
        <div className="w-100 text-center pt-5">
            <h1 className='sector-profession py-5'>Professional Experience</h1>
            <div className="w-50 d-flex justify-content-evenly mx-auto align-items-center d-flex flex-column gap-2">
                <DetailItem title={"Fullstack Developer"} date={"March 2023 - Present"} place={"Sumersoft"} description={".NET & React Fullstack Developer"} advancedDescription={["Led the development and maintenance of LMS, a web-based loan management system, ensuring high performance and reliability across the .NET (C#) backend and React.js  frontend","Implemented database adjustments to enhance data consistency, significantly reducing reporting discrepancies","Engineered automated weekly/monthly reports, greatly improving data accessibility and eliminating extensive manual compilation efforts for key stakeholders. Also identified and resolved critical errors in existing reports, boosting data accuracy and reliability for business analysis"]}/>
                <DetailItem title={"Backend Intern"} date={"June 2022 - February 2023"} place={"Celepar"} description={"Java Backend Development"} advancedDescription={["Contributed to the development and testing of internal management systems, primarily using Java (JSP) and PostgreSQL for state-level applications. Focused on implementing bug fixes and maintaining functionalities","Significantly advanced my Java backend development skills and sharpened key soft skills through focused training, directly improving my contributions to team and project success","Gained practical experience with the MVC design pattern, contributing to a robust codebase while understanding its principles in real-world applications"]}/>
            </div>
        </div>
    )
}
