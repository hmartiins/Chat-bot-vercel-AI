"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }

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
