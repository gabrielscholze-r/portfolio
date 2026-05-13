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

const ITEMS_PER_PAGE = 5;

export default function Devlog() {
    const [anyOpen, setAny] = useState(false);
    const [filter, setFilter] = useState("");
    const [page, setPage] = useState(0);

    const filteredData = filter
        ? filter === "portfolio-change"
            ? data.filter(item => item.isPortfolioChange)
            : data.filter(item => item.tags.includes(filter))
        : data;

    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const visibleData = filteredData.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

    const handleFilter = (val) => {
        setFilter(val);
        setPage(0);
    };

    return (
        <div className="devlog-page">
            <div className="devlog-header">
                <div className="devlog-title-row">
                    <span className="devlog-icon"><i className="bi bi-journal-code"></i></span>
                    <h1 className="devlog-title">devlog</h1>
                    {totalPages > 1 && (
                        <div className="carousel-nav">
                            <button
                                className="carousel-btn"
                                onClick={() => setPage(p => p - 1)}
                                disabled={page === 0}
                            >
                                <i className="bi bi-chevron-left"></i>
                            </button>
                            <span className="carousel-dots">
                                {Array.from({ length: totalPages }).map((_, i) => (
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
                                disabled={page === totalPages - 1}
                            >
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    )}
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
                            onClick={() => handleFilter(opt.value)}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="devlog-list">
                {visibleData.map((v, i) => (
                    <DevlogItem
                        key={page * ITEMS_PER_PAGE + i}
                        data={v}
                        anyOpen={anyOpen}
                        setAny={setAny}
                        isLast={i === visibleData.length - 1}
                    />
                ))}
            </div>
        </div>
    );
}
