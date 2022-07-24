/** @jsx jsx */
import { jsx } from '@emotion/core';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Stack } from '@nathsimpson/box';
import { Heading, Text } from '@nathsimpson/typography';

import { Header, ContentContainer } from '../components';
import { PostCard } from '../components/PostCard';

const Blog = ({ data }) => (
  <div>
    <Header />
    <Helmet>
      <title>Blog - Nathan Simpson</title>
    </Helmet>
    <ContentContainer>
      <Stack gap="large">
        <Stack gap="small">
          <Heading level={1}>Blog</Heading>
          <Text>A collection of thoughts and experiences.</Text>
        </Stack>

        {data.allMdx.edges
          .filter(({ node: p }) =>
            ['post', 'talk'].includes(p.frontmatter.type)
          )
          .map(({ node }) => {
            return (
              <PostCard
                {...node.frontmatter}
                excerpt={node.excerpt}
                key={node.id}
              />
            );
          })}
      </Stack>
    </ContentContainer>
  </div>
);

export default Blog;

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
