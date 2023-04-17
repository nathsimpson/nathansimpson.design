import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import markdownToHtml from './markdownToHtml';

export type ProjectMeta = {
  title: string;
  imagesrc: string;
  /** '2018-02-21' */
  date: string;
  desc?: string;
  tag: 'Design' | 'Development';
  skills?: string;
  slug: string;
};

export type Project = {
  source: MDXRemoteSerializeResult;
  meta: ProjectMeta;
};

const projectsDirectory = join(process.cwd(), 'projects');

export async function getProjectSlugs() {
  return await readdir(projectsDirectory);
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const fullPath = join(projectsDirectory, `${slug}.mdx`);
  const fileContents = await readFile(fullPath, { encoding: 'utf8' });
  const { data, content } = matter(fileContents);

  const source = await markdownToHtml(content || '');

  return {
    meta: {
      ...data,
      title: data.title,
      date: data.date,
      imagesrc: data.imagesrc,
      slug: slug,
      tag: data.tag
    },
    source
  };
}

export async function getAllProjects() {
  const slugs = await getProjectSlugs();
  const posts = await Promise.all(
    slugs.map((slug) => getProjectBySlug(slug.replace('.mdx', '')))
  );

  // sort posts by date in descending order
  return posts.sort((post1, post2) =>
    post1.meta.date > post2.meta.date ? -1 : 1
  );
}
