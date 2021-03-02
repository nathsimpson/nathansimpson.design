/** @jsx jsx */
import { jsx } from '@emotion/core';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import dracula from 'prism-react-renderer/themes/dracula';

import { Button, LinkButton } from '../../design-system/button';
import { Tag } from '../../design-system/tag';
import { Box, FlexBox } from '../../design-system/box';
import { Stack } from '../../design-system/stack';
import { Logo } from '../../design-system/logo';
import { Card } from '../../design-system/card';
import { Cluster } from '../../design-system/cluster';
import { TextLink, TextLinkGatsby } from '../../design-system/textlink';
import { Text, Heading } from '../../design-system/typography';

import { colors, spacing, radii } from '../../design-system/theme';
import { Divider } from '../../design-system/divider';

const DsComponents = {
  Box,
  Button,
  Card,
  Cluster,
  Divider,
  FlexBox,
  Heading,
  LinkButton,
  Logo,
  Stack,
  Tag,
  Text,
  TextLink,
  TextLinkGatsby
};

const components = {
  p: props => <Text {...props} />,
  a: props => <TextLink {...props} />,
  h1: props => <Heading level={1} {...props} />,
  h2: props => <Heading level={2} {...props} />,
  h3: props => <Heading level={3} {...props} />,
  h4: props => <Heading level={4} {...props} />,
  h5: props => <Heading level={5} {...props} />,
  h6: props => <Heading level={6} {...props} />,
  em: props => (
    <Text as="em" color="emphasis" css={{ fontStyle: 'normal' }} {...props} />
  ),
  img: props => (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <img {...props} />
    </div>
  ),
  hr: () => <Divider />,
  wrapper: ({ children }) => <Stack gap="large">{children}</Stack>,
  code: props => (
    <div
      css={{
        border: `1px solid ${colors.border}`,
        // padding: '16px 24px',
        borderRadius: radii.large
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
