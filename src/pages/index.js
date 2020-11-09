/** @jsx jsx */
import { jsx } from '@emotion/core';
import { graphql } from 'gatsby';

import Portfolio from '../components/Portfolio';
import { Development } from '../components/Development';
import { Talks } from '../components/Talks';
import { Block, Contact, Dribbble, Layout, Logo } from '../components';

const App = ({ data }) => (
  <Layout>
    <div
      css={{
        display: 'flex',
        alignItems: 'flex-start',
        minHeight: '60vh',
        maxWidth: 800,
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <Logo />
      <h1>Nathan Simpson</h1>
      <p>
        I'm a UI Designer &amp; Developer at{' '}
        <a href="https://thinkmill.com.au">Thinkmill</a> in Sydney, Australia.
        I'm passionate about Design Systems, and building products from concept
        to delivery.
      </p>

      <div css={{ marginBottom: 12 }}>
        <a css={{ display: 'inline', marginRight: 16 }} href="/about">
          About
        </a>
        <a css={{ display: 'inline', marginRight: 16 }} href="/blog">
          Blog
        </a>
      </div>
    </div>

    <Portfolio data={data} />

    <Development />

    <Dribbble />

    <Block>
      <h2>Talks</h2>
      <Talks data={data} />
    </Block>

    <Contact />
  </Layout>
);

export const portfolioQuery = graphql`
  query IndexProjects {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          html
          frontmatter {
            path
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

export default App;
