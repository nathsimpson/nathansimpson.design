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
import logo from '../../images/logo.svg';
import { colors, text } from '../../theme';

export default () => (
  <footer className="aboutMe" style={{ textAlign: 'center' }}>
    <hr />
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
              color: colors.slate[80],
              textDecoration: 'none',

              '&:hover': {
                color: colors.orange
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
    <div style={{ marginBottom: '32px' }}>
      <p
        style={{
          ...text[1],
          color: colors.slate[80],
          margin: '12px auto'
        }}
      >
        &copy; Copyright 2020 Nathan Simpson. Made in Sydney Australia.
      </p>
      <img src={logo} style={{ height: 32, position: 'relative', top: 6 }} />
    </div>
  </footer>
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
