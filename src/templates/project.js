import React from 'react';
import Layout from '../components/src/layout';
import { graphql, Link } from 'gatsby';

export default class Template extends React.Component {
  render() {
    const project = this.props.data.markdownRemark;
    return (
      <Layout>
        <Link to="/">Back</Link>
        <h1>{project.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: project.html }} />
      </Layout>
    );
  }
}

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
