import { useEffect } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);
const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState("light");
  const [themeClass, setThemeClass] = useState("");

  useEffect(() => {
    setThemeClass(isDarkTheme ? "dark-theme" : "light-theme");
  }, [isDarkTheme]);

  const toggleTheme = () => {
    console.log("light")
    setIsDarkTheme((prevTheme) => (prevTheme === "light" ? "dark-theme" : "light-theme"));
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <div className={themeClass}>
      {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
