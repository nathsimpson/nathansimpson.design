import { ReactNode } from 'react';

export type PropsWithOnlyChildren = {
  children: ReactNode;
};

export type ProjectType = {
  title: string;
  imagesrc: string;
  content: string;
  /** '2018-02-21' */
  date: string;
  desc?: string;
  tag: 'Design' | 'Development';
  skills?: string;
};

export type ProjectWithSlug = ProjectType & { slug: string };
