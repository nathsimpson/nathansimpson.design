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
import { Heading, Text } from '../../design-system/typography';
import { Divider } from '../../design-system/divider';

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
        <Logo size="medium" />
        <Heading level={1}>Nathan Simpson</Heading>
        <div
          css={{
            maxWidth: 800
          }}
        >
          <Text>
            I'm a UI Designer &amp; Developer at{' '}
            <a href="https://thinkmill.com.au">Thinkmill</a> in Sydney,
            Australia. I'm passionate about Design Systems, and building
            products from concept to delivery.
          </Text>
        </div>

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
        <Heading level={2}>Design</Heading>
        <p>
          Design has been my passion for over 10 years. I focus on User
          Interface (UI) Design for native and web apps, with the odd Branding
          project here and there.
        </p>

        <Portfolio data={data} />

        <Dribbble />
      </Block>

      <Divider />

      <Development />

      <Divider />

      <Block>
        <Heading level={2}>Talks</Heading>
        <Talks data={data} />
      </Block>

      <Divider />

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
