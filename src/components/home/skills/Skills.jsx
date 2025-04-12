import React from 'react'
import './Skills.css'
import SkillIcon from '../skill-icon/SkillIcon'

export default function Skills() {

    return (
        <div className='text-center w-100'>
            <h2 className='pt-2 pb-5 techs-title'>Skills</h2>
            <div className="techs">
                <SkillIcon title={"Go"} list={["Praticando atualmente em meus projetos"]} exp={"50"} icon={"devicon-go-original-wordmark"} />
                <SkillIcon title={"React.js"} list={["+2 anos de experiência com React.js", "Trabalhando atualmente"]} exp={"80"} icon={"devicon-react-original-wordmark"} />
                <SkillIcon icon={"devicon-csharp-plain-wordmark"} title={"C#"} list={["+2 anos de experiência com C# (.NET)", "Trabalhando atualmente"]} exp={80} />
                <SkillIcon icon={"devicon-java-plain-wordmark"} title={"Java"} list={["1 ano de experiência em desenvolvimento Java"]} exp={50} />
                <SkillIcon icon={"devicon-microsoftsqlserver-plain"} title={"SQL Server"} list={["2 anos de experiência", "Stored Procedures", "Trabalhando atualmente"]} exp={80} />
            </div>
            <div className="techs">
                <SkillIcon icon={"devicon-docker-plain-wordmark"} title={"Docker"} list={["Uso pessoal"]} exp={40} />
                <SkillIcon icon={"devicon-spring-original"} title={"Spring Boot"} list={["Projetos durante a faculdade"]} exp={50} />
                <SkillIcon icon={"devicon-python-plain"} title={"Python"} list={["Projetos desde o início da faculdade", "Machine Learning", "Pandas"]} exp={60} />
                <SkillIcon icon={"devicon-flutter-plain"} title={"Flutter"} list={["Usado em projetos durante a Pós-Graduação"]} exp={60} />
            </div>
        </div>
    )
}
