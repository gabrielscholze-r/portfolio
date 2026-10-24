import React from 'react'
import DetailItem from '../detailItem/DetailItem'
import './Education.css'
import { useLanguage } from '../../../context/Language.jsx'

const courses = {
  en: [
    { title: "Mobile Application Development", date: "2024 – 2026", place: "PUC-PR", description: "Postgraduate Degree in Mobile Application Development" },
    { title: "Scientific Initiation (PIBIC)", date: "2021", place: "PUC-PR", description: "Undergraduate Research — Process Mining", file: ["FinalReportPIBIC-GabrielScholzeRosa.pdf", "Download Report"] },
    { title: "Computer Science", date: "2020 – 2023", place: "PUC-PR", description: "Bachelor's Degree in Computer Science" },
  ],
  pt: [
    { title: "Desenvolvimento de Aplicativos Móveis", date: "2024 – 2026", place: "PUC-PR", description: "Pós-Graduação em Desenvolvimento de Aplicativos Móveis" },
    { title: "Iniciação Científica (PIBIC)", date: "2021", place: "PUC-PR", description: "Pesquisa na graduação — Mineração de Processos", file: ["FinalReportPIBIC-GabrielScholzeRosa.pdf", "Baixar relatório"] },
    { title: "Ciência da Computação", date: "2020 – 2023", place: "PUC-PR", description: "Bacharelado em Ciência da Computação" },
  ],
}

export default function Education() {
  const { lang } = useLanguage()

  return (
    <section className="education-section">
      <div className="section-cmd-header">
        <span className="dollar">$</span>
        <span className="cmd-text"> ls -la education/</span>
      </div>
      <div className="education-list">
        {courses[lang].map(course => (
          <DetailItem key={course.title} {...course} />
        ))}
      </div>
    </section>
  )
}
