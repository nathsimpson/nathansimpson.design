/** @jsx jsx */
import Layout from '../templates/layout';
import { jsx } from '@emotion/core';
import { graphql } from 'gatsby';

import Helmet from 'react-helmet';
import Portfolio from '../components/Portfolio';
import { Development } from '../components/Development';
import { Contact, Dribbble } from '../components';

const App = ({ data }) => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Nathan Simpson - UI Designer + Developer</title>
      <meta
        name="description"
        content="I am a UI Designer, Frontend Developer, and aspiring entrepreneur, passionate about building ideas from concept to prototype."
      />
    </Helmet>
    <main>
      <div
        css={{
          display: 'flex',
          minHeight: '60vh',
          maxWidth: 600,
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <h1 css={{ margin: 0 }}>Nathan Simpson</h1>

        <p css={{ margin: 0 }}>
          UI Designer &amp; Developer at{' '}
          <a href="https://thinkmill.com.au">Thinkmill</a> in Sydney, Australia.
          I'm passionate about Design Systems, and building products from
          concept to delivery.
        </p>
      </div>

      <Portfolio data={data} />

      <Development />

      <Dribbble />

      <Contact />
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
            path
            title
            imagesrc
            type
          }
        }
      }
    }
  }
`;

export default App;
