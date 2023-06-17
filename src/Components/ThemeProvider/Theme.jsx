import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
import './theme.css'

const Theme = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button
        className={`toggle-button ${isDarkTheme ? "dark-theme" : "light-theme"}`}
        onClick={()=>toggleTheme()}
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default Theme;
