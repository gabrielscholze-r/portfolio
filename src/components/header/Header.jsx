import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../Theme.jsx";
import "./Header.css";

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="header px-5">
            <div className="logo-section">
                <NavLink className="navlink" to="/">
                    <h3 className="logo-text">GABRIEL SCHOLZE</h3>
                </NavLink>
            </div>

            <div className="desktop-nav">
                <NavigationElements />
            </div>
            <button
                className="burger-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? '✕' : '☰'}
            </button>
            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="mobile-nav">
                    <NavigationElements closeMenu={() => setIsMenuOpen(false)} />
                </div>
            </div>
        </div>
    );

    function NavigationElements({ closeMenu }) {
        return (
            <>
                <div className="theme-toggle">
                    <div className="px-1">
                        <i className="bi bi-sun-fill theme-icon" style={(theme === "dark") ? { opacity: 0.6, color: "white" } : { background: "linear-gradient(180deg, #FFD700, #FFA500, #FF8C00)", WebkitBackgroundClip: "text", color: "transparent" }}></i>
                    </div>
                    <div className="px-1">
                        <label className="theme-switch">
                            <input
                                type="checkbox"
                                id="theme-toggle"
                                checked={theme === "dark"}
                                onChange={toggleTheme}
                            />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div className="px-1">
                        <i className="bi bi-moon-fill theme-icon" style={(theme === "dark") ? { background: "linear-gradient(180deg, #b0b0b0, #8c8c8c, #6e6e6e)", WebkitBackgroundClip: "text", color: "transparent" } : { opacity: 0.6, color: "white" }}></i>
                    </div>
                </div>
                <NavLink className="navlink" to="/" onClick={closeMenu}>
                    Home
                </NavLink>
                <NavLink className="navlink" to="Projects" onClick={closeMenu}>
                    Projects
                </NavLink>
            </>
        );
    }
}