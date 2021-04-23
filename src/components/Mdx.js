/** @jsx jsx */
import { jsx } from '@emotion/core';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { codeHighlightTheme } from './codeHighlightTheme';

import { Button, LinkButton } from '../../design-system/button';
import { ContentCard } from '../../design-system/contentcard';
import { Icon } from '../../design-system/icon';
import { Tiles } from '../../design-system/tiles';
import { Tag } from '../../design-system/tag';
import { Box, FlexBox } from '../../design-system/box';
import { Stack } from '../../design-system/stack';
import { Logo } from '../../design-system/logo';
import { Card } from '../../design-system/card';
import { Cluster } from '../../design-system/cluster';
import { TextLink, TextLinkGatsby } from '../../design-system/textlink';
import { Text, Heading } from '../../design-system/typography';

import { colors, spacing, radii, fontsizes } from '../../design-system/theme';
import { Divider } from '../../design-system/divider';

const DsComponents = {
  Box,
  Button,
  Card,
  Cluster,
  ContentCard,
  Divider,
  FlexBox,
  Heading,
  Icon,
  LinkButton,
  Logo,
  Stack,
  Tag,
  Text,
  TextLink,
  TextLinkGatsby,
  Tiles
};

const CodePreview = props => {
  const className = props.className || '';
  const matches = className.match(/language-(?<lang>.*)/);
  return (
    <Highlight
      {...defaultProps}
      code={props.children.trim()}
      theme={codeHighlightTheme}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ''
      }
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })} key={i}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} key={key} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

const CodeEditor = props => (
  <div
    css={{
      border: `1px solid ${colors.border}`,
      borderRadius: radii.medium
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
        theme={codeHighlightTheme}
        style={{
          fontSize: fontsizes.medium,
          background: colors.backgroundEmphasis
        }}
      />
    </LiveProvider>
  </div>
);

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
  code: props => {
    if (props.live) {
      return <CodeEditor {...props} />;
    } else {
      return <CodePreview {...props} />;
    }
  },
  inlineCode: props => {
    return (
      <Text
        as="pre"
        css={{
          display: 'inline',
          color: colors.foregroundEmphasis,
          backgroundColor: colors.backgroundEmphasis,
          padding: spacing.xsmall,
          borderRadius: radii.small
        }}
        {...props}
      />
    );
  }
};

export const Mdx = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  );
};
