/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from '@emotion/core';

import { Logo } from '../../design-system/logo';
import { colors } from '../../design-system/theme';
import { Cluster } from '../../design-system/cluster';
import { TextLinkGatsby } from '../../design-system/textlink';

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
      boxSizing: 'border-box',
      maxWidth: '1300px',
      margin: '0 auto 24px',
      borderBottom: `1px solid ${colors.border}`,
      padding: '8px 24px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    <Link exact to="/" alt="Home">
      <Logo size="small" isInteractive />
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
