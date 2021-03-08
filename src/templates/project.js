/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Header, Layout, Mdx } from '../components';
import { BackButton } from '../components/backButton';
import { spacing } from '../../design-system/theme';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default ({ data }) => {
  const project = data.mdx;
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{project.frontmatter.title} - Nathan Simpson's portfolio</title>
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
        <BackButton link="/" />

        <Mdx>{project.body}</Mdx>
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
