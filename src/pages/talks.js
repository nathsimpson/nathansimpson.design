/** @jsx jsx */
import { jsx } from '@emotion/core';
import { graphql } from 'gatsby';

import { Layout, Header } from '../components';
import { Talks } from '../components/Talks';

import { Heading } from '../../design-system/typography';

export default ({ data }) => (
  <Layout>
    <Header />
    <Heading level={1}>Talks</Heading>
    <Talks data={data} />
  </Layout>
);

export const talksQuery = graphql`
  query allTalks {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          body
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
