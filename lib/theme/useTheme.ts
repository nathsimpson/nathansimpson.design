import { useThemeContext } from './themecontext';

/** useTheme allows the use of design tokens anywhere in the application. */
export const useTheme = () => {
  const { theme } = useThemeContext();
  return theme;
};
