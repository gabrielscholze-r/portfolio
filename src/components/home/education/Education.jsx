import React from 'react'
import DetailItem from '../detailItem/DetailItem'
import './Education.css'

export default function Education() {
  return (
    <section className="education-section">
      <div className="section-cmd-header">
        <span className="dollar">$</span>
        <span className="cmd-text"> ls -la education/</span>
      </div>
      <div className="education-list">
        <DetailItem
          title="Mobile Application Development"
          date="2024 – 2026"
          place="PUC-PR"
          description="Postgraduate Degree in Mobile Application Development"
        />
        <DetailItem
          title="Scientific Initiation (PIBIC)"
          date="2021"
          place="PUC-PR"
          description="Undergraduate Research — Process Mining"
          file={["FinalReportPIBIC-GabrielScholzeRosa.pdf", "Download Report"]}
        />
        <DetailItem
          title="Computer Science"
          date="2020 – 2023"
          place="PUC-PR"
          description="Bachelor's Degree in Computer Science"
        />
      </div>
    </section>
  )
}
