/** @jsx jsx */
import { jsx } from '@emotion/core';
import { graphql } from 'gatsby';

import { Layout, Header } from '../components';
import { Tag } from '../../design-system/tag';
import { Divider } from '../../design-system/divider';
import { Card } from '../../design-system/card';
import { FlexBox } from '../../design-system/box';
import { Stack } from '../../design-system/stack';
import { Heading, Text } from '../../design-system/typography';
import { TextLinkGatsby } from '../../design-system/textlink';

const PostCard = ({ id, frontmatter, body, excerpt }) => {
  const postedOn = `${frontmatter.date}. ${
    frontmatter.updated ? `Updated ${frontmatter.updated}.` : ''
  }`;

  return (
    <Card>
      <Stack gap="small">
        <TextLinkGatsby to={frontmatter.path}>
          <Heading level={2}>{frontmatter.title}</Heading>
        </TextLinkGatsby>
        <FlexBox orientation="horizontal" align="center">
          <Tag label={frontmatter.type} size="small" />
          <Text as="span" size="small" marginLeft="small">
            {postedOn}
          </Text>
        </FlexBox>

        <Divider />

        {frontmatter.youtubeid && (
          <img
            css={{ width: '100%', height: 400, objectFit: 'cover' }}
            src={`https://i.ytimg.com/vi/${frontmatter.youtubeid}/hqdefault.jpg`}
          />
        )}

        <Text
          dangerouslySetInnerHTML={{
            __html: frontmatter.description || excerpt
          }}
        />

        <TextLinkGatsby to={frontmatter.path}>Read more</TextLinkGatsby>
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
