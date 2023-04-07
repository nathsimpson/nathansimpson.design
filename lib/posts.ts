import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import markdownToHtml from './markdownToHtml';

export type PostMeta = {
  title: string;
  slug: string;
  // '2019-06-23'
  date: string;
  // '2019-06-23'
  updated?: string;
  type: 'Post' | 'Talk';
  youtubeid?: string;
  excerpt: string;
  description?: string;
  imageSrc?: string;
  href?: string;
};

export type Post = {
  source: MDXRemoteSerializeResult;
  meta: PostMeta;
};

const postsDirectory = join(process.cwd(), 'blog');

export async function getPostSlugs() {
  return await readdir(postsDirectory);
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = join(postsDirectory, `${slug.replace(/\.md$/, '')}.md`);
  const fileContents = await readFile(fullPath, { encoding: 'utf8' });
  const { data, content } = matter(fileContents);

  const source = await markdownToHtml(content || '');

  return {
    meta: {
      ...data,
      title: data.title,
      date: data.date,
      type: data.type,
      slug: slug.replace(/\.md$/, ''),
      excerpt: data.excerpt || `${content.slice(0, 280).trim()}...`
    },
    source
  };
}

export async function getAllPosts() {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));

  // sort posts by date in descending orde
  return posts.sort((post1, post2) =>
    post1.meta.date > post2.meta.date ? -1 : 1
  );
}
