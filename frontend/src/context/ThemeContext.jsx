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

const getColorFromLocalStorage = (key, defaultColor) => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key) || defaultColor;
  }
  return defaultColor;
};

export const ThemeProvider = ({ children }) => {
  const [primaryColor, setPrimaryColor] = useState(getColorFromLocalStorage('primaryColor', '#ffffff'));
  const [secondaryColor, setSecondaryColor] = useState(getColorFromLocalStorage('secondaryColor', '#ffffff'));

  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', primaryColor);
    document.documentElement.style.setProperty('--color-primary-rgb', hexToRgb(primaryColor));
    document.documentElement.style.setProperty('--color-secondary', secondaryColor);
    document.documentElement.style.setProperty('--color-secondary-rgb', hexToRgb(secondaryColor));
  }, [primaryColor, secondaryColor]);

  const saveColorsToLocalStorage = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('primaryColor', primaryColor);
      localStorage.setItem('secondaryColor', secondaryColor);
    }
  };

  return (
    <ThemeContext.Provider value={{ primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor, saveColorsToLocalStorage }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
