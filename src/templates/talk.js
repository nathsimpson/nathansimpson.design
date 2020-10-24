/** @jsx jsx */
import { jsx } from '@emotion/core';
import Helmet from 'react-helmet';

import Layout from '../components/src/layout';
import { Header } from '../components';
import { graphql } from 'gatsby';
import { fontsizes } from '../theme';

export default ({ data }) => {
  const talk = data.markdownRemark;

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{talk.frontmatter.title} - Nathan Simpson's talks</title>
      </Helmet>
      <Header />
      <iframe
        width="100%"
        height="450"
        css={{
          boxSizing: 'border-box',
          paddingRight: 16,
          width: '100%',
          maxWidth: 800
        }}
        src={`https://www.youtube.com/embed/${talk.frontmatter.youtubeid}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <h1 css={{ fontSize: fontsizes.xxlarge }}>{talk.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: talk.html }} />
    </Layout>
  );
};

export const query = graphql`
  query TalksByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
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
