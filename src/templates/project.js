import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../templates/layout';
import { Link } from 'gatsby';

export default class Template extends React.Component {
  render() {
    const project = this.props.data.markdownRemark;
    return (
      <Layout>
        <div className="project">
          <Link to="/">Back</Link>
          <h1>{project.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: project.html }} />
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query ProjectsBySlug($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`;
