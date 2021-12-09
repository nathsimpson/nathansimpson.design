import React, { ReactElement, createContext, useContext } from 'react';

import { themeDark } from './themes';

type ThemeContextType = {
  theme: typeof themeDark;
};

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "dark" as the default).
export const ThemeContext = createContext<ThemeContextType>({
  theme: themeDark
});

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('You must wrap your app in a ThemeProvider');
  }
  return context;
}

export const ThemeProvider = ({
  children,
  theme: providedTheme
}: {
  children: ReactElement;
  theme: typeof themeDark;
}) => {
  // TODO: do proper deep-merging here
  const theme = { ...themeDark, ...providedTheme };

  return (
    <ThemeContext.Provider
      value={{
        theme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme } = useThemeContext();
  return theme;
};
