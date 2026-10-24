import { createContext, useState, useContext, useEffect } from "react";
import Cookie from "js-cookie";


const ThemeContext = createContext(undefined);

const darkQuery = "(prefers-color-scheme: dark)";

// a saved choice wins; otherwise follow the system's light/dark setting
function detectTheme() {
  const saved = Cookie.get("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia?.(darkQuery).matches ? "dark" : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(detectTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // keeps up with the system theme while the visitor hasn't picked one
  useEffect(() => {
    const media = window.matchMedia?.(darkQuery);
    if (!media) return;
    const onChange = (e) => {
      if (!Cookie.get("theme")) setTheme(e.matches ? "dark" : "light");
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = (newTheme = null) => {
    const updatedTheme = (newTheme === "light" || newTheme === "dark")
        ? newTheme
        : (theme === "light" ? "dark" : "light");

    setTheme(updatedTheme);
    Cookie.set("theme", updatedTheme, { expires: 365 });
  };



  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  return useContext(ThemeContext);
}
