import { Global } from '@emotion/react';
import { Fragment } from 'react';
import Helmet from 'react-helmet';

import { Footer } from './footer';
import { useTheme } from '@nathsimpson/theme';

// TODO: delete this?
export const Layout = ({ children }) => {
  const { colors, fontSizes, fontFamilies } = useTheme();
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nathan Simpson - UI Designer + Developer</title>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FA6D01" />
        <meta name="theme-color" content={colors.background.default} />
      </Helmet>
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
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};
