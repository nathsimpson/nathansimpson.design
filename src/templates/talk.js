/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from '../components/src/layout';
import { Header } from '../components';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const talk = data.markdownRemark;

  return (
    <Layout>
      <Header />
      <h1>{talk.frontmatter.title}</h1>
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
