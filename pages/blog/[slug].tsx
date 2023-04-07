import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { Stack } from '../design-system/box';
import { Heading, Text } from '../design-system/typography';
import { Prose } from '../design-system/prose';

import { ContentContainer } from '../../components/ContentContainer';
import { BackButton } from '../../components/BackButton';
import { Header } from '../../components/Header';
import type { PostType } from '../../interfaces';
import { getPostBySlug, getAllPosts } from '../../lib/posts';
import markdownToHtml from '../../lib/markdownToHtml';
import { YouTubeVideo } from '../../YouTubeVideo';
import { MdxContent } from '../../components/Mdx';

type Props = {
  post: PostType;
};

export default function Post({ post }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const postedDate = new Date(post.date).toDateString();
  const lastUpdatedDate = post.updated && new Date(post.updated).toDateString();
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
                <title>{`${post.title} - Nathan Simpson's portfolio`}</title>
                {/* <meta property="og:image" content={post.imageSrc} /> */}
              </Head>
              <Stack gap="medium" as="article">
                <Stack gap="small">
                  <BackButton href="/blog" />
                  <Heading level={1}>{post.title}</Heading>
                  <Text size="small" as="span">
                    Posted on {postedDate}.
                    {lastUpdatedDate && ` Updated on ${lastUpdatedDate}`}
                  </Text>
                </Stack>
                <Prose>
                  {post.youtubeid && <YouTubeVideo videoId={post.youtubeid} />}
                  <MdxContent content={post.content} />
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
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'updated',
    'slug',
    'author',
    'content',
    'ogImage',
    'imageSrc',
    'youtubeid'
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
