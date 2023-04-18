import Link from 'next/link';
import { ReactNode, useContext } from 'react';

import { Box, Flex } from './ui/box';
import { IconButton } from './ui/button';
import { Icon } from './ui/icon';
import { maxWidth, useTheme } from '../lib/theme';
import { useMediaQuery } from '../lib/useMediaQuery';

import { TextLink } from './TextLink';
import { ThemeSelectionContext } from './Core';

const menuToggleId = 'nav-toggle';
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

export const Header = () => {
  const { colors } = useTheme();

  return (
    <HeaderContainer>
      <Flex justifyContent="space-between" alignItems="center">
        <input
          type="checkbox"
          id={menuToggleId}
          css={{
            display: 'none',
            '&:checked ~ nav': {
              transform: 'translate(0%)'
            }
          }}
        />

        <Flex gap="medium" alignItems="center">
          <MenuToggle />
          <Link
            href="/"
            css={{
              color: colors.brand,
              textDecoration: 'none',
              '&:hover': {
                color: colors.text.default
              }
            }}
          >
            <Icon icon="ns" size={50} />
          </Link>
        </Flex>

        <HeaderNav>
          {navItems.map(({ url, label }) => (
            <TextLink key={url} href={url}>
              {label}
            </TextLink>
          ))}
          <HeaderThemeToggle />
        </HeaderNav>
      </Flex>
    </HeaderContainer>
  );
};

const HeaderContainer = ({ children }: { children: React.ReactNode }) => {
  const { spacing } = useTheme();
  return (
    <Flex as="header" justifyContent="center">
      <Box
        paddingX="medium"
        paddingY="xsmall"
        width="100%"
        css={{
          maxWidth: maxWidth.page,
          marginBottom: spacing.xlarge
        }}
      >
        {children}
      </Box>
    </Flex>
  );
};

const HeaderThemeToggle = () => {
  const { setThemeName, themeName } = useContext(ThemeSelectionContext);

  return (
    <IconButton
      label="Toggle theme"
      onClick={() => {
        setThemeName(themeName === 'light' ? 'dark' : 'light');
      }}
      icon={themeName === 'light' ? 'moon' : 'sun'}
      size="small"
      weight="secondary"
    />
  );
};

const MenuToggle = () => {
  const { colors } = useTheme();
  const { minBreak } = useMediaQuery();
  return (
    <Box
      as="label"
      htmlFor={menuToggleId}
      aria-label="Open menu"
      css={{
        cursor: 'pointer',
        '&:hover': {
          color: colors.text.default
        },
        [minBreak('sm')]: {
          display: 'none'
        }
      }}
    >
      <Icon icon="menu" size={32} />
    </Box>
  );
};

export const HeaderNav = ({ children }: { children: ReactNode }) => {
  const { colors } = useTheme();
  const { maxBreak, minBreak } = useMediaQuery();
  return (
    <Flex
      as="nav"
      flexDirection="column"
      gap={['large', 'none']}
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
      <Flex
        justifyContent="flex-end"
        css={{
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
      </Flex>

      <Flex
        flexDirection={['column', 'row']}
        alignItems={['flex-start', 'center']}
        gap="medium"
      >
        {children}
      </Flex>
    </Flex>
  );
};
