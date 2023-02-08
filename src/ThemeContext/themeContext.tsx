import React, { createContext, useState } from "react";

export type ThemeType = "defaultTheme" | "astronautTheme" | "firefighterTheme";

export interface ThemeContextType {
  theme: ThemeType;
  changeTheme: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);
const ThemeProvider = ({ children }: any) => {
  const [themeMode, setThemeMode] = useState<ThemeType>("defaultTheme");

  return (
    <ThemeContext.Provider
      value={{
        theme: themeMode,
        changeTheme: setThemeMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
