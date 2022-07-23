/** @jsx jsx */
import { jsx } from '@emotion/core';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import { Header } from '../components';
import { Tag } from '@design-system/tag';
import { Divider } from '../components/Divider';
import { useCardStyles } from '@nathsimpson/card';
import { Flex, Stack } from '@nathsimpson/box';
import { Heading, Text } from '@nathsimpson/typography';
import { spacing } from '@nathsimpson/theme';
import { TextLinkGatsby } from '../components/TextLinkGatsby';

const PostCard = ({ frontmatter, excerpt }) => {
  const cardStyles = useCardStyles();
  const postedOn = `${frontmatter.date}. ${
    frontmatter.updated ? `Updated ${frontmatter.updated}.` : ''
  }`;

  return (
    <div css={cardStyles}>
      <Stack gap="small">
        <TextLinkGatsby to={frontmatter.path}>
          <Heading level={2}>{frontmatter.title}</Heading>
        </TextLinkGatsby>
        <Flex flexDirection="row" align="center">
          <Tag label={frontmatter.type} size="small" />
          <Text as="span" size="small" marginLeft="small">
            {postedOn}
          </Text>
        </Flex>

        <Divider />

        {frontmatter.youtubeid && (
          <img
            css={{ width: '100%', height: 400, objectFit: 'cover' }}
            src={`https://i.ytimg.com/vi/${frontmatter.youtubeid}/hqdefault.jpg`}
            alt="Screenshot of YouTube video"
          />
        )}

        <Text
          dangerouslySetInnerHTML={{
            __html: frontmatter.description || excerpt
          }}
        />

        <TextLinkGatsby to={frontmatter.path}>Read more</TextLinkGatsby>
      </Stack>
    </div>
  );
};

const Blog = ({ data }) => (
  <div>
    <Header />
    <Helmet>
      <title>Blog - Nathan Simpson</title>
    </Helmet>
    <div
      css={{
        maxWidth: 800,
        margin: '0 auto',
        paddingLeft: spacing.small,
        paddingRight: spacing.small
      }}
    >
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
