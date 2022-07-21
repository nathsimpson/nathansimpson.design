/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */

const withPreconstruct = require('@preconstruct/next');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: []
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  }
});

module.exports = withPreconstruct(
  withMDX({
    reactStrictMode: true,
    swcMinify: true,
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
  })
);
