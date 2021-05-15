/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from '@emotion/core';

import { Logo } from '../../design-system/logo';
import { useTheme } from '../../design-system/theme';
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

export const Header = ({ hasDivider = true }: { hasDivider: boolean }) => {
  const { spacing, colors } = useTheme();
  return (
    <header
      className="header"
      css={{
        boxSizing: 'border-box',
        maxWidth: '1300px',
        margin: '0 auto',
        marginBottom: spacing[hasDivider ? 'xlarge' : 'none'],
        borderBottom: hasDivider ? `1px solid ${colors.global.border}` : 'none',
        padding: '8px 24px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Link to="/">
        <Logo size="small" isInteractive />
      </Link>

      <div css={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
        <Cluster gap="medium" align="end">
          {navItems.map(({ url, label }) => (
            <TextLinkGatsby key={url} to={url}>
              {label}
            </TextLinkGatsby>
          ))}
        </Cluster>
      </div>
    </header>
  );
};
