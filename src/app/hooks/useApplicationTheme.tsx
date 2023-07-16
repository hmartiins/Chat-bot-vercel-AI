import { useContext } from "react";

import { ApplicationThemeContext } from "../context/ApplicationThemeContext";

export const useApplicationTheme = () => {
  return useContext(ApplicationThemeContext);
};
