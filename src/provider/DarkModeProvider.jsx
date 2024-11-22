import { useEffect, useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedPreference = localStorage.getItem("theme");
        return storedPreference ? storedPreference === "dark" : false;
    });

    const toggleDarkMode = () => {
        setIsDarkMode((prev) => !prev);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeProvider;