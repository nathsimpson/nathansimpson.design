import Link from 'next/link';
import { useContext } from 'react';

import { Box, Flex } from '@nathsimpson/box';
import { IconButton } from '@nathsimpson/button';
import { Icon } from '@nathsimpson/icon';
import { useTheme } from '@nathsimpson/theme';
import { useMediaQuery } from '@nathsimpson/utils';

import { NextTextLink } from './NextTextLink';
import { ThemeSelectionContext } from './core';

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
  },
  {
    url: '/design-system',
    label: 'Design System'
  }
];

export const Header = ({ hasDivider = true }: { hasDivider?: boolean }) => {
  const { spacing, colors } = useTheme();
  const { setThemeName, themeName } = useContext(ThemeSelectionContext);
  const { maxBreak, minBreak } = useMediaQuery();

  return (
    <header
      className="header"
      css={{
        boxSizing: 'border-box',
        maxWidth: '1300px',
        margin: '0 auto',
        marginBottom: spacing[hasDivider ? 'xlarge' : 'none'],
        borderBottom: hasDivider ? `1px solid ${colors.border}` : 'none',
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

      <Flex gap="medium" alignItems="center">
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
          href="/"
          css={{
            color: colors.brand,
            textDecoration: 'none',
            '&:hover': {
              color: colors.text.linkHover
            }
          }}
        >
          <Icon icon="ns" size={50} />
        </Link>
      </Flex>

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
            boxShadow: `0px 6px 18px ${colors.shadow}`
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
              color: colors.action,
              cursor: 'pointer'
            }}
          >
            <Icon icon="cross" size={32} />
          </label>
        </div>

        <Flex
          flexDirection={['column', 'row']}
          alignItems="center"
          gap="medium"
        >
          {navItems.map(({ url, label }) => (
            <NextTextLink key={url} href={url}>
              {label}
            </NextTextLink>
          ))}
          <IconButton
            label="Toggle theme"
            onClick={() => {
              setThemeName(themeName === 'light' ? 'dark' : 'light');
            }}
            icon={themeName === 'light' ? 'moon' : 'sun'}
            size="small"
            weight="secondary"
          />
        </Flex>
      </nav>
    </header>
  );
};
