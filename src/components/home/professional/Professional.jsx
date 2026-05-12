import React from 'react'
import DetailItem from '../detailItem/DetailItem'
import './Professional.css'

export default function Professional() {
    return (
        <section className="professional-section">
            <div className="section-cmd-header">
                <span className="dollar">$</span>
                <span className="cmd-text"> git log --author="gabriel" --format="fuller"</span>
            </div>
            <div className="git-log-wrapper">
                <DetailItem
                    title="Fullstack Developer"
                    date="March 2023 – Present"
                    place="Sumersoft"
                    description=".NET & React Fullstack Developer"
                    advancedDescription={[
                        "Led the development and maintenance of LMS, a web-based loan management system, ensuring high performance and reliability across the .NET (C#) backend and React.js frontend",
                        "Implemented database adjustments to enhance data consistency, significantly reducing reporting discrepancies",
                        "Engineered automated weekly/monthly reports, greatly improving data accessibility and eliminating extensive manual compilation efforts for key stakeholders",
                    ]}
                />
                <DetailItem
                    title="Backend Intern"
                    date="June 2022 – February 2023"
                    place="Celepar"
                    description="Java Backend Development"
                    advancedDescription={[
                        "Contributed to the development and testing of internal management systems, primarily using Java (JSP) and PostgreSQL for state-level applications",
                        "Significantly advanced Java backend development skills and sharpened key soft skills through focused training",
                        "Gained practical experience with the MVC design pattern, contributing to a robust codebase",
                    ]}
                />
            </div>
        </section>
    )
}
