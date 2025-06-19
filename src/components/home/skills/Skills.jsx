import React from 'react'
import './Skills.css'
import SkillIcon from '../skill-icon/SkillIcon'

export default function Skills() {

    return (
        <div className='text-center w-100'>
            <h2 className='pt-2 pb-5 techs-title'>Skills</h2>
            <div className="techs">
                <SkillIcon title={"Go"} list={["Currently practicing in personal projects"]} exp={"50"} icon={"devicon-go-original-wordmark"} />
                <SkillIcon title={"React.js"} list={["Over 2 years of experience with React.js", "Currently working with it"]} exp={"80"} icon={"devicon-react-original-wordmark"} />
                <SkillIcon icon={"devicon-csharp-plain-wordmark"} title={"C#"} list={["Over 2 years of experience with C# (.NET)", "Currently working with it"]} exp={80} />
                <SkillIcon icon={"devicon-java-plain-wordmark"} title={"Java"} list={["1 year of experience in Java development"]} exp={50} />
                <SkillIcon icon={"devicon-microsoftsqlserver-plain"} title={"SQL Server"} list={["2 years of experience", "Stored Procedures", "Currently working with it"]} exp={80} />
            </div>
            <div className="techs">
                <SkillIcon icon={"devicon-docker-plain-wordmark"} title={"Docker"} list={["Used in personal projects"]} exp={40} />
                <SkillIcon icon={"devicon-spring-original"} title={"Spring Boot"} list={["Projects during university"]} exp={50} />
                <SkillIcon icon={"devicon-python-plain"} title={"Python"} list={["Projects since early university years", "Machine Learning", "Pandas"]} exp={60} />
                <SkillIcon icon={"devicon-flutter-plain"} title={"Flutter"} list={["Used in projects during postgraduate studies"]} exp={60} />
            </div>
        </div>
    )
}
