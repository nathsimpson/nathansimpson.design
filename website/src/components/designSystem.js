/** @jsxImportSource @emotion/react */
import { Helmet } from 'react-helmet';
import { Container, Header } from '.';
import { MdxWithoutH1 } from './Mdx';

import { Heading, Text } from '@design-system/typography';
import { LinkButton } from '@design-system/button';
import { Flex } from '@design-system/box';
import { Stack } from '@design-system/stack';
import { TextLinkGatsby } from '@design-system/textlink';

export const DesignSystemTemplate = ({ data }) => {
  const {
    body,
    frontmatter: { title, path }
  } = data.mdx;
  const navigationItems = data.allMdx.edges
    .map(({ node: { frontmatter: fm } }) => ({
      to: fm.path,
      label: fm.title,
      section: fm.section
    }))
    .filter(({ label }) => !['Design System', 'Design Tokens'].includes(label));
  const githubUrl = `https://github.com/nathsimpson/nathansimpson.design/edit/master${path}/README.md`;

  return (
    <div>
      <Header />
      <Helmet>
        <title>{`${title} - Design System - Nathan Simpson`}</title>
      </Helmet>

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
              orientation="horizontal"
              justify="between"
              marginBottom="large"
              align="end"
            >
              <Heading>{title}</Heading>
              <LinkButton
                label="Edit on GitHub"
                weight="secondary"
                size="small"
                iconBefore="github"
                href={githubUrl}
              />
            </Flex>
            <MdxWithoutH1>{body}</MdxWithoutH1>
          </article>
        </div>
      </Container>
    </div>
  );
};

const NavigationBar = ({ items }) => {
  const layout = items.filter(({ section }) => section === 'layout');
  const hooks = items.filter(({ section }) => section === 'hooks');
  const components = items.filter(
    ({ section }) => !['layout', 'hooks'].includes(section)
  );

  return (
    <Stack as="nav" gap="large">
      <NavBlock
        label="Guides"
        items={[
          { label: 'Welcome', to: '/design-system' },
          { label: 'Design Tokens', to: '/design-system/tokens' }
        ]}
      />
      <NavBlock items={layout} label="Layout" />
      <NavBlock items={components} label="Components" />
      <NavBlock items={hooks} label="Hooks" />
    </Stack>
  );
};

const NavBlock = ({ label, items }) => {
  return (
    <Stack as="ul" gap="none" padding="none" margin="none">
      <Text as="span" size="xsmall">
        {label}
      </Text>
      {items.map(({ to, label }) => (
        <NavItem to={to} key={to} label={label} />
      ))}
    </Stack>
  );
};

const NavItem = ({ label, to }) => {
  return (
    <li css={{ listStyle: 'none' }}>
      <TextLinkGatsby to={to}>{label}</TextLinkGatsby>
    </li>
  );
};
