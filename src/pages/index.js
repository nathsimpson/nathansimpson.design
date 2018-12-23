import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Bio from "../components/Bio";
import ContactForm from "../components/ContactForm";
import Dribbble from "../components/Dribbble";

require("../style.scss");

const App = ({ data }) => (
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
    <Footer />
  </div>
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
