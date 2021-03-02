/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import Helmet from 'react-helmet';

import Footer from './footer';
import { colors, fontsizes, fontFamilies } from '../../../design-system/theme';

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
        // TODO: remove or clean me
        body: {
          fontSize: fontsizes.medium,
          margin: 0,
          padding: 0,
          lineHeight: 1.5,
          fontFamily: fontFamilies.body,
          color: colors.foreground,
          backgroundColor: colors.background
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
  </div>
);
