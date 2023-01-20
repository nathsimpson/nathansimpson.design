import { Stack } from '@nathsimpson/box';
import { Text } from '@nathsimpson/typography';
import { NextTextLink } from '../NextTextLink';

type Package = { title: string; slug: string; section: string };

export const NavigationBar = ({ items }: { items: Package[] }) => {
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
          { title: 'Welcome', slug: '/design-system', section: 'guides' },
          {
            title: 'Design Tokens',
            slug: '/design-system/theme',
            section: 'guides'
          }
        ]}
      />
      <NavBlock items={layout} label="Layout" />
      <NavBlock items={components} label="Components" />
      <NavBlock items={hooks} label="Hooks" />
    </Stack>
  );
};

const NavBlock = ({ label, items }: { label: string; items: Package[] }) => {
  return (
    <Stack as="ul" gap="none" padding="none" margin="none">
      <Text as="span" size="xsmall">
        {label}
      </Text>
      {items.map(({ slug, title }) => (
        <NavItem slug={slug} key={slug} title={title} />
      ))}
    </Stack>
  );
};

const NavItem = ({ title, slug }: Omit<Package, 'section'>) => {
  return (
    <li css={{ listStyle: 'none' }}>
      <NextTextLink href={slug}>{title}</NextTextLink>
    </li>
  );
};
