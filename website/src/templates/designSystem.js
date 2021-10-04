/** @jsx jsx */
import { jsx } from '@emotion/react';
import { graphql } from 'gatsby';

import { DesignSystemTemplate as Layout } from '../components';

const DesignSystemTemplate = ({ data }) => {
  return <Layout data={data} />;
};

export const dsComponentQuery = graphql`
  query DesignSystemPageQuery($path: String) {
    allMdx(
      sort: { fields: [frontmatter___title], order: ASC }
      filter: { frontmatter: { type: { eq: "design-system" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            section
            title
            type
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

export default DesignSystemTemplate;
