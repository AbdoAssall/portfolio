import { createContext, useState, useEffect } from 'react';
import PropTypes from "prop-types";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        if (savedTheme) {
          return savedTheme;
        } else {
          return darkQuery.matches ? 'dark' : 'light';
        }
      });

      useEffect(() => {
        const element = document.documentElement;

        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}