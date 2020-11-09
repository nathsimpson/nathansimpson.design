/** @jsx jsx */
import { jsx } from '@emotion/core';
import { graphql } from 'gatsby';

import { Card, Layout, Header, Badge } from '../components';
import { fontsizes, colors } from '../theme';

const PostCard = ({ id, frontmatter, html }) => {
  return (
    <Card
      style={{
        marginBottom: 32
      }}
    >
      <div
        css={{
          borderBottom: `1px solid ${colors.slate['50']}`
        }}
      >
        <a href={frontmatter.path}>
          <h2 css={{ margin: 0 }}>{frontmatter.title}</h2>
        </a>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            margin: '12px 0px'
          }}
        >
          <Badge label={frontmatter.type} size="small" />
          <span css={{ marginLeft: 6, fontSize: fontsizes.xsmall }}>
            Posted on {frontmatter.date}
          </span>
        </div>
      </div>

      {frontmatter.youtubeid && (
        <img
          css={{ width: '100%', height: 200, objectFit: 'cover' }}
          src={`https://i.ytimg.com/vi/${frontmatter.youtubeid}/hqdefault.jpg`}
        />
      )}

      <div
        dangerouslySetInnerHTML={{
          __html: `${html.slice(0, 220)}...`
        }}
      />

      <a href={frontmatter.path}>Read more</a>
    </Card>
  );
};

export default ({ data }) => (
  <Layout>
    <Header />
    <div css={{ maxWidth: 800, margin: '0 auto' }}>
      <h1>Blog</h1>
      <p>A collection of thoughts and experiences.</p>

      <div css={{ marginTop: 24 }}>
        {data.allMarkdownRemark.edges
          .filter(({ node: p }) =>
            ['post', 'talk'].includes(p.frontmatter.type)
          )
          .map(({ node }) => {
            return <PostCard {...node} key={node.id} />;
          })}
      </div>
    </div>
  </Layout>
);

export const talksQuery = graphql`
  query allPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          html
          frontmatter {
            path
            date
            title
            imagesrc
            type
            youtubeid
          }
        }
      }
    }
  }
`;
