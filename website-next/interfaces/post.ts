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
