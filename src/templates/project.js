/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from '../components/src/layout';
import { Header } from '../components';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Heading } from '../../design-system/typography';

export default ({ data }) => {
  const project = data.mdx;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{project.frontmatter.title} - Nathan Simpson's portfolio</title>
      </Helmet>
      <Header />

      <div css={{ maxWidth: 800, margin: '0 auto' }}>
        <Heading level={1}>{project.frontmatter.title}</Heading>
        <MDXRenderer>{project.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ProjectsByPath($path: String) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        title
        path
        date(formatString: "MMMM DD YYYY")
        type
      }
    }
  }
`;
