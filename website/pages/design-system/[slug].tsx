import { Fragment } from 'react';
import Head from 'next/head';
import { MdxContent } from '../../components/Mdx';
import { Container } from '../../components/Container';
import { Flex } from '@nathsimpson/box';
import { Heading } from '@nathsimpson/typography';
import { LinkButton } from '@nathsimpson/button';
import { Prose } from '@nathsimpson/prose';

import { Header } from '../../components/Header';
import { NavigationBar } from '../../components/design-system/NavigationBar';
import { getAllPackages, getPackageBySlug } from '../../lib/design-system';
import markdownToHtml from '../../lib/markdownToHtml';

type PackagePageProps = {
  allPackages: { title: string; section?: string; slug: string }[];
  pkg: {
    title: string;
    date: string;
    slug: string;
    content: string;
  };
};

export default function Package({
  allPackages,
  pkg: { content, title, slug }
}: PackagePageProps) {
  const navigationItems = allPackages.filter(
    ({ title }) => !['Design System', 'Design Tokens'].includes(title)
  );

  const githubUrl = `https://github.com/nathsimpson/nathansimpson.design/edit/master${slug}/README.md`;

  return (
    <Fragment>
      <Head>
        <title>{`${title} - Nathan Simpson's Design System`}</title>
      </Head>
      <Header />
      <Container>
        <div
          css={{
            display: 'grid',
            columnGap: 12,
            gridTemplateColumns: '240px 1fr'
          }}
        >
          <NavigationBar items={navigationItems} />
          <article>
            <Flex
              justifyContent="space-between"
              alignItems="flex-end"
              marginBottom="large"
              width="100%"
            >
              <Heading level={1}>{title}</Heading>
              <LinkButton
                label="Edit on GitHub"
                weight="secondary"
                size="small"
                iconBefore="github"
                href={githubUrl}
              />
            </Flex>
            <Prose>
              <MdxContent hideH1={true} content={content} />
            </Prose>
          </article>
        </div>
      </Container>
    </Fragment>
  );
}

export async function getStaticProps({ params }: Params) {
  const allPackages = getAllPackages(['title', 'section', 'slug']);
  const pkg = getPackageBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content'
  ]);

  const content = await markdownToHtml(pkg.content || '');

  return {
    props: {
      allPackages,
      pkg: {
        ...pkg,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const packages = getAllPackages(['slug']);
  return {
    paths: packages.map((pkg) => {
      return {
        params: {
          slug: pkg.slug
        }
      };
    }),
    fallback: false
  };
}
