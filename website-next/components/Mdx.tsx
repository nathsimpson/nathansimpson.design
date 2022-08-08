/* eslint-disable jsx-a11y/alt-text */
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
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
import { NextTextLink } from './NextTextLink';

import { CodeEditor, StaticCode } from './CodeEditor';
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
  NextTextLink,
  spacing
};

const InlineCode = (props) => {
  const { fontFamilies } = useTheme();
  return (
    <Box
      as="pre"
      padding="xxsmall"
      rounding="small"
      bg="emphasis"
      color="emphasis"
      css={{
        display: 'inline',
        fontFamily: fontFamilies.mono
      }}
      {...props}
    />
  );
};

const components = {
  hr: () => <Divider />,
  code: (props) => {
    if (props.live) {
      return <CodeEditor components={DsComponents} {...props} />;
    } else {
      return <StaticCode {...props} />;
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

export const MdxContent = ({
  content,
  hideH1
}: {
  content: MDXRemoteProps;
  hideH1?: boolean;
}) => {
  return (
    <MDXRemote
      components={{
        ...components,
        ...(hideH1 ? { h1: () => null } : {})
      }}
      {...content}
    />
  );
};
