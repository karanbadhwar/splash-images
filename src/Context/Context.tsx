import React, { createContext, useContext, useState, useEffect } from "react";
import { IChildren, IContext } from "../Interfaces/Interface";

const AppContext = createContext({} as IContext);

const getIntitalDarkMode = () => {
  const preferedDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const storedDarkMode = localStorage.getItem("darkTheme") === "true";
  return storedDarkMode || preferedDarkMode;
};

export const AppProvider = ({ children }: IChildren) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(getIntitalDarkMode());
  const [searchTerm, setSearchTerm] = useState<string>("luxury");

  // Dark Mode Toggle Function
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem("darkTheme", `${newDarkTheme}`);

    // document.body.classList.toggle("dark-theme", newDarkTheme);
    // const body = document.querySelector("body");
    // body?.classList.toggle("dark-theme", newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

//Custom Hook
export const useGlobalContext = () => useContext(AppContext);
