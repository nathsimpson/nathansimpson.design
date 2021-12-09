/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import { Fragment, ReactElement } from 'react';
import { ThemeProvider, useTheme } from '@nathsimpson/theme';

import { useThemeSelection } from '../utils/useThemeSelection';

export const Core = ({ children }: { children: ReactElement }) => {
  const { currentTheme } = useThemeSelection();

  console.log('currentTheme', currentTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <Fragment>
        <GlobalStyles />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};

const GlobalStyles = () => {
  const { colors, fontsizes, fontFamilies } = useTheme();
  return (
    <Global
      styles={{
        body: {
          fontSize: fontsizes.medium,
          margin: 0,
          padding: 0,
          lineHeight: 1.5,
          fontFamily: fontFamilies.body,
          color: colors.text.default,
          backgroundColor: colors.background.default
        },

        p: {
          fontSize: fontsizes.medium,
          lineHeight: 1.5
        },

        img: {
          maxWidth: '100%'
        },

        blockquote: {
          borderLeft: `3px solid ${colors.global.brand}`,
          margin: 0,
          paddingLeft: 12,
          color: 'white'
        }
      }}
    />
  );
};
