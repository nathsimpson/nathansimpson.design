/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { Stack } from '@nathsimpson/';
import { Heading, Text } from '@nathsimpson/typography';
import { Prose } from '@nathsimpson/prose';

import {
  BackButton,
  ContentContainer,
  Divider,
  Header,
  Mdx,
  YouTubeVideo
} from '../components';

const PostTemplate = ({ data }) => {
  const { frontmatter, body } = data.mdx;

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{frontmatter.title} - Nathan Simpson's blog</title>
      </Helmet>
      <Header />
      <ContentContainer as="article">
        <Stack gap="medium">
          <Stack gap="small">
            <BackButton link="/blog" />
            <Heading level={1}>{frontmatter.title}</Heading>
            <Text size="small" as="span">
              Posted on {frontmatter.date}.
              {frontmatter.updated && ` Updated on ${frontmatter.updated}`}
            </Text>
            <Divider />
          </Stack>
          {frontmatter.youtubeid && (
            <YouTubeVideo videoId={frontmatter.youtubeid} />
          )}
          <Prose>
            <Mdx>{body}</Mdx>
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
        youtubeid
      }
    }
  }
`;

export default PostTemplate;
