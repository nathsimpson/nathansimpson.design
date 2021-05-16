/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Box } from '../box';
import { useTheme, FontSizeType } from '../theme';

type TextProps = {
  as?: 'p' | 'span';
  children: string;
  color?: 'default' | 'emphasis';
  size?: FontSizeType;
};

export const Text = ({
  size = 'medium',
  color = 'default',
  as = 'p',
  ...props
}: TextProps) => {
  const { colors, fontsizes, fontFamilies } = useTheme();
  return (
    <Box
      as={as}
      {...props}
      css={{
        color: colors.text[color],
        fontFamily: fontFamilies.body,
        fontSize: fontsizes[size],
        maxWidth: 800
      }}
    />
  );
};
