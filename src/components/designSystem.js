/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Helmet } from 'react-helmet';
import { Container, Header } from '../components';
import { MdxWithoutH1 } from './Mdx';

import { Heading } from '../../design-system/typography';
import { LinkButton } from '../../design-system/button';
import { FlexBox } from '../../design-system/box';
import { Stack } from '../../design-system/stack';
import { TextLinkGatsby } from '../../design-system/textlink';

export const DesignSystemTemplate = ({ data }) => {
  const post = data.mdx;

  return (
    <div>
      <Header />
      <Helmet>
        <title>Design System - Nathan Simpson</title>
      </Helmet>

      <Container>
        <div
          css={{
            display: 'grid',
            columnGap: 12,
            gridTemplateColumns: '240px 1fr'
          }}
        >
          <NavigationBar data={data.allMdx.edges} />

          <article>
            <FlexBox
              orientation="horizontal"
              justify="between"
              marginBottom="large"
              align="end"
            >
              <Heading>{post.frontmatter.title}</Heading>
              <LinkButton
                label="Edit on GitHub"
                weight="secondary"
                size="small"
                iconBefore="github"
                href={`https://github.com/nathsimpson/nathansimpson.design/edit/master${post.frontmatter.path}/README.md`}
              />
            </FlexBox>
            <MdxWithoutH1>{post.body}</MdxWithoutH1>
          </article>
        </div>
      </Container>
    </div>
  );
};

const NavigationBar = ({ data }) => {
  return (
    <Stack
      as="ul"
      gap="small"
      css={{
        listStyle: 'none',
        padding: 0
      }}
    >
      <li>
        <TextLinkGatsby to="/design-system">
          <a>Welcome</a>
        </TextLinkGatsby>
      </li>
      {data

        .filter(
          ({ node: p }) =>
            p.frontmatter.type === 'design-system' &&
            p.frontmatter.title !== 'Design System'
        )
        .sort(({ node: { frontmatter: a } }, { node: { frontmatter: b } }) =>
          // assumes no two pages will be named the same.
          a.title > b.title ? 1 : -1
        )
        .map(({ node }) => {
          return (
            <li key={node.id}>
              <TextLinkGatsby to={node.frontmatter.path} key={node.id}>
                {node.frontmatter.title}
              </TextLinkGatsby>
            </li>
          );
        })}
    </Stack>
  );
};
