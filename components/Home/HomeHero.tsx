import { Flex, Stack } from '../ui/box';
import { TextLink } from '../TextLink';
import { useTheme } from '../../lib/theme';
import { Heading, Text } from '../ui/typography';
import Image from 'next/image';

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
          I'm a Frontend Developer at{' '}
          <TextLink href="https://thinkmill.com.au">Thinkmill</TextLink>, based
          in Orange, Australia.
        </Text>

        <Text as="p" color="muted">
          I'm passionate about bridging the gap between design and development,
          and crafting digital products which marry form and function.
        </Text>
      </Stack>
    </Flex>
  );
};

const Avatar = () => {
  const { colors } = useTheme();
  const size = 96;
  return (
    <Image
      src="https://files.nathansimpson.design/avatar.jpeg"
      alt="Nathan is smiling while sitting in a Ford Mustang."
      width={size}
      height={size}
      css={{
        borderRadius: size,
        backgroundColor: colors.background.emphasis
      }}
    />
  );
};
