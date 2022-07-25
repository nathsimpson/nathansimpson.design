/* eslint-disable jsx-a11y/alt-text */
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Button, LinkButton, IconButton } from '@nathsimpson/button';
import { Icon } from '@nathsimpson/icon';
import { Tag, Tags } from '@nathsimpson/tag';
import { Box, Flex, Stack } from '@nathsimpson/box';
import { Prose } from '@nathsimpson/prose';
import { Card } from '@nathsimpson/card';
import { TextLink } from '@nathsimpson/text-link';
import { Text, Heading } from '@nathsimpson/typography';
import { useTheme, spacing } from '@nathsimpson/theme';
import { Divider } from './Divider';
import { TextLinkGatsby } from './TextLinkGatsby';

import { CodeEditor, CodePreview } from './CodeEditor';
import { Table, TableHead, TableRow, TableCell } from './Table';

const DsComponents = {
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  LinkButton,
  Prose,
  Stack,
  Tag,
  Tags,
  Text,
  TextLink,
  TextLinkGatsby,
  spacing
};

const InlineCode = (props) => {
  const { colors, radii, spacing, fontFamilies } = useTheme();
  return (
    <Text
      as="pre"
      css={{
        display: 'inline',
        fontFamily: fontFamilies.mono,
        color: colors.text.emphasis,
        backgroundColor: colors.background.emphasis,
        padding: spacing.xxsmall,
        borderRadius: radii.small
      }}
      {...props}
    />
  );
};

const components = {
  p: (props) => <Text {...props} />,
  a: (props) => <TextLink {...props} />,
  h1: (props) => <Heading level={1} {...props} />,
  h2: (props) => <Heading level={2} {...props} />,
  h3: (props) => <Heading level={3} {...props} />,
  h4: (props) => <Heading level={4} {...props} />,
  h5: (props) => <Heading level={5} {...props} />,
  h6: (props) => <Heading level={6} {...props} />,
  em: (props) => (
    <Text as="em" color="emphasis" css={{ fontStyle: 'normal' }} {...props} />
  ),
  ul: (props) => <Box as="ul" margin="none" {...props} />,
  img: (props) => (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <img {...props} />
    </div>
  ),
  hr: () => <Divider />,
  code: (props) => {
    if (props.live) {
      return <CodeEditor components={DsComponents} {...props} />;
    } else {
      return <CodePreview {...props} />;
    }
  },
  inlineCode: (props) => {
    return <InlineCode {...props} />;
  },
  table: (props) => {
    return <Table {...props} />;
  },
  thead: (props) => {
    return <TableHead {...props} />;
  },
  tr: (props) => {
    return <TableRow {...props} />;
  },
  td: (props) => {
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
