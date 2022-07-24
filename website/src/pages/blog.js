/** @jsx jsx */
import { jsx } from '@emotion/core';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { Header, Container, Divider } from '../components';
import { Tag } from '@nathsimpson/tag';
import { useCardStyles } from '@nathsimpson/card';
import { Flex, Stack } from '@nathsimpson/box';
import { Heading, Text } from '@nathsimpson/typography';
import { spacing, maxWidth } from '@nathsimpson/theme';
import { TextLinkGatsby } from '../components/TextLinkGatsby';
import { PostCard } from '../components/PostCard';

const Blog = ({ data }) => (
  <div>
    <Header />
    <Helmet>
      <title>Blog - Nathan Simpson</title>
    </Helmet>
    <Container maxWidth="content">
      <Stack gap="xlarge">
        <Stack gap="small">
          <Heading level={1}>Blog</Heading>
          <Text>A collection of thoughts and experiences.</Text>
        </Stack>

        <Stack gap="large">
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
      </Stack>
    </Container>
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
