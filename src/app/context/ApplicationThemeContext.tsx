"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface ApplicationThemeContext {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;

  toggleDarkMode(): void;
}

interface ApplicationThemeProviderProps {
  children: ReactNode;
}

export const ApplicationThemeContext = createContext(
  {} as ApplicationThemeContext
);

export function ApplicationThemeContextProvider({
  children,
}: ApplicationThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  function toggleDarkMode() {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });

  return (
    <ApplicationThemeContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,

        toggleDarkMode,
      }}
    >
      {children}
    </ApplicationThemeContext.Provider>
  );
}
