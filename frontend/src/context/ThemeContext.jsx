"use client"
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState('#3490dc');
  const [secondaryColor, setSecondaryColor] = useState('#ffffff');

  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', primaryColor);
    document.documentElement.style.setProperty('--color-secondary', secondaryColor);
  }, [primaryColor, secondaryColor]);

  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
