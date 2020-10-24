/** @jsx jsx */
import { jsx } from '@emotion/core';
import { graphql } from 'gatsby';

import { Layout, Header } from '../components';
import { Talks } from '../components/Talks';

export default ({ data }) => (
  <Layout>
    <Header />
    <h1>Talks</h1>
    <Talks data={data} />
  </Layout>
);

export const talksQuery = graphql`
  query allTalks {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          html
          frontmatter {
            path
            title
            imagesrc
            type
            youtubeid
          }
        }
      }
    }
  }
`;
