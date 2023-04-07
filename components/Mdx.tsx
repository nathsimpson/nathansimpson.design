/* eslint-disable jsx-a11y/alt-text */
import { PropsWithChildren } from 'react';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { Button, LinkButton, IconButton } from './design-system/button';
import { Icon } from './design-system/icon';
import { Tag, Tags } from './design-system/tag';
import { Box, Flex, Stack } from './design-system/box';
import { Prose } from './design-system/prose';
import { Card } from './design-system/card';
import { TextLink } from './design-system/text-link';
import { Text, Heading } from './design-system/typography';
import { useTheme, spacing } from './design-system/theme';
import { PropsWithOnlyChildren } from '../interfaces';
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
  code: ({
    live,
    ...props
  }: PropsWithChildren<{
    live?: boolean;
  }>) => {
    if (live) {
      return <CodeEditor components={DsComponents} {...props} />;
    } else {
      return <StaticCode {...props} />;
    }
  },
  inlineCode: (props: PropsWithOnlyChildren) => {
    return <InlineCode {...props} />;
  },
  table: (props: PropsWithOnlyChildren) => {
    return <Table {...props} />;
  },
  thead: (props: PropsWithOnlyChildren) => {
    return <TableHead {...props} />;
  },
  tr: (props: PropsWithOnlyChildren) => {
    return <TableRow {...props} />;
  },
  td: (props: PropsWithOnlyChildren) => {
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
