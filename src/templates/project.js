/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from '../components/src/layout';
import { Header } from '../components';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const project = data.markdownRemark;
  return (
    <Layout>
      <Header />

      <h1>{project.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
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
