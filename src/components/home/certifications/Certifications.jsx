import React from 'react'
import Certificate from '../certificate/Certificate'
import './Certifications.css'

export default function Certifications() {
    return (
        <div className='certificate-section p-5 mx-auto'>
            <h1 className='sector py-5'>Certificados</h1>
            <div className='mx-auto certificates'>

                <Certificate link={"https://drive.google.com/drive/folders/15nOx8T03qNhsya07zfYaFcPzSVhzWmIR?usp=sharing"} title="C" org={"Alura"} />
                <Certificate link={"https://drive.google.com/file/d/1P0wFHipgHzN_PpwbEWzpMpHATcVwnaYX/view?usp=sharing"} title="iOS (Swift)" org={"PUC-PR"} />
                <Certificate link={"https://drive.google.com/drive/folders/1Jd-C6IpZTTbjKbwldcXbKgih0TDMwLmu?usp=sharing"} title="Angular" org={"PUC-PR"} />
            </div>
            <div className='mx-auto certificates'>
                <Certificate link={"https://drive.google.com/drive/folders/1OMsfnUrNPfnZ-ofHPX8EoIf7PzAKxUoJ?usp=sharing"} title="SQL Server" org={"Alura"} />
                <Certificate link={"https://drive.google.com/file/d/1ys7eibXIFNHoL4luYXu22hvxFLfc2v7S/view?usp=sharing"} title="UI e Mobile App Guidelines" org={"PUC-PR"} />
                <Certificate link={"https://drive.google.com/file/d/1v5MVJuf3EPCNam2OXLAtuT6ecsuEVPlo/view?usp=sharing"} title="UX e Design de Interação" org={"PUC-PR"} />
            </div>
            <div className='mx-auto certificates'>
                <Certificate link={"https://drive.google.com/drive/folders/1N-NJwDdqM0J7F4s-yhGefXPNEQzZhmnr?usp=sharing"} title="C++" org={"Alura"} />
                <Certificate link={"https://drive.google.com/drive/folders/1-htZ7H8fQMAgsD4oVLjmbCdbTfHVx3uF?usp=sharing"} title="React.js" org={"Alura"} />
                <Certificate link={"https://drive.google.com/file/d/17NC7Hx25VmdI6OvYMnc9mqn-tA0mTaGM/view?usp=sharing"} title="Node.js" org={"Alura"} />
            </div>
            <div className='mx-auto certificates'>
            </div>
        </div>
    )
}   