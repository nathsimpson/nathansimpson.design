/** @jsx jsx */
import { jsx } from '@emotion/core';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { Prose } from '@nathsimpson/prose';
import { Stack } from '@nathsimpson/box';
import { Heading, Text } from '@nathsimpson/typography';

import { Divider, Header, Mdx, Container } from '../components';

const TalkTemplate = ({ data }) => {
  const talk = data.mdx;

  return (
    <article>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{talk.frontmatter.title} - Nathan Simpson's talks</title>
      </Helmet>
      <Header />
      <Container maxWidth="content">
        <Stack gap="medium">
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

          <Stack gap="xsmall">
            <Heading level={1}>{talk.frontmatter.title}</Heading>
            <Text as="span" size="xsmall">
              Posted on {talk.frontmatter.date}
            </Text>
          </Stack>
          <Divider />
          <Prose>
            <Mdx>{talk.body}</Mdx>
          </Prose>
        </Stack>
      </Container>
    </article>
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
