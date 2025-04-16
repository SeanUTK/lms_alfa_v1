import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme';

// Define the theme context type
type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

// Define props for the ThemeProvider component
interface ThemeProviderProps {
  children: ReactNode;
}

export const useTheme = () => useContext(ThemeContext);

// Helper functions for dark mode color adjustments
export const getDarkModeColor = (
  lightModeColor: string,
  darkModeColor: string,
  isDarkMode: boolean
): string => {
  return isDarkMode ? darkModeColor : lightModeColor;
};

export const getContrastText = (
  backgroundColor: string, 
  lightText: string, 
  darkText: string,
  isDarkMode: boolean
): string => {
  return isDarkMode ? lightText : darkText;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Check for saved theme preference or system preference
  const getInitialTheme = (): boolean => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    
    // If no saved preference, check system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialTheme());

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Update localStorage and body class when theme changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Also update the body class for global CSS that can't use styled-components
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
    
    // Set CSS variables for use in CSS for components that don't use styled-components
    document.documentElement.style.setProperty('--text-color', isDarkMode ? darkTheme.colors.text : lightTheme.colors.text);
    document.documentElement.style.setProperty('--bg-color', isDarkMode ? darkTheme.colors.background : lightTheme.colors.background);
    document.documentElement.style.setProperty('--card-color', isDarkMode ? darkTheme.colors.card : lightTheme.colors.card);
    document.documentElement.style.setProperty('--border-color', isDarkMode ? darkTheme.colors.border : lightTheme.colors.border);
  }, [isDarkMode]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if the user hasn't set a preference
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 