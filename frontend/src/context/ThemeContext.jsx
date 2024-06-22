// context/ThemeContext.jsx
"use client"
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};

export const ThemeProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState('#3490dc');
  const [secondaryColor, setSecondaryColor] = useState('#ffffff');

  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', primaryColor);
    document.documentElement.style.setProperty('--color-primary-rgb', hexToRgb(primaryColor));
    document.documentElement.style.setProperty('--color-secondary', secondaryColor);
    document.documentElement.style.setProperty('--color-secondary-rgb', hexToRgb(secondaryColor));
  }, [primaryColor, secondaryColor]);

  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
