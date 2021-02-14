/** @jsx jsx */
import { jsx } from '@emotion/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  // faCodepen,
  faLinkedin,
  faGithub,
  faDribbble
  // faYoutube
} from '@fortawesome/fontawesome-free-brands';
import { Logo } from '../../../design-system/logo';
import { colors } from '../../../design-system/theme';
import { Divider } from '../../../design-system/divider';
import { Text } from '../../../design-system/typography';
import { Stack } from '../../../design-system/stack';

export default () => (
  <Stack gap="medium" marginY="xlarge" align="center" as="footer">
    <Divider />
    <ul
      style={{
        margin: 0,
        fontSize: 26,
        listStyle: 'none',
        padding: 0
      }}
    >
      {networks.map(network => (
        <li
          style={{ display: 'inline-block', margin: '0px 5px' }}
          key={network.name}
        >
          <a
            css={{
              color: colors.foreground,
              textDecoration: 'none',

              '&:hover': {
                color: colors.link
              }
            }}
            href={network.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={network.icon} />
          </a>
        </li>
      ))}
    </ul>

    <Text size="xsmall" as="span">
      &copy; Copyright 2021 Nathan Simpson. Made in Sydney Australia.
    </Text>
    <Logo size="small" />
  </Stack>
);

const networks = [
  {
    name: 'Twitter',
    icon: faTwitter,
    link: 'https://twitter.com/nathjsimpson'
  },
  {
    name: 'Instagram',
    icon: faInstagram,
    link: 'https://www.instagram.com/nathansimpson.design'
  },
  {
    name: 'LinkedIn',
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/nathan-simpson-71512a75?trk'
  },
  {
    name: 'Github',
    icon: faGithub,
    link: 'https://github.com/nathsimpson'
  },
  // {
  //   name: 'Codepen',
  //   icon: faCodepen,
  //   link: 'https://codepen.io/nathansimpson/'
  // },
  {
    name: 'Dribbble',
    icon: faDribbble,
    link: 'https://dribbble.com/nathansimpson'
  }
  // {
  //   name: 'YouTube',
  //   icon: faYoutube,
  //   link: 'https://www.youtube.com/channel/UCa__hNMzVWIQOHErctX0leg'
  // }
];
