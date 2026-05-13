import React, { useState } from "react";
import data from "../../assets/projects/projects.json";
import ProjectItem from "../../components/projects/projectItem/ProjectItem";
import "./Projects.css";
import PortfolioModal from "../../components/portfolioModal/PortfolioModal";

const CARDS_PER_PAGE = 6;
const TOTAL_PAGES = Math.ceil(data.length / CARDS_PER_PAGE);

export default function Projects() {
  const [anyOpen, setAny] = useState(false);
  const [openInfo, setInfo] = useState(false);
  const [page, setPage] = useState(0);

  const handleInfoOpen = () => {
    if (!anyOpen) { setInfo(true); setAny(true); }
  };
  const handleInfoClose = () => { setInfo(false); setAny(false); };

  const visibleData = data.slice(page * CARDS_PER_PAGE, (page + 1) * CARDS_PER_PAGE);

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
          <div className="carousel-nav">
            <button
              className="carousel-btn"
              onClick={() => setPage(p => p - 1)}
              disabled={page === 0}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <span className="carousel-dots">
              {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot${i === page ? " carousel-dot--active" : ""}`}
                  onClick={() => setPage(i)}
                />
              ))}
            </span>
            <button
              className="carousel-btn"
              onClick={() => setPage(p => p + 1)}
              disabled={page === TOTAL_PAGES - 1}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
          <button onClick={handleInfoOpen} className="info-btn" title="About this portfolio">
            <i className="bi bi-info-circle"></i>
          </button>
        </div>
        <p className="projects-subtitle">
          <span className="dollar">$</span> find . -name "*.project" | sort
        </p>
      </div>
      <div className="projectList">
        {visibleData.map((item, index) => (
          <ProjectItem
            data={item}
            key={page * CARDS_PER_PAGE + index}
            index={index}
            anyOpen={anyOpen}
            setAny={setAny}
          />
        ))}
      </div>
    </div>
  );
}
