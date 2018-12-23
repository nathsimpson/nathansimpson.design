import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Template extends React.Component {
  render() {
    const project = this.props.data.markdownRemark;
    return (
      <div
        style={{
          width: "100%",
          maxWidth: "1140px",
          padding: "0 15px",
          margin: "0 auto",
          boxSizing: "border-box"
        }}
      >
        <Header />
        <div className="project">
          <Link to={`/`}>Back</Link>
          <h1>{project.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: project.html }} />
        </div>
        <Footer />
      </div>
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
