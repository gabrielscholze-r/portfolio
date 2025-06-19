import React, { useState } from "react";
import data from "../../assets/projects/projects.json";
import ProjectItem from "../../components/projects/projectItem/ProjectItem";
import "./Projects.css";
import PortfolioModal from "../../components/portfolioModal/PortfolioModal";
export default function Projects() {
  const [anyOpen, setAny] = useState(false);
  const [openInfo, setInfo] = useState(false);

  const handleInfoOpen = () => {
    if (!anyOpen) {
      setInfo(true);
      setAny(true);
    }
  };
  const handleInfoClose = () => {
    setInfo(false);
    setAny(false);
  };
  return (
    <div className="w-100 py-5 body-no-scroll">
      <PortfolioModal
        info={openInfo}
        setInfo={setInfo}
        close={handleInfoClose}
        anyOpen={anyOpen}
        setAny={setAny}
      />
      <div className="text-center">
        <h2 className="projetos">Projects</h2>
        <div onClick={handleInfoOpen} className="openinfodiv">
          <i className="bi bi-question-circle-fill openmodal"></i>
        </div>
      </div>
      <div className="projectList w-75 mx-auto">
        {data.map((item, index) => {
          return (
            <ProjectItem
              data={item}
              key={index}
              anyOpen={anyOpen}
              setAny={setAny}
            />
          );
        })}
      </div>
    </div>
  );
}
