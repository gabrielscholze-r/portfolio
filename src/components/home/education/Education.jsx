import React from 'react'
import DetailItem from '../detailItem/DetailItem'
import './Education.css'

export default function Education() {
  return (
      <div className="w-100 text-center pt-5">
        <h1 className='sector py-5'>Academic Experience</h1>
        <div className="w-50 d-flex justify-content-evenly mx-auto align-items-center d-flex flex-column gap-2">
          <DetailItem title={"Mobile Application Development"} date={"In progress"} place={"PUC-PR"} description={"Postgraduate Degree in Mobile Application Development"} />
          <DetailItem title={"Scientific Initiation Scholarship (PIBIC)"} date={"2021"} place={"PUC-PR"} description={"Undergraduate Research - Process Mining"} file={["FinalReportPIBIC-GabrielScholzeRosa.pdf","Report"]}/>
          <DetailItem title={"Computer Science"} date={"2020 - 2023"} place={"PUC-PR"} description={"Bachelor’s Degree in Computer Science"} />
        </div>
      </div>

  )
}
