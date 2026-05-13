import React, { useState } from "react";
import data from "../../assets/devlog/devlog.json";
import './Devlog.css'
import DevlogItem from "../../components/devlog/devlogItem/DevlogItem";

const filterOptions = [
    { value: "",                  label: "all branches" },
    { value: "portfolio-change",  label: "portfolio" },
    { value: "Personal Projects", label: "personal-projects" },
    { value: "Infrastructure",    label: "infrastructure" },
    { value: "Academics",         label: "academics" },
]

export default function Devlog() {
    const [anyOpen, setAny] = useState(false);
    const [filter, setFilter] = useState("");

    const filteredData = filter
        ? filter === "portfolio-change"
            ? data.filter(item => item.isPortfolioChange)
            : data.filter(item => item.tags.includes(filter))
        : data;

    return (
        <div className="devlog-page">
            <div className="devlog-header">
                <div className="devlog-title-row">
                    <span className="devlog-icon"><i className="bi bi-journal-code"></i></span>
                    <h1 className="devlog-title">devlog</h1>
                </div>
                <p className="devlog-subtitle">Updates, experiments and ideas</p>
            </div>

            <div className="git-log-cmd">
                <span className="dollar">$</span>
                <span className="git-cmd-text"> git log --oneline --graph</span>
                {filter && (
                    <span className="git-branch-filter"> {filterOptions.find(o => o.value === filter)?.label}</span>
                )}
            </div>

            <div className="devlog-filter-row">
                <span className="filter-label">branch:</span>
                <div className="filter-tabs">
                    {filterOptions.map(opt => (
                        <button
                            key={opt.value}
                            className={`filter-tab${filter === opt.value ? " active" : ""}`}
                            onClick={() => setFilter(opt.value)}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="devlog-list">
                {filteredData.map((v, i) => (
                    <DevlogItem
                        key={i}
                        data={v}
                        anyOpen={anyOpen}
                        setAny={setAny}
                        isLast={i === filteredData.length - 1}
                    />
                ))}
            </div>
        </div>
    );
}
