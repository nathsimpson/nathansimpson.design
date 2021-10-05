/** @jsx jsx */
import { jsx } from '@emotion/core';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { Header, Mdx } from '../components';
import { Divider } from '@design-system/divider';
import { Stack } from '@design-system/stack';
import { useTheme } from '@nathsimpson/theme';

import { Heading, Text } from '@design-system/typography';

const TalkTemplate = ({ data }) => {
  const talk = data.mdx;
  const { spacing } = useTheme();

  return (
    <article>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{talk.frontmatter.title} - Nathan Simpson's talks</title>
      </Helmet>
      <Header />
      <div
        css={{
          maxWidth: 800,
          margin: '0 auto',
          paddingLeft: spacing.xxlarge,
          paddingRight: spacing.xxlarge
        }}
      >
        <Stack gap="large">
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

          <Heading level={1}>{talk.frontmatter.title}</Heading>
          <Text as="span" token="xsmall">
            Posted on {talk.frontmatter.date}
          </Text>
          <Divider />

          <Mdx>{talk.body}</Mdx>
        </Stack>
      </div>
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
