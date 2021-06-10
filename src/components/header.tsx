/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from '@emotion/core';

import { Box } from '../../design-system/box';
import { IconButton } from '../../design-system/button';
import { Icon } from '../../design-system/icon';
import { Stack } from '../../design-system/stack';
import { useTheme, useThemeContext } from '../../design-system/theme';
import { Cluster } from '../../design-system/cluster';
import { TextLinkGatsby } from '../../design-system/textlink';
import { useMediaQuery } from '../../design-system/utils';

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
  const { onThemeChange, themeName } = useThemeContext();
  const { maxBreak, minBreak } = useMediaQuery();

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
      <input
        type="checkbox"
        id="nav-toggle"
        css={{
          display: 'none',
          '&:checked ~ nav': {
            transform: 'translate(0%)'
          }
        }}
      />

      <Cluster gap="medium" align="center">
        <Box
          as="label"
          htmlFor="nav-toggle"
          aria-label="Open menu"
          css={{
            cursor: 'pointer',
            '&:hover': {
              color: colors.text.linkHover
            },
            [minBreak('sm')]: {
              display: 'none'
            }
          }}
        >
          <Icon icon="menu" size={32} />
        </Box>

        <Link
          to="/"
          css={{
            color: colors.global.brand,
            textDecoration: 'none',
            '&:hover': {
              color: colors.text.linkHover
            }
          }}
        >
          <Icon icon="ns" size={50} />
        </Link>
      </Cluster>

      <nav
        css={{
          [maxBreak('sm')]: {
            transform: 'translate(-100%)',
            transition: 'transform 300ms ease-out',
            width: 240,
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            fontWeight: 500,
            backgroundColor: colors.background.emphasis,
            padding: 18,
            listStyle: 'none',
            boxShadow: `0px 6px 18px ${colors.global.shadow}`
          }
        }}
      >
        <div
          css={{
            float: 'right',
            [minBreak('sm')]: {
              display: 'none'
            }
          }}
        >
          <label
            aria-label="Close menu"
            htmlFor="nav-toggle"
            css={{
              color: colors.text.link,
              cursor: 'pointer',
              '&:hover': {
                color: colors.text.linkHover
              }
            }}
          >
            <Icon icon="cross" size={32} />
          </label>
        </div>

        <Stack
          // TODO: JS helper for current breakpoint?
          // orientation={isMobile ? "vertical" : "horizontal"}
          orientation="horizontal"
          gap="medium"
          css={{
            alignItems: 'center',
            [maxBreak('sm')]: {
              gridAutoFlow: 'row'
            }
          }}
        >
          {navItems.map(({ url, label }) => (
            <TextLinkGatsby key={url} to={url}>
              {label}
            </TextLinkGatsby>
          ))}
          <IconButton
            label="Toggle theme"
            onClick={() => {
              onThemeChange(themeName === 'light' ? 'dark' : 'light');
            }}
            icon={themeName === 'light' ? 'moon' : 'sun'}
            size="small"
            weight="secondary"
          />
        </Stack>
      </nav>
    </header>
  );
};
