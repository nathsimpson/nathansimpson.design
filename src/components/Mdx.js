/** @jsx jsx */
import { jsx } from '@emotion/core';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import dracula from 'prism-react-renderer/themes/dracula';

import { Badge } from '../../design-system/badge';
import { Box, FlexBox } from '../../design-system/box';
import { Logo } from '../../design-system/logo';
import { Card } from '../../design-system/card';
import { Text, Heading } from '../../design-system/typography';

import { colors, spacing, radii } from '../../design-system/theme';
import { Divider } from '../../design-system/divider';

const DsComponents = {
  Badge,
  Box,
  FlexBox,
  Card,
  Divider,
  Heading,
  Logo,
  Text
};

const components = {
  p: props => <Text {...props} />,
  h1: props => <Heading level={1} {...props} />,
  h2: props => <Heading level={2} {...props} />,
  h3: props => <Heading level={3} {...props} />,
  h4: props => <Heading level={4} {...props} />,
  h5: props => <Heading level={5} {...props} />,
  h6: props => <Heading level={6} {...props} />,
  hr: () => <Divider />,
  code: props => (
    <div
      css={{
        border: `1px solid ${colors.border}`,
        // padding: '16px 24px',
        borderRadius: radii.lg
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
