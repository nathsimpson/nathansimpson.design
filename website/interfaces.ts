import { ReactNode } from 'react';

export type PropsWithOnlyChildren = {
  children: ReactNode;
};

export type PostType = {
  title: string;
  slug: string;
  // '2019-06-23'
  date: string;
  // '2019-06-23'
  updated?: string;
  type: 'post' | 'talk';
  youtubeid?: string;
  content: string;
};

export type ProjectType = {
  title: string;
  imageSrc: string;
  content: string;
  /** '2018-02-21' */
  date: string;
  desc?: string;
  tag: 'Design' | 'Development';
  skills?: string;
};
