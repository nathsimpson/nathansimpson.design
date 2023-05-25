import Link from 'next/link';
import { useContext } from 'react';
import { Box, Flex } from './ui/box';
import { IconButton } from './ui/button';
import { Icon } from './ui/icon';
import { Text } from './ui/typography';
import { maxWidth, useTheme } from '../lib/theme';
import { ThemeSelectionContext } from './Core';
import { BackButton } from './BackButton';
import { useMediaQuery } from 'lib/useMediaQuery';

export type BackToPageConfig = {
  href: string;
  label: string;
};

export const backToHome: BackToPageConfig = {
  href: '/',
  label: 'Home'
};

export const Header = ({ backTo }: { backTo?: BackToPageConfig }) => {
  return (
    <HeaderContainer>
      <Flex justifyContent="space-between" alignItems="center">
        <Box width="5rem">
          {backTo && <BackButton href={backTo.href} label={backTo.label} />}
        </Box>

        <Flex gap="medium" alignItems="center">
          <HeaderBrand />
        </Flex>

        <Flex width="5rem" justifyContent="flex-end">
          <HeaderThemeToggle />
        </Flex>
      </Flex>
    </HeaderContainer>
  );
};

const HeaderBrand = () => {
  const { mq } = useMediaQuery();
  const { colors, fontWeights } = useTheme();

  return (
    <Flex
      as={Link}
      href="/"
      gap="small"
      alignItems="center"
      css={{
        color: colors.brand,
        textDecoration: 'none',
        fontWeight: fontWeights.heading,
        '&:hover': {
          color: colors.text.default
        }
      }}
    >
      <Icon icon="ns" size={50} />

      <Text
        as="span"
        size="xlarge"
        css={mq({
          display: ['none', 'block']
        })}
      >
        Nathan Simpson
      </Text>
    </Flex>
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
