/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import Helmet from 'react-helmet';

import Footer from './footer';
import { colors, fontsizes, headings, fontFamilies } from '../../theme';

export default ({ children }) => (
  <div
    style={{
      width: '100%',
      maxWidth: '1300px',
      padding: '0 24px',
      margin: '0 auto',
      boxSizing: 'border-box'
    }}
  >
    <Helmet>
      <meta charSet="utf-8" />
      <title>Nathan Simpson - UI Designer + Developer</title>
    </Helmet>
    <Global
      styles={{
        body: {
          fontSize: fontsizes.medium,
          margin: 0,
          padding: 0,
          lineHeight: 1.5,
          fontFamily: fontFamilies.body,
          color: colors.foreground,
          backgroundColor: colors.background
        },

        a: {
          color: colors.link,
          textDecoration: 'none',

          '&:hover': {
            textDecoration: 'underline'
          }
        },

        p: {
          fontSize: fontsizes.medium,
          lineHeight: 1.5,
          maxWidth: 800
        },

        h1: headings[1],
        h2: headings[2],
        h3: headings[3],
        h4: headings[4],

        img: {
          maxWidth: '100%'
        },

        hr: {
          border: `1px solid ${colors.brand}`
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
  </div>
);
