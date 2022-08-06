import { Fragment } from 'react';
import { graphql, PageProps } from 'gatsby';
import Helmet from 'react-helmet';
import { Stack } from '@nathsimpson/box';

import {
  Header,
  Container,
  Portfolio,
  Development,
  Talks,
  Dribbble
} from '../components';
import { Hero } from '../../../website-next/components/Hero';

const HomePage = ({ data }: PageProps<DataProps>) => (
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
      <Stack gap="xxxlarge" marginBottom="xxxlarge" alignItems="center">
        <Portfolio items={data.projects.edges} />
        <Development />
        <Dribbble />
        <Talks items={data.talks.edges} />
      </Stack>
    </Container>
  </Fragment>
);

export const portfolioQuery = graphql`
  query IndexProjects {
    talks: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "talk" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            type
            youtubeid
          }
        }
      }
    }
    projects: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            imagesrc
            tag
            desc
          }
        }
      }
    }
  }
`;

type DataProps = {
  talks: {
    edges: {
      node: {
        id: string;
        frontmatter: {
          path: string;
          title: string;
          type: string;
          youtubeid: string;
        };
      };
    }[];
  };
  projects: {
    edges: {
      node: {
        id: string;
        frontmatter: {
          path: string;
          title: string;
          imagesrc: string;
          tag: string;
          desc: string;
        };
      };
    }[];
  };
};

export default HomePage;
