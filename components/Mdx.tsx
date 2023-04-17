/* eslint-disable jsx-a11y/alt-text */
import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import {
  MDXRemote,
  MDXRemoteProps,
  MDXRemoteSerializeResult
} from 'next-mdx-remote';
import { Button, LinkButton, IconButton } from './ui/button';
import { Icon } from './ui/icon';
import { Tag, Tags } from './ui/tag';
import { Box, Flex, Stack } from './ui/box';
import { Prose } from './ui/prose';
import { TextLink } from './TextLink';
import { Text, Heading } from './ui/typography';
import { useTheme, spacing } from '../lib/theme';
import { Divider } from './Divider';
import { CodeEditor, StaticCode } from './CodeEditor';
import { Table, TableHead, TableRow, TableCell } from './Table';
import { YouTubeVideo } from './YouTubeVideo';

const DsComponents = {
  Box,
  Button,
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
  spacing
};

const InlineCode = (props: any) => {
  const { fontFamilies } = useTheme();
  return (
    <Box
      as="pre"
      padding="xxsmall"
      rounding="small"
      bg="emphasis"
      color="default"
      css={{
        display: 'inline',
        fontFamily: fontFamilies.mono
      }}
      {...props}
    />
  );
};

const components: MDXRemoteProps['components'] = {
  hr: () => <Divider />,
  code: ({
    live,
    children,
    className
  }: PropsWithChildren<{
    live?: boolean;
    className?: string;
  }>) => {
    if (live) {
      return <CodeEditor components={DsComponents}>{children}</CodeEditor>;
    } else {
      return <StaticCode className={className}>{children}</StaticCode>;
    }
  },
  inlineCode: ({ children }: { children: ReactNode }) => {
    return <InlineCode>{children}</InlineCode>;
  },
  table: ({ children, ...props }: HTMLAttributes<HTMLTableElement>) => {
    return <Table {...props}>{children}</Table>;
  },
  thead: ({ children, ...props }: HTMLAttributes<HTMLTableSectionElement>) => {
    return <TableHead {...props}>{children}</TableHead>;
  },
  tr: ({ children }: HTMLAttributes<HTMLTableRowElement>) => {
    return <TableRow>{children}</TableRow>;
  },
  td: ({ children }: HTMLAttributes<HTMLTableCellElement>) => {
    return <TableCell>{children}</TableCell>;
  },
  YouTubeVideo
};

export const MdxContent = ({
  source,
  hideH1
}: {
  source: MDXRemoteSerializeResult;
  hideH1?: boolean;
}) => {
  return (
    <MDXRemote
      components={{ ...components, ...(hideH1 ? { h1: () => null } : {}) }}
      {...source}
    />
  );
};
