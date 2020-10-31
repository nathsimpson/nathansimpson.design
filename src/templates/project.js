/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from '../components/src/layout';
import { Header } from '../components';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default ({ data }) => {
  const project = data.markdownRemark;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{project.frontmatter.title} - Nathan Simpson's portfolio</title>
      </Helmet>
      <Header />

      <div css={{ maxWidth: 800, margin: '0 auto' }}>
        <h1>{project.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: project.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ProjectsByPath($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        date(formatString: "MMMM DD YYYY")
        type
      }
    }
  }
`;
