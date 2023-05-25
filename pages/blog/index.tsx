import Head from 'next/head';
import { Fragment } from 'react';
import { Stack } from '../../components/ui/box';
import { Heading, Text } from '../../components/ui/typography';

import { backToHome, Header } from '../../components/Header';
import { ContentContainer } from '../../components/Container/ContentContainer';
import { PostCard } from '../../components/Blog/PostCard';
import { getAllPosts, Post } from '../../lib/mdxContent/posts';

type BlogPageProps = {
  allPosts: Post[];
};

export default function BlogPage({ allPosts }: BlogPageProps) {
  return (
    <Fragment>
      <Head>
        <title>Blog - Nathan Simpson</title>
      </Head>
      <Header backTo={backToHome} />
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
