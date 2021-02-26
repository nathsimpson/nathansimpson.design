/** @jsx jsx */
import { jsx } from '@emotion/core';
import { graphql } from 'gatsby';

import { Layout, Header } from '../components';
import { Tag } from '../../design-system/tag';
import { Divider } from '../../design-system/divider';
import { Card } from '../../design-system/card';
import { Stack } from '../../design-system/stack';
import { Heading, Text } from '../../design-system/typography';

const PostCard = ({ id, frontmatter, body, excerpt }) => {
  return (
    <Card>
      <div>
        <a href={frontmatter.path}>
          <Heading level={2} css={{ margin: 0 }}>
            {frontmatter.title}
          </Heading>
        </a>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            margin: '12px 0px'
          }}
        >
          <Tag label={frontmatter.type} size="small" />
          <Text as="span" size="small" css={{ marginLeft: 6 }}>
            Posted on {frontmatter.date}
            {frontmatter.updated && `. Updated on ${frontmatter.updated}`}
          </Text>
        </div>
      </div>
      <Stack gap="small">
        <Divider />

        {frontmatter.youtubeid && (
          <img
            css={{ width: '100%', height: 200, objectFit: 'cover' }}
            src={`https://i.ytimg.com/vi/${frontmatter.youtubeid}/hqdefault.jpg`}
          />
        )}

        <p
          dangerouslySetInnerHTML={{
            __html: frontmatter.description || excerpt
          }}
        />

        <a href={frontmatter.path}>Read more</a>
      </Stack>
    </Card>
  );
};

export default ({ data }) => (
  <Layout>
    <Header />
    <div css={{ maxWidth: 800, margin: '0 auto' }}>
      <Stack gap="xxlarge">
        <Stack gap="medium" marginX="xlarge">
          <Heading level={1}>Blog</Heading>
          <Text>A collection of thoughts and experiences.</Text>
        </Stack>

        {data.allMdx.edges
          .filter(({ node: p }) =>
            ['post', 'talk'].includes(p.frontmatter.type)
          )
          .map(({ node }) => {
            return <PostCard {...node} key={node.id} />;
          })}
      </Stack>
    </div>
  </Layout>
);

export const talksQuery = graphql`
  query allPosts {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          body
          excerpt
          frontmatter {
            path
            date(formatString: "MMMM DD YYYY")
            updated(formatString: "MMMM DD YYYY")
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
