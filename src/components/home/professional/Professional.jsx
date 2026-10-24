import React from 'react'
import DetailItem from '../detailItem/DetailItem'
import './Professional.css'
import { useLanguage } from '../../../context/Language.jsx'

const jobs = {
    en: [
        {
            title: "Fullstack Developer",
            date: "March 2023 – Present",
            place: "Sumersoft",
            description: ".NET & React Fullstack Developer",
            advancedDescription: [
                "Led the development and maintenance of LMS, a web-based loan management system, ensuring high performance and reliability across the .NET (C#) backend and React.js frontend",
                "Implemented database adjustments to enhance data consistency, significantly reducing reporting discrepancies",
                "Engineered automated weekly/monthly reports, greatly improving data accessibility and eliminating extensive manual compilation efforts for key stakeholders",
            ],
        },
        {
            title: "Backend Intern",
            date: "June 2022 – February 2023",
            place: "Celepar",
            description: "Java Backend Development",
            advancedDescription: [
                "Contributed to the development and testing of internal management systems, primarily using Java (JSP) and PostgreSQL for state-level applications",
                "Significantly advanced Java backend development skills and sharpened key soft skills through focused training",
                "Gained practical experience with the MVC design pattern, contributing to a robust codebase",
            ],
        },
    ],
    pt: [
        {
            title: "Desenvolvedor Fullstack",
            date: "Março 2023 – Atual",
            place: "Sumersoft",
            description: "Desenvolvedor Fullstack .NET & React",
            advancedDescription: [
                "Liderei o desenvolvimento e a manutenção do LMS, um sistema web de gestão de empréstimos, garantindo desempenho e confiabilidade no backend .NET (C#) e no frontend React.js",
                "Fiz ajustes no banco de dados para melhorar a consistência dos dados, reduzindo bastante as divergências nos relatórios",
                "Desenvolvi relatórios semanais e mensais automatizados, facilitando o acesso aos dados e eliminando um grande trabalho manual de compilação para as principais partes interessadas",
            ],
        },
        {
            title: "Estagiário de Backend",
            date: "Junho 2022 – Fevereiro 2023",
            place: "Celepar",
            description: "Desenvolvimento Backend em Java",
            advancedDescription: [
                "Contribuí com o desenvolvimento e os testes de sistemas internos de gestão, principalmente com Java (JSP) e PostgreSQL, para aplicações do governo do estado",
                "Evoluí bastante no desenvolvimento backend em Java e aprimorei soft skills importantes com treinamentos focados",
                "Ganhei experiência prática com o padrão de projeto MVC, contribuindo para uma base de código sólida",
            ],
        },
    ],
}

export default function Professional() {
    const { lang } = useLanguage()

    return (
        <section className="professional-section">
            <div className="section-cmd-header">
                <span className="dollar">$</span>
                <span className="cmd-text"> cat ~/.career/experience.log</span>
            </div>
            <div className="git-log-wrapper">
                {jobs[lang].map(job => (
                    <DetailItem key={job.place} {...job} />
                ))}
            </div>
        </section>
    )
}
