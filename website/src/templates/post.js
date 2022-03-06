/** @jsxImportSource @emotion/react */
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { Header, Mdx } from '../components';
import { BackButton } from '../components/backButton';
import { Box } from '@design-system/box';
import { Divider } from '@design-system/divider';
import { Stack } from '@design-system/stack';
import { Heading, Text } from '@design-system/typography';
import { useTheme } from '@nathsimpson/theme';

const PostTemplate = ({ data }) => {
  const post = data.mdx;
  const { spacing } = useTheme();

  return (
    <article>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.frontmatter.title} - Nathan Simpson's blog</title>
      </Helmet>
      <Header />
      <Box
        css={{
          maxWidth: 800,
          margin: '0 auto',
          paddingLeft: spacing.xxlarge,
          paddingRight: spacing.xxlarge
        }}
      >
        <Stack gap="small">
          <BackButton link="/blog" />

          <Heading level={1}>{post.frontmatter.title}</Heading>
          <div
            css={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Text size="small" as="span">
              Posted on {post.frontmatter.date}.
              {post.frontmatter.updated &&
                ` Updated on ${post.frontmatter.updated}`}
            </Text>
          </div>

          <Divider />
          <Mdx>{post.body}</Mdx>
        </Stack>
      </Box>
    </article>
  );
};

export const query = graphql`
  query PostsByPath($path: String) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        title
        path
        date(formatString: "MMMM DD YYYY")
        updated(formatString: "MMMM DD YYYY")
        type
      }
    }
  }
`;

export default PostTemplate;
