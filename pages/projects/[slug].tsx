import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { Stack } from '../../components/design-system/box';
import { Heading } from '../../design-system/typography';
import { Prose } from '../../design-system/prose';
import { Tags } from '../../design-system/tag';

import { ContentContainer } from '../../components/ContentContainer';
import { BackButton } from '../../components/BackButton';
import { Header } from '../../components/Header';
import type { ProjectType } from '../../interfaces';
import { getProjectBySlug, getAllProjects } from '../../lib/projects';
import markdownToHtml from '../../lib/markdownToHtml';
import { MdxContent } from '../../components/Mdx';

type Props = {
  project: ProjectType;
};

export default function Project({
  project
}: //  morePosts,
// preview
Props) {
  const router = useRouter();
  if (!router.isFallback && !project) {
    return <ErrorPage statusCode={404} />;
  }
  const skills = project.skills ? project.skills.split(',') : [];
  return (
    <Fragment>
      <Head>
        <title>Nathan Simpson</title>
        <meta
          name="description"
          content="I am a UI Designer, Frontend Developer, and aspiring entrepreneur, passionate about building ideas from concept to prototype."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <ContentContainer>
        {router.isFallback ? (
          <span>Loading…</span>
        ) : (
          <Fragment>
            <article className="mb-32">
              <Head>
                <title>{project.title} - Nathan Simpson's portfolio</title>
                <meta property="og:image" content={project.imagesrc} />
              </Head>
              <Stack gap="medium" as="article">
                <Stack gap="small">
                  <BackButton href="/" />
                  <Heading level={1}>{project.title}</Heading>
                  {skills.length ? <Tags items={skills} /> : null}
                </Stack>
                <Prose>
                  <MdxContent content={project.content} />
                </Prose>
              </Stack>
            </article>
          </Fragment>
        )}
      </ContentContainer>
    </Fragment>
  );
}

export async function getStaticProps({
  params
}: {
  params: {
    slug: string;
  };
}) {
  const post = getProjectBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'imageSrc'
  ]);

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      project: {
        ...post,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects(['slug']);

  return {
    paths: projects.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}
