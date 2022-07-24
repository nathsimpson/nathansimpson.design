/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import {
  BackButton,
  ContentContainer,
  Divider,
  Header,
  Mdx
} from '../components';
import { Box, Stack } from '@nathsimpson/box';
import { Heading, Text } from '@nathsimpson/typography';
import { Prose } from '@nathsimpson/prose';
import { useTheme } from '@nathsimpson/theme';

const PostTemplate = ({ data }) => {
  const post = data.mdx;
  const { spacing, maxWidth } = useTheme();

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.frontmatter.title} - Nathan Simpson's blog</title>
      </Helmet>
      <Header />
      <ContentContainer as="article">
        <Stack gap="small">
          <BackButton link="/blog" />
          <Heading level={1}>{post.frontmatter.title}</Heading>
          <Text size="small" as="span">
            Posted on {post.frontmatter.date}.
            {post.frontmatter.updated &&
              ` Updated on ${post.frontmatter.updated}`}
          </Text>
          <Divider />
          <Prose>
            <Mdx>{post.body}</Mdx>
          </Prose>
        </Stack>
      </ContentContainer>
    </Fragment>
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
