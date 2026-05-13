import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../../context/Theme.jsx";
import "./Header.css";
import Cookie from "js-cookie";

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const current = Cookie.get("theme");
        if (current) toggleTheme(current);
    }, [toggleTheme]);

    function NavigationElements({ closeMenu }) {
        return (
            <>
                <NavLink
                    className={({ isActive }) => `navlink${isActive ? " active" : ""}`}
                    to="/"
                    end
                    onClick={closeMenu}
                >
                    <span className="nav-arrow">&gt;&nbsp;</span>home
                </NavLink>
                <NavLink
                    className={({ isActive }) => `navlink${isActive ? " active" : ""}`}
                    to="projects"
                    onClick={closeMenu}
                >
                    <span className="nav-arrow">&gt;&nbsp;</span>projects
                </NavLink>
                <NavLink
                    className={({ isActive }) => `navlink${isActive ? " active" : ""}`}
                    to="devlog"
                    onClick={closeMenu}
                >
                    <span className="nav-arrow">&gt;&nbsp;</span>devlog
                </NavLink>
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
                    aria-label="Toggle menu"
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
