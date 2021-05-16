import React, {
  ReactElement,
  createContext,
  useContext,
  useState
} from 'react';

import { themeDark, themeLight } from './themes';

type ThemeContextType = {
  themeName: 'light' | 'dark';
  onThemeChange: (themeName: 'light' | 'dark') => void;
};

// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.
// Create a context for the current theme (with "dark" as the default).
export const ThemeContext = createContext<ThemeContextType | null>(null);

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('You must wrap your app in a ThemeProvider');
  }
  return context;
}

export const ThemeProvider = ({ children }: { children: ReactElement }) => {
  const [themeName, setThemeName] = useState<'dark' | 'light'>('dark');

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        onThemeChange: setThemeName
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { themeName } = useThemeContext();
  return themeName === 'light' ? themeLight : themeDark;
};
