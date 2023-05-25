import { Icon } from './ui/icon';
import { useTheme } from '../lib/theme';
import { Divider } from './Divider';
import { Text } from './ui/typography';
import { TextLink } from './TextLink';
import { Stack } from './ui/box';

export const footer_navItems = [
  {
    url: '/',
    label: 'Home'
  },
  {
    url: '/about',
    label: 'About'
  },
  {
    url: '/blog',
    label: 'Blog'
  }
] as const;

export const footer_socialNetworks = [
  {
    name: 'Twitter',
    icon: 'twitter',
    link: 'https://twitter.com/nathjsimpson'
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    link: 'https://www.instagram.com/nathansimpson.design'
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/nathsimpson'
  },
  {
    name: 'Github',
    icon: 'github',
    link: 'https://github.com/nathsimpson'
  },
  // {
  //   name: 'Codepen',
  //   icon: faCodepen,
  //   link: 'https://codepen.io/nathansimpson/'
  // },
  {
    name: 'Dribbble',
    icon: 'dribbble',
    link: 'https://dribbble.com/nathansimpson'
  },
  {
    name: 'YouTube',
    icon: 'youtube',
    link: 'https://www.youtube.com/channel/UCa__hNMzVWIQOHErctX0leg'
  },
  {
    name: 'Polywork',
    icon: 'polywork',
    link: 'https://www.polywork.com/nathsimpson'
  }
] as const;

export const Footer = () => {
  const { colors } = useTheme();
  return (
    <Stack gap="medium" marginY="xlarge" alignItems="center" as="footer">
      <Divider />

      <ul
        style={{
          margin: 0,
          fontSize: 26,
          listStyle: 'none',
          padding: 0
        }}
      >
        {footer_navItems.map((item) => (
          <li
            style={{ display: 'inline-block', margin: '0px 5px' }}
            key={item.label}
          >
            <TextLink href={item.url} size="small">
              {item.label}
            </TextLink>
          </li>
        ))}
      </ul>

      <Text size="xsmall" as="span" textAlign="center" color="muted">
        &copy; Copyright 2021 Nathan Simpson. Made in Sydney Australia.
      </Text>

      <ul
        style={{
          margin: 0,
          fontSize: 26,
          listStyle: 'none',
          padding: 0
        }}
      >
        {footer_socialNetworks.map((network) => (
          <li
            style={{ display: 'inline-block', margin: '0px 5px' }}
            key={network.name}
          >
            <a
              css={{
                color: colors.text.muted,
                textDecoration: 'none',

                '&:hover': {
                  color: colors.action
                }
              }}
              href={network.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={network.icon} size={24} />
            </a>
          </li>
        ))}
      </ul>
    </Stack>
  );
};
