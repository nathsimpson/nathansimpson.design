import React from "react";
import Layout from "../templates/layout";

import Helmet from "react-helmet";
import Portfolio from "../components/Portfolio";
import Bio from "../components/Bio";
import ContactForm from "../components/ContactForm";
import Dribbble from "../components/Dribbble";

require("../style.scss");

const App = ({ data }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Nathan Simpson - Designer + Frontend Developer</title>
      <meta
        name="description"
        content="I am a UX Designer, Frontend Developer, and aspiring entrepreneur, passionate about building ideas from concept to prototype."
      />
    </Helmet>
    <main>
      <div id="intro">
        <h1
          style={{
            lineHeight: "1em",
            margin: "10px 0px"
          }}
        >
          NATHAN SIMPSON
        </h1>
        <p>
          I am a UX Designer, Frontend Developer, and aspiring entrepreneur,
          passionate about building ideas from concept to prototype.
        </p>
      </div>
      <hr />
      <Portfolio data={data} />
      <hr />
      <Bio />
      <hr />
      <Dribbble />
      <hr />
      <ContactForm />
    </main>
  </Layout>
);

export const portfolioQuery = graphql`
  query IndexProjects {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            imagesrc
          }
        }
      }
    }
  }
`;

export default App;
