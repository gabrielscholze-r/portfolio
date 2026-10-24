import React from 'react'
import './Skills.css'
import SkillBar from '../skill-icon/SkillIcon'
import { useLanguage } from '../../../context/Language.jsx'

export default function Skills() {
    const { lang } = useLanguage()

    const skills = [
        { icon: "devicon-java-plain-wordmark",           title: "Java",        exp: 70, list: { en: ["1 year of experience in Java development"], pt: ["1 ano de experiência com desenvolvimento em Java"] } },
        { icon: "devicon-go-original-wordmark",          title: "Go",          exp: 50, list: { en: ["Currently practicing in personal projects"], pt: ["Praticando atualmente em projetos pessoais"] } },
        { icon: "devicon-react-original-wordmark",       title: "React.js",    exp: 80, list: { en: ["Over 2 years of experience", "Currently working with it"], pt: ["Mais de 2 anos de experiência", "Uso atualmente no trabalho"] } },
        { icon: "devicon-csharp-plain-wordmark",         title: "C#",          exp: 80, list: { en: ["Over 2 years of experience with C# (.NET)", "Currently working with it"], pt: ["Mais de 2 anos de experiência com C# (.NET)", "Uso atualmente no trabalho"] } },
        { icon: "devicon-microsoftsqlserver-plain",      title: "SQL Server",  exp: 80, list: { en: ["2 years of experience", "Stored Procedures", "Currently working with it"], pt: ["2 anos de experiência", "Stored Procedures", "Uso atualmente no trabalho"] } },
        { icon: "devicon-docker-plain-wordmark",         title: "Docker",      exp: 70, list: { en: ["Used in personal projects"], pt: ["Usado em projetos pessoais"] } },
        { icon: "devicon-spring-original",               title: "Spring Boot", exp: 50, list: { en: ["Projects during university"], pt: ["Projetos durante a faculdade"] } },
        { icon: "devicon-reactnative-original",          title: "React Native",exp: 50, list: { en: ["Mobile development in personal projects"], pt: ["Desenvolvimento mobile em projetos pessoais"] } },
        { icon: "devicon-flutter-plain",                 title: "Flutter",     exp: 60, list: { en: ["Used in postgraduate projects"], pt: ["Usado em projetos da pós-graduação"] } },
    ]

    return (
        <section className="skills-section">
            <div className="section-cmd-header">
                <span className="dollar">$</span>
                <span className="cmd-text"> skill-scan --verbose</span>
            </div>
            <div className="skills-grid">
                {skills.map((s, i) => (
                    <SkillBar key={i} icon={s.icon} title={s.title} exp={s.exp} list={s.list[lang]} />
                ))}
            </div>
        </section>
    )
}
