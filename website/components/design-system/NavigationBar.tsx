import { Stack } from '@nathsimpson/box';
import { Text } from '@nathsimpson/typography';
import { NextTextLink } from '../NextTextLink';

export const NavigationBar = ({ items }) => {
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
          { title: 'Welcome', slug: '/design-system' },
          { title: 'Design Tokens', slug: '/design-system/tokens' }
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
      {items.map(({ slug, title }) => (
        <NavItem slug={slug} key={slug} label={title} />
      ))}
    </Stack>
  );
};

const NavItem = ({ label, slug }) => {
  return (
    <li css={{ listStyle: 'none' }}>
      <NextTextLink href={slug}>{label}</NextTextLink>
    </li>
  );
};
