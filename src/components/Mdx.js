/** @jsx jsx */
import { jsx } from '@emotion/core';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import dracula from 'prism-react-renderer/themes/dracula';

import { Badge } from './src/badge';
import { Logo } from './src/logo';
import { Card } from './src/card';
import { colors, spacing, borderRadius } from '../theme';

const DsComponents = {
  Badge,
  Card,
  Logo
};

const components = {
  code: props => (
    <div
      css={{
        border: `1px solid ${colors.border}`,
        // padding: '16px 24px',
        borderRadius: borderRadius.lg
      }}
    >
      <LiveProvider code={props.children} scope={DsComponents} {...props}>
        <div
          css={{
            padding: spacing.medium
          }}
        >
          <LivePreview />
        </div>
        <LiveError />
        <LiveEditor
          theme={dracula}
          style={{
            background: colors.backgroundEmphasis
          }}
        />
      </LiveProvider>
    </div>
  )
};

export const Mdx = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  );
};
