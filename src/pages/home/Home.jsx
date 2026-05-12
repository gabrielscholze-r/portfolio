import React from 'react'
import './Home.css'
import Skills from '../../components/home/skills/Skills'
import Professional from '../../components/home/professional/Professional'
import Education from '../../components/home/education/Education'
import Certifications from '../../components/home/certifications/Certifications'
import me from '../../assets/img/gabrielscholzerosa.avif'

export default function Home() {
  return (
    <div className="home-page">

      <section className="hero-section">
        <div className="terminal-window">
          <div className="terminal-titlebar">
            <div className="terminal-dots">
              <span className="tdot tdot-red"></span>
              <span className="tdot tdot-yellow"></span>
              <span className="tdot tdot-green"></span>
            </div>
            <span className="terminal-title-text">gabriel@portfolio: ~/about</span>
          </div>
          <div className="terminal-body">
            <p className="terminal-prompt-line">
              <span className="t-user">gabriel@portfolio</span>
              <span className="t-sep">:</span>
              <span className="t-dir">~/about</span>
              <span className="t-dollar">$</span>
              <span className="t-cmd"> whoami</span>
            </p>
            <div className="hero-content">
              <div className="hero-image-col">
                <img src={me} alt="Gabriel Scholze Rosa" className="profile-pic" />
              </div>
              <div className="hero-info-col">
                <h1 className="hero-name">
                  Gabriel Scholze Rosa<span className="blink-cursor">_</span>
                </h1>
                <p className="hero-role">// Fullstack Developer</p>
                <p className="hero-bio">
                  Welcome! I'm a Full Stack Developer with three years of experience,
                  primarily working with C# (.NET) and React.js. In my current role,
                  I'm deeply involved in a web-based loan management system for U.S.
                  clients. I graduated in Computer Science (2024) and I'm pursuing a
                  Postgraduate Degree in Mobile Application Development.
                </p>
                <div className="hero-tags">
                  <span className="htag htag-blue">C# .NET</span>
                  <span className="htag htag-red">Java</span>
                  <span className="htag htag-cyan">React.js</span>
                  <span className="htag htag-orange">Go</span>
                  <span className="htag htag-green">SQL Server</span>
                </div>
              </div>
            </div>
            <p className="terminal-prompt-line terminal-prompt-empty">
              <span className="t-user">gabriel@portfolio</span>
              <span className="t-sep">:</span>
              <span className="t-dir">~/about</span>
              <span className="t-dollar">$</span>
              <span className="blink-cursor"> _</span>
            </p>
          </div>
        </div>
      </section>

      <Skills />
      <Professional />
      <Education />
      <Certifications />
    </div>
  )
}
