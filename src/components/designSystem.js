/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { Card, Layout, Header } from '../components';
import { Mdx } from './Mdx';

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

        <Card>
          {post ? (
            <div>
              <Mdx>{post.body}</Mdx>
            </div>
          ) : (
            <div>
              <h1>Design System</h1>
              <p>This is the design system.</p>
            </div>
          )}
        </Card>
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
