import { useState } from 'react';
import { themeDark, themeLight } from '@nathsimpson/theme';

const themes = {
  dark: themeDark,
  light: themeLight
};

export const useThemeSelection = () => {
  const [themeName, setThemeName] = useState<'dark' | 'light'>('dark');
  return { themeName, currentTheme: themes[themeName], setThemeName };
};
