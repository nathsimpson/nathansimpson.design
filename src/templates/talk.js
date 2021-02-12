/** @jsx jsx */
import { jsx } from '@emotion/core';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/src/layout';
import { Header } from '../components';
import { colors } from '../../design-system/theme';

import { Heading, Text } from '../../design-system/typography';

export default ({ data }) => {
  const talk = data.mdx;

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{talk.frontmatter.title} - Nathan Simpson's talks</title>
      </Helmet>
      <Header />
      <div css={{ maxWidth: 800, margin: '0 auto' }}>
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
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div
          css={{
            borderBottom: `1px solid ${colors.border}`
          }}
        >
          <Heading level={1}>{talk.frontmatter.title}</Heading>
          <Text as="span" css={{ margin: '12px 0px' }} size="small">
            Posted on {talk.frontmatter.date}
          </Text>
        </div>

        <MDXRenderer>{talk.body}</MDXRenderer>
      </div>
    </Layout>
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
