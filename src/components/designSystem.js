/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Helmet } from 'react-helmet';
import { Container, Layout, Header } from '../components';
import { Mdx } from './Mdx';

import { Stack } from '../../design-system/stack';
import { TextLinkGatsby } from '../../design-system/textlink';

export const DesignSystemTemplate = ({ data }) => {
  const post = data.mdx;

  return (
    <Layout>
      <Header />
      <Helmet>
        <title>Nathan Simpson - UI Designer + Developer</title>
      </Helmet>

      <Container>
        <div
          css={{
            display: 'grid',
            columnGap: 12,
            gridTemplateColumns: '240px 1fr'
          }}
        >
          <NavigationBar data={data.allMdx.edges} />

          <Mdx>{post.body}</Mdx>
        </div>
      </Container>
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

        .filter(
          ({ node: p }) =>
            p.frontmatter.type === 'design-system' &&
            p.frontmatter.title !== 'Design System'
        )
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
