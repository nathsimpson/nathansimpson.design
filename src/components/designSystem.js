/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Helmet } from 'react-helmet';
import { Card, Layout, Header } from '../components';

export const DesignSystemTemplate = ({ data }) => {
  const post = data.markdownRemark;

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
        <NavigationBar data={data.allMarkdownRemark.edges} />

        <Card>
          {post ? (
            <div>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        <a href="/design-system">Welcome</a>
      </li>
      {data
        .filter(({ node: p }) => ['designsystem'].includes(p.frontmatter.type))
        .map(({ node }) => {
          return (
            <li key={node.id}>
              <a href={node.frontmatter.path}>{node.frontmatter.title}</a>
            </li>
          );
        })}
    </ul>
  );
};
