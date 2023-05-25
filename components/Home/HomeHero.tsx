import Image from 'next/image';
import { Flex, Stack } from '../ui/box';
import { TextLink } from '../TextLink';
import { useTheme } from '../../lib/theme';
import { Heading, Text } from '../ui/typography';

export const HomeHero = () => {
  const { maxWidth } = useTheme();

  return (
    <Flex
      alignItems="flex-start"
      justifyContent="center"
      flexDirection="column"
    >
      <Stack
        gap="medium"
        paddingY="xxxlarge"
        width="100%"
        css={{
          maxWidth: maxWidth.content
        }}
      >
        <Avatar />
        <Heading level={1}>G'day, I'm Nath 👋</Heading>
        <Text as="p" size="large">
          I'm a UI Designer &amp; Developer at{' '}
          <TextLink href="https://thinkmill.com.au">Thinkmill</TextLink> in
          Sydney, Australia. I'm passionate about Design Systems, and building
          products from concept to delivery.
        </Text>
      </Stack>
    </Flex>
  );
};

const Avatar = () => {
  const { colors } = useTheme();
  const size = 96; // 6 * 16
  return (
    <Image
      src="/avatar.jpg"
      alt="Nathan is smiling while sitting in a Ford Mustang."
      width={size}
      height={size}
      css={{
        borderRadius: size,
        backgroundColor: colors.text.default
      }}
    />
  );
};
