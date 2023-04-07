import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';

export default async function markdownToHtml(markdown: string) {
  const result = await serialize(markdown, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: []
    }
  });
  return result;
}
