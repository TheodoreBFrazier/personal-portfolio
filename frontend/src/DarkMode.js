import "./DarkMode.css";
import { ChangeEventHandler } from "react";

const setDarkMode = () => {
  localStorage.setItem("theme", "dark");

  document.documentElement.setAttribute("data-theme", "dark");
};

const setLightMode = () => {
  localStorage.setItem("theme", "light");

  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersLight =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: light)").matches;

const defaultLight =
  storedTheme === "light" || (storedTheme === null && prefersLight);

if (defaultLight) {
  setLightMode();
}

const toggleTheme: ChangeEventHandler <HTMLInputElement> = (event) => {
  if (event.target.checked) {
    setDarkMode();
  } else {
    setLightMode();
  }
};

const DarkMode = () => {
  return (
    <div className="toggle-theme-wrapper">
      <span>Light Mode</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" 
        
        //Add on Change functionality
        onChange={toggleTheme}
        defaultChecked={defaultLight}
        />
        <div className="slider round"></div>
      </label>
      <span> Dark Mode</span>
    </div>
  );
};

export default DarkMode;
