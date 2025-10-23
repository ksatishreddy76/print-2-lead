import React, { useEffect } from "react";

const useTheme = () => {
  const [currentTheme, setCurrentTheme] = React.useState("light");

  function toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    setCurrentTheme(next);
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return { currentTheme, toggleTheme };
};

export default useTheme;
