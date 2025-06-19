import React from 'react'
import './Home.css'
import Skills from '../../components/home/skills/Skills'
import Professional from '../../components/home/professional/Professional'
import Education from '../../components/home/education/Education'
import Certifications from '../../components/home/certifications/Certifications'
import me from '../../assets/img/gabrielscholzerosa.jpg'
export default function Home() {


  return (
    <div>
      <div className="intro text-center w-100 mx-auto">
        <div className="d-flex justify-content-between w-100 align-items-center introduction-div">
          <div className='px-5'>
            <img src={me} alt="Gabriel Scholze Rosa" className='profile-pic mx-auto'/>
          </div>

          <div className='infos'>
            <h2 className='name py-4'>
              Gabriel Scholze Rosa
            </h2>
            <h3 className='job py-4'>
              Fullstack Developer
            </h3>
            <p className='bio py-4'>
                Welcome! I'm a Full Stack Developer with three years of experience, primarily working with C# (.NET) and React.js. In my current role, I'm deeply involved in a crucial web-based loan management system for clients in the United States. I graduated with a degree in Computer Science in 2024 and I'm always looking to expand my horizons. That's why I'm also pursuing a postgraduate degree in Mobile Application Development—I'm excited to dive deeper into the tech market and explore new ways to build impactful solutions.
            </p>
          </div>

        </div>
      </div>
      <hr className='mx-5' style={{ color: "var(--text-color)" }} />
      <Skills />
      <hr className='mx-5' style={{ color: "var(--text-color)" }} />

      <Professional />
      <hr className='mx-5' style={{ color: "var(--text-color)" }} />
      <Education />
      <hr className='mx-5' style={{ color: "var(--text-color)" }} />
      <Certifications />
    </div >
  )
}
