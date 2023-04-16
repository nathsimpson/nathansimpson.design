import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';

/** A wrapper around next-mdx-remote's serialize function that adds the remark-gfm plugin. */
export default async function markdownToHtml(markdown: string) {
  const result = await serialize(markdown, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: []
    }
  });
  return result;
}
