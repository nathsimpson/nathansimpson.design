/** @jsx jsx */
import { jsx } from '@emotion/core';
import { graphql } from 'gatsby';

import { DesignSystemTemplate } from '../components';

export default ({ data }) => {
  return <DesignSystemTemplate data={data} />;
};

export const dsComponentQuery = graphql`
  query DesignSystemPageQuery($path: String) {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          body
          frontmatter {
            path
            date(formatString: "MMMM DD YYYY")
            updated(formatString: "MMMM DD YYYY")
            title
            imagesrc
            type
            youtubeid
          }
        }
      }
    }
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
