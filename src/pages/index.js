/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from '@emotion/core';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Portfolio from '../components/Portfolio';
import { Development } from '../components/Development';
import { Talks } from '../components/Talks';
import { Block, Contact, Dribbble, Layout } from '../components';
import { Logo } from '../../design-system/logo';

import { colors } from '../../design-system/theme';

const Hero = () => {
  return (
    <div
      css={{
        padding: '128px 0px',
        backgroundColor: colors.backgroundEmphasis,
        width: '100%'
      }}
    >
      <div
        css={{
          maxWidth: '1300px',
          padding: '0 24px',
          margin: '0 auto',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <Helmet>
          <meta
            name="description"
            content="I am a UI Designer, Frontend Developer, and aspiring entrepreneur, passionate about building ideas from concept to prototype."
          />
        </Helmet>
        <Logo />
        <h1>Nathan Simpson</h1>
        <p
          css={{
            maxWidth: 800
          }}
        >
          I'm a UI Designer &amp; Developer at{' '}
          <a href="https://thinkmill.com.au">Thinkmill</a> in Sydney, Australia.
          I'm passionate about Design Systems, and building products from
          concept to delivery.
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
    </div>
  );
};

const App = ({ data }) => (
  <Fragment>
    <Hero />

    <Layout>
      <Block>
        <h2>Design</h2>
        <p>
          Design has been my passion for over 10 years. I focus on User
          Interface (UI) Design for native and web apps, with the odd Branding
          project here and there.
        </p>

        <Portfolio data={data} />

        <Dribbble />
      </Block>

      <hr />

      <Development />

      <hr />

      <Block>
        <h2>Talks</h2>
        <Talks data={data} />
      </Block>

      <hr />

      <Contact />
    </Layout>
  </Fragment>
);

export const portfolioQuery = graphql`
  query IndexProjects {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          body
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
