/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from '@emotion/core';

import { colors, spacing } from '../../design-system/theme';
import { Cluster } from '../../design-system/cluster';
import { TextLinkGatsby } from '../../design-system/textlink';

export const Logo = () => (
  <svg
    viewBox="0 0 158.6 102.8"
    css={{
      height: 50,
      width: 'auto',
      'g .outline': {
        fill: colors.brand
      },
      'g .solid': {
        fill: colors.background,
        transition: 'fill 0.5s'
      },
      '&:hover g .outline': {
        fill: colors.brandSecondary
      },
      '&:hover g .solid': {
        fill: colors.brand
      }
    }}
  >
    <g>
      <path
        className="outline"
        fill={colors.brand}
        d="M7,51.1L34.1,6h24.4l-23,38.8l0,0l-3.8,6.3L59,96.5H34.3L7,51.1z M53.1,26.8L65.5,6h0.4l39.2,69.4L92.5,96.5
      		L53.1,26.8z M121.9,58.7l4.6-7.6L99.3,6h24.8l27.1,45.1L124,96.5H99.5L121.9,58.7z M88.8,0l5.4,9l25.3,42.1l-2.4,3.9l0,0l-0.3,0.5
      		l-8.3,13.8L71,3l-1.7-3H30.7L29,2.9L1.8,48L0,51.1l1.8,3.1l27.3,45.4l1.7,2.9h3.4H59h10.5l-5.4-9L38.7,51.1l11-18.3l37.6,66.6
      		l1.7,3h3.5H124h3.4l1.7-2.9l27.3-45.4l1.8-3.1l-1.8-3.1l-27.2-45L127.5,0H88.8z"
      />
    </g>
    <g>
      <polygon
        fill={colors.background}
        className="solid"
        points="59.1,96.5 34.3,96.5 7,51.1 34.1,6 58.5,6 35.5,44.8 35.6,44.8 31.8,51.1"
      />
      <polygon
        fill={colors.background}
        className="solid"
        points="53.1,26.8 65.5,6 65.8,6 105.1,75.4 92.5,96.5"
      />
      <polygon
        fill={colors.background}
        className="solid"
        points="124,96.5 99.5,96.5 121.9,58.7 126.5,51.1 99.3,6 124.1,6 151.3,51.1"
      />
    </g>
  </svg>
);

export const BackIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
};

const navItems = [
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
];

export const Header = ({ backLink = '/' }) => (
  <header
    className="header"
    css={{
      maxWidth: '1300px',
      margin: `0 auto ${spacing.large}px`,
      padding: '20px 0px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: `1px solid ${colors.border}`
    }}
  >
    <div css={{ display: 'flex', flex: 1 }}>
      <Link
        exact
        to={backLink}
        css={{
          display: 'flex',
          alignItems: 'center',
          color: colors.link,
          textDecoration: 'none',
          '&:hover': {
            color: colors.linkHover,
            textDecoration: 'none'
          }
        }}
      >
        <BackIcon />
        Back
      </Link>
    </div>

    <Link exact to="/">
      <Logo />
    </Link>

    <div css={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
      <Cluster gap="medium" align="end">
        {navItems.map(({ url, label }) => (
          <TextLinkGatsby key={url} exact to={url}>
            {label}
          </TextLinkGatsby>
        ))}
      </Cluster>
    </div>
  </header>
);
