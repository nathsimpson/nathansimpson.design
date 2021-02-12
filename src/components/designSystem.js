/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { Layout, Header } from '../components';
import { Mdx } from './Mdx';

import { Heading, Text } from '../../design-system/typography';

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
            <div>
              <Heading level={1}>Design System</Heading>
              <Text>
                Did I mention I love design systems? To proove it, this entire
                website is based on one.
              </Text>

              <Text>
                Explore all of the components in the left sidebar, or view the
                code on GitHub.
              </Text>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

const NavigationBar = ({ data }) => {
  return (
    <ul
      css={{
        marginTop: 24,
        listStyle: 'none',
        padding: 0
      }}
    >
      <li>
        <Link to="/design-system">
          <a>Welcome</a>
        </Link>
      </li>
      {data
        .filter(({ node: p }) => ['design-system'].includes(p.frontmatter.type))
        .map(({ node }) => {
          return (
            <li key={node.id}>
              <Link to={node.frontmatter.path} key={node.id}>
                <a>{node.frontmatter.title}</a>
              </Link>
            </li>
          );
        })}
    </ul>
  );
};
