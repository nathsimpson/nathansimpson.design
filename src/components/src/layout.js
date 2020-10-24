/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import Helmet from 'react-helmet';

import Footer from './footer';
import { colors, fontsizes, headings } from '../../theme';

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
      <meta
        name="description"
        content="I am a UI Designer, Frontend Developer, and aspiring entrepreneur, passionate about building ideas from concept to prototype."
      />
    </Helmet>
    <Global
      styles={{
        body: {
          fontSize: fontsizes.medium,
          margin: 0,
          padding: 0,
          lineHeight: 1.5,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'SF Pro Display','roboto',sans-serif",
          color: colors.slate[90],
          backgroundColor: colors.slate[10]
        },

        a: {
          color: colors.orange,
          textDecoration: 'none',

          '&:hover': {
            textDecoration: 'underline'
          }
        },

        p: {
          fontSize: fontsizes.medium,
          lineHeight: 1.5,
          fontFamily:
            'Monaco,Menlo,Consolas,"Droid Sans Mono","Inconsolata","Courier New",monospace',
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
          border: `1px solid ${colors.orange}`
        },

        blockquote: {
          borderLeft: `3px solid ${colors.orange}`,
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
