/** @jsxImportSource @emotion/react */
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Button, LinkButton, IconButton } from '@design-system/button';
import { Icon } from '@nathsimpson/icon';
import { Tiles } from '@design-system/tiles';
import { Tag, Tags } from '@design-system/tag';
import { Box, Flex } from '@design-system/box';
import { Stack } from '@design-system/stack';
import { Card } from '@design-system/card';
import { Cluster } from '@design-system/cluster';
import { TextLink, TextLinkGatsby } from '@design-system/textlink';
import { Text, Heading } from '@design-system/typography';
import { useTheme } from '@nathsimpson/theme';
import { Divider } from '@design-system/divider';

import { CodeEditor, CodePreview } from './CodeEditor';
import { Table, TableHead, TableRow, TableCell } from './Table';

const DsComponents = {
  Box,
  Button,
  Card,
  Cluster,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  LinkButton,
  Stack,
  Tag,
  Tags,
  Text,
  TextLink,
  TextLinkGatsby,
  Tiles
};

const InlineCode = props => {
  const { colors, radii, spacing, fontFamilies } = useTheme();
  return (
    <Text
      as="pre"
      css={{
        display: 'inline',
        fontFamily: fontFamilies.mono,
        color: colors.text.emphasis,
        backgroundColor: colors.background.emphasis,
        padding: spacing.xsmall,
        borderRadius: radii.small
      }}
      {...props}
    />
  );
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
  ul: props => <Box as="ul" margin="none" {...props} />,
  img: props => (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <img {...props} />
    </div>
  ),
  hr: () => <Divider />,
  wrapper: ({ children }) => <Stack gap="large">{children}</Stack>,
  code: props => {
    if (props.live) {
      return <CodeEditor components={DsComponents} {...props} />;
    } else {
      return <CodePreview {...props} />;
    }
  },
  inlineCode: props => {
    return <InlineCode {...props} />;
  },
  table: props => {
    return <Table {...props} />;
  },
  thead: props => {
    return <TableHead {...props} />;
  },
  tr: props => {
    return <TableRow {...props} />;
  },
  td: props => {
    return <TableCell {...props} />;
  }
};

export const Mdx = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  );
};

export const MdxWithoutH1 = ({ children }) => {
  return (
    <MDXProvider components={{ ...components, h1: () => null }}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  );
};
