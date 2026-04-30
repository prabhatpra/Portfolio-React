import React from "react";
import LightButton from "../../assets/DarkLight/light-mode-button.png";
import DarkButton from "../../assets/DarkLight/dark-mode-button.png";

const DarkMode = () => {

  const [theme, setTheme] = React.useState(() => {
    const saved = localStorage.getItem("theme");

    if (saved) return saved;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // ✅ Apply theme
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // ✅ System change listener (only if user ne override nahi kiya)
  React.useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  // ✅ Toggle (user override)
  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <div className="relative">

      <img
        src={LightButton}
        alt="Light Mode"
        onClick={toggleTheme}
        className={`w-12 cursor-pointer transition-all absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"
          }`}
      />

      <img
        src={DarkButton}
        alt="Dark Mode"
        onClick={toggleTheme}
        className="w-12 cursor-pointer transition-all"
      />

    </div>
  );
};

export default DarkMode;