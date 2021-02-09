/** @jsx jsx */
import { jsx } from '@emotion/core';
import { graphql } from 'gatsby';

import { DesignSystemTemplate } from '../components/designSystem';

const DesignSystem = ({ data }) => {
  return <DesignSystemTemplate data={data} />;
};

export default DesignSystem;

export const dsComponentQuery = graphql`
  query allDSPages {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          html
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
  }
`;
