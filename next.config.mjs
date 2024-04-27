/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */

import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react'
  }
});

export default withMDX({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'files.nathansimpson.design'
      }
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
});
