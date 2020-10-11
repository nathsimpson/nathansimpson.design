/** @jsx jsx */
import { jsx } from '@emotion/core';
import { graphql } from 'gatsby';

import Portfolio from '../components/Portfolio';
import { Development } from '../components/Development';
import { Contact, Dribbble, Layout, Logo } from '../components';

const App = ({ data }) => (
  <Layout>
    <div
      css={{
        display: 'flex',
        alignItems: 'flex-start',
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
        I'm passionate about Design Systems, and building products from concept
        to delivery.
      </p>
    </div>

    <Portfolio data={data} />

    <Development />

    <Dribbble />

    <Contact />
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
