/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Header, MdxWithoutH1 } from '../components';
import { BackButton } from '../components/backButton';
import { Heading } from '@nathsimpson/typography';
import { Stack } from '@nathsimpson/box';
import { Prose } from '@nathsimpson/prose';
import { Tags } from '@nathsimpson/tag';
import { useTheme } from '@nathsimpson/theme';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

const ProjectTemplate = ({ data }) => {
  const project = data.mdx;
  const { spacing, maxWidth } = useTheme();
  const skills = project.frontmatter.skills
    ? project.frontmatter.skills.split(',')
    : [];

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{project.frontmatter.title} - Nathan Simpson's portfolio</title>
      </Helmet>
      <Header />

      <div
        css={{
          maxWidth: maxWidth.content,
          margin: '0 auto',
          paddingLeft: spacing.xxlarge,
          paddingRight: spacing.xxlarge
        }}
      >
        <BackButton link="/" />
        <Stack gap="medium">
          <Heading level="1">{project.frontmatter.title}</Heading>
          {skills.length ? <Tags items={skills} /> : null}
          <Prose>
            <MdxWithoutH1>{project.body}</MdxWithoutH1>
          </Prose>
        </Stack>
      </div>
    </div>
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
