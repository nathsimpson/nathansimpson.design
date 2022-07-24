/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from '@emotion/core';
import { graphql, PageProps } from 'gatsby';
import Helmet from 'react-helmet';
import { Stack } from '@nathsimpson/box';

import {
  Header,
  Container,
  Portfolio,
  Development,
  Talks,
  Divider,
  Dribbble
} from '../components';
import { Hero } from '../components/Hero';

const HomePage = ({ data }: PageProps) => (
  <Fragment>
    <Helmet>
      <meta
        name="description"
        content="I am a UI Designer, Frontend Developer, and aspiring entrepreneur, passionate about building ideas from concept to prototype."
      />
    </Helmet>
    <Header hasDivider={false} />
    <Hero />
    <Container>
      <Stack gap="xxxlarge" marginY="xxxlarge" alignItems="center">
        <Portfolio data={data} />
        <Development />
        <Dribbble />
        <Talks data={data} />
      </Stack>
    </Container>
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
            tag
            desc
          }
        }
      }
    }
  }
`;

export default HomePage;
