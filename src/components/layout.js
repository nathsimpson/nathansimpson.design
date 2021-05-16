/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import { Fragment } from 'react';
import Helmet from 'react-helmet';

import { Footer } from './footer';
import { useTheme } from '../../design-system/theme';

// TODO: delete this?
export const Layout = ({ children }) => {
  const { colors, fontsizes, fontFamilies } = useTheme();
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nathan Simpson - UI Designer + Developer</title>
      </Helmet>
      <Global
        styles={{
          // TODO: remove or clean me
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
            lineHeight: 1.5,
            maxWidth: 800
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
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};
