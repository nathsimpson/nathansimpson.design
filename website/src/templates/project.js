/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Header, MdxWithoutH1 } from '../components';
import { BackButton } from '../components/backButton';
import { Heading } from '@design-system/typography';
import { Stack } from '@design-system/stack';
import { Tags } from '@design-system/tag';
import { useTheme } from '@design-system/theme';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

export default ({ data }) => {
  const project = data.mdx;
  const { spacing } = useTheme();
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
          maxWidth: 800,
          margin: '0 auto',
          paddingLeft: spacing.xxlarge,
          paddingRight: spacing.xxlarge
        }}
      >
        <BackButton link="/" />
        <Stack gap="medium">
          <Heading level="1">{project.frontmatter.title}</Heading>

          {skills.length ? <Tags items={skills} /> : null}

          <MdxWithoutH1>{project.body}</MdxWithoutH1>
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
