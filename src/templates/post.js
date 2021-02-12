/** @jsx jsx */
import { jsx } from '@emotion/core';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import { Mdx } from '../components/Mdx';
import Layout from '../components/src/layout';
import { Header } from '../components';
import { colors } from '../../design-system/theme';
import { Heading, Text } from '../../design-system/typography';

export default ({ data }) => {
  const post = data.mdx;

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post.frontmatter.title} - Nathan Simpson's blog</title>
      </Helmet>
      <Header backLink="/blog" />
      <div css={{ maxWidth: 800, margin: '0 auto' }}>
        <div
          css={{
            borderBottom: `1px solid ${colors.border}`
          }}
        >
          <Heading level={1}>{post.frontmatter.title}</Heading>
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              margin: '12px 0px'
            }}
          >
            <Text size="small" as="span">
              Posted on {post.frontmatter.date}.
              {post.frontmatter.updated &&
                ` Updated on ${post.frontmatter.updated}`}
            </Text>
          </div>
        </div>
        <Mdx>{post.body}</Mdx>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PostsByPath($path: String) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        title
        path
        date(formatString: "MMMM DD YYYY")
        updated(formatString: "MMMM DD YYYY")
        type
      }
    }
  }
`;
