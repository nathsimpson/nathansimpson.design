import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { Stack } from '@nathsimpson/box';
import { Heading } from '@nathsimpson/typography';
import { Prose } from '@nathsimpson/prose';

import { ContentContainer } from '../../components/ContentContainer';
import { BackButton } from '../../components/BackButton';
import { Header } from '../../components/Header';
import type { PostType } from '../../interfaces/post';
import { getPostBySlug, getAllPosts } from '../../lib/posts';
import markdownToHtml from '../../lib/markdownToHtml';

type Props = {
  // morePosts: PostType[];
  // preview?: boolean;
  post: PostType;
};

export default function Post({
  // morePosts,
  // preview,
  post
}: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const skills = post.skills ? post.skills.split(',') : [];
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
                <title>{post.title} - Nathan Simpson's portfolio</title>
                <meta property="og:image" content={post.imageSrc} />
              </Head>
              <Stack gap="medium" as="article">
                <Stack gap="small">
                  <BackButton href="/blog" />
                  <Heading level={1}>{post.title}</Heading>
                  {skills.length ? <Tags items={skills} /> : null}
                </Stack>
                <Prose>
                  <div
                    // className={markdownStyles['markdown']}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </Prose>
              </Stack>
            </article>
          </Fragment>
        )}
      </ContentContainer>
    </Fragment>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'imageSrc'
  ]);

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}
