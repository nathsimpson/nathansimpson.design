import { Fragment } from 'react';
import { BackButton } from '../components/backButton';
import { Heading } from '@nathsimpson/typography';
import { Stack } from '@nathsimpson/box';
import { Prose } from '@nathsimpson/prose';
import { Tags } from '@nathsimpson/tag';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import { ContentContainer, Header, MdxWithoutH1 } from '../components';

const ProjectTemplate = ({ data }) => {
  const project = data.mdx;
  const skills = project.frontmatter.skills
    ? project.frontmatter.skills.split(',')
    : [];

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{project.frontmatter.title} - Nathan Simpson's portfolio</title>
      </Helmet>
      <Header />
      <ContentContainer>
        <Stack gap="medium" as="article">
          <Stack gap="small">
            <BackButton link="/" />
            <Heading level="1">{project.frontmatter.title}</Heading>
            {skills.length ? <Tags items={skills} /> : null}
          </Stack>
          <Prose>
            <MdxWithoutH1>{project.body}</MdxWithoutH1>
          </Prose>
        </Stack>
      </ContentContainer>
    </Fragment>
  );
};

export const query = graphql`
  query ProjectsByPath($path: String) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        title
        path
        date(formatString: "MMMM DD YYYY")
        type
        skills
      }
    }
  }
`;

export default ProjectTemplate;
