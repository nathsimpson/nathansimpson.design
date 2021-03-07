/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from '@emotion/core';

import {Logo} from '../../design-system/logo'
import { colors, spacing } from '../../design-system/theme';
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
  <div css={{
    backgroundColor: colors.backgroundEmphasis,
    margin: '0 auto'
  }}>
  <header
    className="header"
    css={{
      maxWidth: '1300px',
      margin: '0 auto',
      padding: '8px 12px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    <Link exact to="/">
      <Logo size="small"/>
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
  </div>
);
