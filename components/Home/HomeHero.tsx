import { Box, Stack } from '../ui/box';
import { TextLink } from '../TextLink';
import { useTheme } from '../ui/theme';
import { Heading, Text } from '../ui/typography';

export const HomeHero = () => {
  const { maxWidth } = useTheme();

  return (
    <Box width="100%" paddingX="medium">
      <div
        css={{
          maxWidth: maxWidth.page,
          padding: '128px 0px',
          margin: '0 auto',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'left'
        }}
      >
        <Stack gap="medium" css={{ maxWidth: maxWidth.content }}>
          <Avatar />
          <Heading level={1}>G'day, I'm Nath 👋</Heading>
          <Text as="p" size="large">
            I'm a UI Designer &amp; Developer at{' '}
            <TextLink href="https://thinkmill.com.au">Thinkmill</TextLink> in
            Sydney, Australia. I'm passionate about Design Systems, and building
            products from concept to delivery.
          </Text>
        </Stack>
      </div>
    </Box>
  );
};

const Avatar = () => {
  const { colors } = useTheme();
  return (
    <img
      src="https://files.nathansimpson.design/avatar.jpeg"
      alt="Nathan is smiling while sitting in a Ford Mustang."
      css={{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: colors.text.default
      }}
    />
  );
};
