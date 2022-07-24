/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { Prose } from '@nathsimpson/prose';
import { Stack } from '@nathsimpson/box';
import { Heading, Text } from '@nathsimpson/typography';

import {
  BackButton,
  Divider,
  Header,
  Mdx,
  ContentContainer
} from '../components';

const TalkTemplate = ({ data }) => {
  const talk = data.mdx;

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{talk.frontmatter.title} - Nathan Simpson's talks</title>
      </Helmet>
      <Header />
      <ContentContainer as="article">
        <Stack gap="medium">
          <Stack gap="small">
            <BackButton link="/blog" />
            <Heading level={1}>{talk.frontmatter.title}</Heading>
            <Text size="small" as="span">
              Posted on {talk.frontmatter.date}
            </Text>
            <Divider />
          </Stack>
          <iframe
            width="100%"
            height="450"
            css={{
              boxSizing: 'border-box',
              paddingRight: 16,
              width: '100%'
            }}
            src={`https://www.youtube.com/embed/${talk.frontmatter.youtubeid}`}
            frameBorder="0"
            title="YouTube video"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <Prose>
            <Mdx>{talk.body}</Mdx>
          </Prose>
        </Stack>
      </ContentContainer>
    </Fragment>
  );
};

export const query = graphql`
  query TalksByPath($path: String) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        title
        path
        date(formatString: "MMMM DD YYYY")
        type
        youtubeid
      }
    }
  }
`;

export default TalkTemplate;
