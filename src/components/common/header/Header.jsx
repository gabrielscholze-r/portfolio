import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../../context/Theme.jsx";
import { useLanguage } from "../../../context/Language.jsx";
import { BrazilFlag, UsaFlag } from "../flags/Flags.jsx";
import "./Header.css";

const languages = [
    { code: "pt", label: "Português", Flag: BrazilFlag },
    { code: "en", label: "English", Flag: UsaFlag },
];

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const { lang, setLang, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function NavigationElements({ closeMenu }) {
        return (
            <>
                <NavLink
                    className={({ isActive }) => `navlink${isActive ? " active" : ""}`}
                    to="/"
                    end
                    onClick={closeMenu}
                >
                    <span className="nav-arrow">&gt;&nbsp;</span>{t("nav.home")}
                </NavLink>
                <NavLink
                    className={({ isActive }) => `navlink${isActive ? " active" : ""}`}
                    to="projects"
                    onClick={closeMenu}
                >
                    <span className="nav-arrow">&gt;&nbsp;</span>{t("nav.projects")}
                </NavLink>
                <NavLink
                    className={({ isActive }) => `navlink${isActive ? " active" : ""}`}
                    to="sites"
                    onClick={closeMenu}
                >
                    <span className="nav-arrow">&gt;&nbsp;</span>{t("nav.sites")}
                </NavLink>
                <NavLink
                    className={({ isActive }) => `navlink${isActive ? " active" : ""}`}
                    to="devlog"
                    onClick={closeMenu}
                >
                    <span className="nav-arrow">&gt;&nbsp;</span>{t("nav.devlog")}
                </NavLink>
                <div className="lang-toggle" role="group" aria-label={t("nav.language")}>
                    {languages.map(option => (
                        <button
                            key={option.code}
                            className={`lang-btn${lang === option.code ? " lang-btn--active" : ""}`}
                            onClick={() => setLang(option.code)}
                            aria-pressed={lang === option.code}
                            title={option.label}
                        >
                            <option.Flag />
                            <span className="lang-label">{option.label}</span>
                        </button>
                    ))}
                </div>
                <div className="theme-toggle">
                    <i
                        className="bi bi-sun-fill theme-icon"
                        style={
                            theme !== "dark"
                                ? { color: "#e3a008" }
                                : { color: "var(--muted-color)", opacity: 0.5 }
                        }
                    ></i>
                    <label className="theme-switch">
                        <input
                            type="checkbox"
                            checked={theme === "dark"}
                            onChange={toggleTheme}
                        />
                        <span className="slider"></span>
                    </label>
                    <i
                        className="bi bi-moon-fill theme-icon"
                        style={
                            theme === "dark"
                                ? { color: "#8b949e" }
                                : { color: "var(--muted-color)", opacity: 0.5 }
                        }
                    ></i>
                </div>
            </>
        );
    }

    return (
        <header className="header">
            <div className="header-inner">
                <NavLink className="logo-link" to="/">
                    <span className="logo-prompt">~/gabriel</span>
                    <span className="logo-dollar">$</span>
                </NavLink>
                <div className="desktop-nav">
                    <NavigationElements />
                </div>
                <button
                    className="burger-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={t("nav.toggleMenu")}
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>
            </div>
            <div className={`mobile-menu${isMenuOpen ? " active" : ""}`}>
                <NavigationElements closeMenu={() => setIsMenuOpen(false)} />
            </div>
        </header>
    );
}
