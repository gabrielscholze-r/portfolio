import React from 'react'
import './Skills.css'
import SkillBar from '../skill-icon/SkillIcon'

export default function Skills() {
    const skills = [
        { icon: "devicon-java-plain-wordmark",           title: "Java",        exp: 70, list: ["1 year of experience in Java development"] },
        { icon: "devicon-go-original-wordmark",          title: "Go",          exp: 50, list: ["Currently practicing in personal projects"] },
        { icon: "devicon-react-original-wordmark",       title: "React.js",    exp: 80, list: ["Over 2 years of experience", "Currently working with it"] },
        { icon: "devicon-csharp-plain-wordmark",         title: "C#",          exp: 80, list: ["Over 2 years of experience with C# (.NET)", "Currently working with it"] },
        { icon: "devicon-microsoftsqlserver-plain",      title: "SQL Server",  exp: 80, list: ["2 years of experience", "Stored Procedures", "Currently working with it"] },
        { icon: "devicon-docker-plain-wordmark",         title: "Docker",      exp: 40, list: ["Used in personal projects"] },
        { icon: "devicon-spring-original",               title: "Spring Boot", exp: 50, list: ["Projects during university"] },
        { icon: "devicon-python-plain",                  title: "Python",      exp: 60, list: ["Projects since early university", "Machine Learning", "Pandas"] },
        { icon: "devicon-flutter-plain",                 title: "Flutter",     exp: 60, list: ["Used in postgraduate projects"] },
    ]

    return (
        <section className="skills-section">
            <div className="section-cmd-header">
                <span className="dollar">$</span>
                <span className="cmd-text"> skill-scan --verbose</span>
            </div>
            <div className="skills-grid">
                {skills.map((s, i) => (
                    <SkillBar key={i} icon={s.icon} title={s.title} exp={s.exp} list={s.list} />
                ))}
            </div>
        </section>
    )
}
