import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { Stack } from '../../components/design-system/box';
import { Heading, Text } from '../../components/design-system/typography';
import { Prose } from '../../components/design-system/prose';
import { ContentContainer } from '../../components/Container';
import { BackButton } from '../../components/BackButton';
import { Header } from '../../components/Header';
import type { Post } from '../../lib/posts';
import { getPostBySlug, getAllPosts } from '../../lib/posts';
import { YouTubeVideo } from '../../components/Blog/YouTubeVideo';
import { MdxContent } from '../../components/Mdx';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export default function PostPage({
  post
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { meta, source } = post;
  const router = useRouter();
  if (!router.isFallback && !meta?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const postedDate = new Date(meta.date).toDateString();
  const lastUpdatedDate = meta.updated && new Date(meta.updated).toDateString();
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
                <title>{`${meta.title} - Nathan Simpson's portfolio`}</title>
                {/* <meta property="og:image" content={meta.imageSrc} /> */}
              </Head>
              <Stack gap="medium" as="article">
                <Stack gap="small">
                  <BackButton href="/blog" />
                  <Heading level={1}>{meta.title}</Heading>
                  <Text size="small" as="span">
                    Posted on {postedDate}.
                    {lastUpdatedDate && ` Updated on ${lastUpdatedDate}`}
                  </Text>
                </Stack>
                <Prose>
                  {meta.youtubeid && <YouTubeVideo videoId={meta.youtubeid} />}
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
    post: Post;
  },
  { slug: string }
> = async ({ params }) => {
  const { slug } = params ?? {};

  if (!slug) {
    return { notFound: true };
  }

  const post = await getPostBySlug(slug);

  return {
    props: { post }
  };
};

export async function getStaticPaths() {
  const posts = await getAllPosts();

  return {
    paths: posts.map(({ meta }) => ({
      params: {
        slug: meta.slug
      }
    })),
    fallback: false
  };
}
