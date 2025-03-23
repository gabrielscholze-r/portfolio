import React from 'react'
import Certificate from '../certificate/Certificate'
import './Certifications.css'

export default function Certifications() {
    return (
        <div className='w-100 mx-auto text-center p-5'>
            <h1 className='sector py-5'>Experiência Profissional</h1>
            <Certificate link={"https://drive.google.com/drive/folders/15nOx8T03qNhsya07zfYaFcPzSVhzWmIR?usp=sharing"} title="Programação Básica: C" org={"Alura"} />
        </div>
    )

}