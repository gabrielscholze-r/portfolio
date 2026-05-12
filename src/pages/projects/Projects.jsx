import React, { useState } from "react";
import data from "../../assets/projects/projects.json";
import ProjectItem from "../../components/projects/projectItem/ProjectItem";
import "./Projects.css";
import PortfolioModal from "../../components/portfolioModal/PortfolioModal";

export default function Projects() {
  const [anyOpen, setAny] = useState(false);
  const [openInfo, setInfo] = useState(false);

  const handleInfoOpen = () => {
    if (!anyOpen) { setInfo(true); setAny(true); }
  };
  const handleInfoClose = () => { setInfo(false); setAny(false); };

  return (
    <div className="projects-page">
      <PortfolioModal
        info={openInfo}
        setInfo={setInfo}
        close={handleInfoClose}
        anyOpen={anyOpen}
        setAny={setAny}
      />
      <div className="projects-header">
        <div className="projects-title-row">
          <span className="explorer-icon">
            <i className="bi bi-folder2-open"></i>
          </span>
          <h1 className="projects-title">projects/</h1>
          <button onClick={handleInfoOpen} className="info-btn" title="About this portfolio">
            <i className="bi bi-info-circle"></i>
          </button>
        </div>
        <p className="projects-subtitle">
          <span className="dollar">$</span> find . -name "*.project" | sort
        </p>
      </div>
      <div className="projectList">
        {data.map((item, index) => (
          <ProjectItem
            data={item}
            key={index}
            anyOpen={anyOpen}
            setAny={setAny}
          />
        ))}
      </div>
    </div>
  );
}
