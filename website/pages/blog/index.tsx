import Head from 'next/head';
import { Fragment } from 'react';
import { Stack } from '@nathsimpson/box';
import { Heading, Text } from '@nathsimpson/typography';

import { Header } from '../../components/Header';
import { ContentContainer } from '../../components/ContentContainer';
import { PostCard } from '../../components/PostCard';
import { getAllPosts } from '../../lib/posts';
import { PostType } from '../../interfaces/post';

type BlogPageProps = {
  allPosts: PostType[];
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

          {allPosts.map((post) => (
            <PostCard href={`blog/${post.slug}`} {...post} key={post.slug} />
          ))}
        </Stack>
      </ContentContainer>
    </Fragment>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'slug',
    'date',
    'updated',
    'href',
    'title',
    'type',
    'youtubeid',
    'description',
    'excerpt'
  ]);

  return {
    props: { allPosts }
  };
};
