import React, { ReactElement, createContext, useContext } from 'react';

import { themeDark, Theme } from './themes';

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "dark" as the default).
export const ThemeContext = createContext({
  theme: themeDark
});

export const ThemeProvider = ({
  children,
  theme: definedTheme
}: {
  children: ReactElement;
  theme?: Theme;
}) => {
  const defaultTheme = useTheme();

  return (
    <ThemeContext.Provider
      value={{
        theme: definedTheme || defaultTheme
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
