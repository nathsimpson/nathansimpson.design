import Link from 'next/link';
import { useContext } from 'react';

import { Box, Flex } from './design-system/box';
import { IconButton } from './design-system/button';
import { Icon } from './design-system/icon';
import { maxWidth, useTheme } from './design-system/theme';
import { useMediaQuery } from './design-system/utils';

import { NextTextLink } from './NextTextLink';
import { ThemeSelectionContext } from './Core';

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

export const Header = ({ hasDivider = true }: { hasDivider?: boolean }) => {
  const { spacing, colors } = useTheme();
  const { setThemeName, themeName } = useContext(ThemeSelectionContext);
  const { maxBreak, minBreak } = useMediaQuery();

  return (
    <header
      className="header"
      css={{
        boxSizing: 'border-box',
        width: '100%',
        marginBottom: spacing[hasDivider ? 'xlarge' : 'none'],
        borderBottom: hasDivider ? `1px solid ${colors.border}` : 'none',
        paddingTop: spacing.xsmall,
        paddingBottom: spacing.xsmall,
        paddingLeft: spacing.medium,
        paddingRight: spacing.medium
      }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        css={{
          maxWidth: maxWidth.page,
          margin: '0 auto'
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
      </Flex>
    </header>
  );
};
