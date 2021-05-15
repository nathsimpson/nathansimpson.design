import React, { createContext, useContext } from 'react';

import { themeDark } from './themes';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "light" as the default).
export const ThemeContext = createContext({
  theme: themeDark
});

export const ThemeProvider = ({ children }) => {
  const ancestralTheme = useTheme();

  return (
    <ThemeContext.Provider
      value={{
        theme: ancestralTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return { ...theme };
};
