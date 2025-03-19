import React, { useState } from 'react'
import './Skills.css'
import Tooltip from '../tooltip/Tooltip'
export default function Skills() {
    const [hover, setHover] = useState([false, ""])
    return (
        <div>
            <div className="row techs text-center w-75 p-5 mx-auto justify-content-evenly">
                <h2 className='pt-2 pb-5 techs-title'>Skills</h2>
                <div
                    className='col-sm-auto devicon-col'
                    onMouseOver={() => setHover([true, "react"])}
                    onMouseOut={() => setHover([false, ''])}
                >
                    <i className="devicon-react-original-wordmark devicon"></i>
                    <Tooltip hover={hover} title={"React.js"} list={["+2 anos de experiência com React.js", "Trabalhando atualmente"]} name={'react'} exp={80} />
                </div>
                <div className='col-sm-auto devicon-col'
                    onMouseOver={() => setHover([true, "c#"])}
                    onMouseOut={() => setHover([false, ''])}>
                    <i className="devicon-csharp-plain-wordmark devicon"></i>
                    <Tooltip hover={hover} title={"C#"} list={["+2 anos de experiência com C# (.NET)", "Trabalhando atualmente"]} name={'c#'} exp={80} />
                </div>
                <div className='col-sm-auto devicon-col'
                    onMouseOver={() => setHover([true, "java"])}
                    onMouseOut={() => setHover([false, ''])}>
                    <i className="devicon-java-plain-wordmark devicon"></i>
                    <Tooltip hover={hover} title={"Java"} list={["1 ano de experiência em desenvolvimento Java"]} name={'java'} exp={50} />
                </div>
            </div>
            <div className="row techs text-center w-75 mx-auto justify-content-evenly">
                <div className='col-sm-auto devicon-col'
                    onMouseOver={() => setHover([true, "sql"])}
                    onMouseOut={() => setHover([false, ''])}>
                    <i className="devicon-microsoftsqlserver-plain devicon"></i>
                    <Tooltip hover={hover} title={"SQL Server"} list={["2 anos de experiência", "Stored Procedures", "Trabalhando atualmente"]} name={'sql'} exp={80} />
                </div>
                <div className='col-sm-auto devicon-col'
                    onMouseOver={() => setHover([true, "docker"])}
                    onMouseOut={() => setHover([false, ''])}>
                    <i className="devicon-docker-plain-wordmark devicon"></i>
                    <Tooltip hover={hover} title={"Docker"} list={["Uso pessoal"]} name={'docker'} exp={40} />
                </div>
                <div className='col-sm-auto devicon-col'
                    onMouseOver={() => setHover([true, "flutter"])}
                    onMouseOut={() => setHover([false, ''])}>
                    <i className="devicon-flutter-plain devicon"></i>
                    <Tooltip hover={hover} title={"Flutter"} list={["Usado em projetos durante a Pós-Graduação"]} name={'flutter'} exp={60} />
                </div>
            </div>
            <div className="row techs text-center w-75 mx-auto justify-content-evenly">
                <div className='col-sm-auto devicon-col'
                    onMouseOver={() => setHover([true, "spring"])}
                    onMouseOut={() => setHover([false, ''])}>
                    <i class="devicon-spring-original devicon"></i>
                    <Tooltip hover={hover} title={"Spring Boot"} list={["Projetos durante a faculdade"]} name={'spring'} exp={60} />
                </div>
                <div className='col-sm-auto devicon-col'
                    onMouseOver={() => setHover([true, "python"])}
                    onMouseOut={() => setHover([false, ''])}>
                    <i class="devicon-python-plain devicon"></i>
                    <Tooltip hover={hover} title={"Python"} list={["Projetos desde o início da faculdade", "Machine Learning", "Pandas"]} name={'python'} exp={60} />
                </div>
            </div>
        </div>
    )
}
