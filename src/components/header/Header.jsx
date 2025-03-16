import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../Theme.jsx"; // Importa o contexto do tema
import "./Header.css";

export default function Header() {
    const { theme, toggleTheme } = useTheme(); // Obtém o tema e a função para alternar

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
                        <i className="bi bi-sun-fill theme-icon"></i>
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
                        <i className="bi bi-moon-fill theme-icon"></i>
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
