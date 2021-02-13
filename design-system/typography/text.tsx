/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Box } from '../box';

import { colors, fontsizes, fontFamilies } from '../theme';

type TextProps = {
  as?: 'p' | 'span';
  children: string;
  color?: 'default' | 'emphasis';
  size?: keyof typeof fontsizes;
};

export const Text = ({
  size = 'medium',
  color = 'default',
  as = 'p',
  ...props
}: TextProps) => {
  return (
    <Box
      as={as}
      {...props}
      css={{
        color: colors[colorMap[color]],
        fontFamily: fontFamilies.body,
        fontSize: fontsizes[size],
        maxWidth: 800
      }}
    />
  );
};

const colorMap = {
  default: 'foreground',
  emphasis: 'foregroundEmphasis'
} as const;
