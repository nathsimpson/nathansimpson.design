import Head from 'next/head';
import { Fragment } from 'react';
import { Stack } from '../../components/design-system/box';
import { Heading, Text } from '../../components/design-system/typography';

import { Header } from '../../components/Header';
import { ContentContainer } from '../../components/ContentContainer';
import { PostCard } from '../../components/PostCard';
import { getAllPosts, Post } from '../../lib/posts';

type BlogPageProps = {
  allPosts: Post[];
};

export default function BlogPage({ allPosts }: BlogPageProps) {
  return (
    <Fragment>
      <Head>
        <title>Blog - Nathan Simpson</title>
      </Head>
      <Header />
      <ContentContainer>
        <Stack gap="large" marginBottom="xxxlarge">
          <Stack gap="small">
            <Heading level={1}>Blog</Heading>
            <Text>A collection of thoughts and experiences.</Text>
          </Stack>

          {allPosts.map(({ meta: post }) => (
            <PostCard href={`blog/${post.slug}`} {...post} key={post.slug} />
          ))}
        </Stack>
      </ContentContainer>
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();

  return {
    props: { allPosts }
  };
};
