import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { Stack } from '../../components/ui/box';
import { Heading } from '../../components/ui/typography';
import { Prose } from '../../components/ui/prose';
import { Tags } from '../../components/ui/tag';

import { ContentContainer } from '../../components/Container/ContentContainer';
import { BackButton } from '../../components/BackButton';
import { Header } from '../../components/Header';
import type { Project } from '../../lib/projects';
import { getProjectBySlug, getAllProjects } from '../../lib/projects';
import { MdxContent } from '../../components/Mdx';
import { GetStaticProps } from 'next';

type ProjectPageProps = {
  project: Project;
};

export default function ProjectPage({ project }: ProjectPageProps) {
  const router = useRouter();

  if (!router.isFallback && !project) {
    return <ErrorPage statusCode={404} />;
  }

  const { meta, source } = project;
  const skills = meta.skills ? meta.skills.split(',') : [];

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
                <title>{meta.title} - Nathan Simpson's portfolio</title>
                <meta property="og:image" content={meta.imagesrc} />
              </Head>
              <Stack gap="medium" as="article">
                <Stack gap="small">
                  <BackButton href="/" />
                  <Heading level={1}>{meta.title}</Heading>
                  {skills.length ? <Tags items={skills} /> : null}
                </Stack>
                <Prose>
                  <MdxContent source={source} />
                </Prose>
              </Stack>
            </article>
          </Fragment>
        )}
      </ContentContainer>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps<
  {
    project: Project;
  },
  { slug: string }
> = async ({ params }) => {
  const { slug } = params || {};

  if (!slug) {
    return { notFound: true };
  }

  const project = await getProjectBySlug(slug);

  return {
    props: {
      project
    }
  };
};

export async function getStaticPaths() {
  const projects = await getAllProjects();

  return {
    paths: projects.map(({ meta }) => ({
      params: {
        slug: meta.slug
      }
    })),
    fallback: false
  };
}
