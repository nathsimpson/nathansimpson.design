import { Global } from '@emotion/react';
import { createContext, useState, Fragment, ReactNode } from 'react';
import { ThemeProvider, useTheme, themeDark, themeLight } from '../lib/theme';

const themes = {
  dark: themeDark,
  light: themeLight
};

export const ThemeSelectionContext = createContext<{
  themeName: keyof typeof themes;
  setThemeName: (themeName: keyof typeof themes) => void;
}>({
  themeName: 'dark',
  // TODO: Redo theme context
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setThemeName: () => {}
});

export const Core = ({ children }: { children: ReactNode }) => {
  const [themeName, setThemeName] = useState<keyof typeof themes>('dark');

  return (
    <ThemeSelectionContext.Provider
      value={{
        themeName: themeName,
        setThemeName: setThemeName
      }}
    >
      <ThemeProvider theme={themes[themeName]}>
        <Fragment>
          <GlobalStyles />
          {children}
        </Fragment>
      </ThemeProvider>
    </ThemeSelectionContext.Provider>
  );
};

const GlobalStyles = () => {
  const { colors, fontSizes, fontFamilies } = useTheme();
  return (
    <Global
      styles={{
        body: {
          fontSize: fontSizes.medium,
          margin: 0,
          padding: 0,
          lineHeight: 1.5,
          fontFamily: fontFamilies.body,
          color: colors.text.default,
          backgroundColor: colors.background.default
        },

        p: {
          fontSize: fontSizes.medium,
          lineHeight: 1.5
        },

        img: {
          maxWidth: '100%'
        },

        blockquote: {
          borderLeft: `3px solid ${colors.brand}`,
          margin: 0,
          paddingLeft: 12,
          color: 'white'
        }
      }}
    />
  );
};
