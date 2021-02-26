/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Helmet } from 'react-helmet';
import { Layout, Header } from '../components';
import { Mdx } from './Mdx';

import { Heading, Text } from '../../design-system/typography';
import { Stack } from '../../design-system/stack';
import { TextLink, TextLinkGatsby } from '../../design-system/textlink';

export const DesignSystemTemplate = ({ data }) => {
  const post = data.mdx;

  return (
    <Layout>
      <Header />
      <Helmet>
        <title>Nathan Simpson - UI Designer + Developer</title>
      </Helmet>

      <div
        css={{
          display: 'grid',
          columnGap: 12,
          gridTemplateColumns: '300px 1fr'
        }}
      >
        <NavigationBar data={data.allMdx.edges} />

        <div>
          {post ? (
            <div>
              <Mdx>{post.body}</Mdx>
            </div>
          ) : (
            <Stack gap="medium">
              <Heading level={1}>Design System</Heading>
              <Text>
                Did I mention I love design systems? To prove it, this entire
                website is based on one.
              </Text>

              <Text>
                Explore all of the components in the left sidebar, or view the
                code on{' '}
                <TextLink href="https://github.com/nathsimpson/nathansimpson.design">
                  GitHub
                </TextLink>
                .
              </Text>
            </Stack>
          )}
        </div>
      </div>
    </Layout>
  );
};

const NavigationBar = ({ data }) => {
  return (
    <Stack
      as="ul"
      gap="small"
      css={{
        listStyle: 'none',
        padding: 0
      }}
    >
      <li>
        <TextLinkGatsby to="/design-system">
          <a>Welcome</a>
        </TextLinkGatsby>
      </li>
      {data

        .filter(({ node: p }) => p.frontmatter.type === 'design-system')
        .sort(({ node: { frontmatter: a } }, { node: { frontmatter: b } }) =>
          // assumes no two pages will be named the same.
          a.title > b.title ? 1 : -1
        )
        .map(({ node }) => {
          return (
            <li key={node.id}>
              <TextLinkGatsby to={node.frontmatter.path} key={node.id}>
                {node.frontmatter.title}
              </TextLinkGatsby>
            </li>
          );
        })}
    </Stack>
  );
};
