import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../Theme.jsx";
import "./Header.css";

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="header px-5">
            <div className="w-25 text-center align-items-center">
                <NavLink className="px-3 navlink" to="/">
                    <h3 className="logo-text my-auto">GABRIEL SCHOLZE</h3>
                </NavLink>
            </div>
            <div className="w-75 d-flex justify-content-end align-items-center">
                <div className="d-flex align-items-center px-3">

                    <div className="px-1">
                        <i className="bi bi-sun-fill theme-icon" style={(theme==="dark") ?  {opacity:0.6, color:"white"}:{background: "linear-gradient(180deg, #FFD700, #FFA500, #FF8C00)", WebkitBackgroundClip: "text", color: "transparent"}}></i>
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
                        <i className="bi bi-moon-fill theme-icon" style={(theme==="dark") ?  {background: "linear-gradient(180deg, #b0b0b0, #8c8c8c, #6e6e6e)", WebkitBackgroundClip: "text", color: "transparent"}:{opacity:0.6, color:"white"}}></i>
                    </div>
                </div>
                <NavLink className="px-3 navlink" to="/">
                    Home
                </NavLink>
                <NavLink className="px-3 navlink" to="Projects">
                    Projects
                </NavLink>
            </div>
        </div>
    );
}
