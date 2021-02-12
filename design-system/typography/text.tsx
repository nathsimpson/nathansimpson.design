/** @jsx jsx */
import { jsx } from '@emotion/core';

import { colors, fontsizes, fontFamilies } from '../theme';

type TextProps = {
  as?: 'p' | 'span';
  color?: 'default' | 'emphasis';
  size?: keyof typeof fontsizes;
};

export const Text = ({
  size = 'medium',
  color = 'default',
  as = 'p',
  ...props
}: TextProps) => {
  const Tag = as;
  return (
    <Tag
      {...props}
      style={{
        color: colors[colorMap[color]],
        fontFamily: fontFamilies.body,
        fontSize: fontsizes[size]
      }}
    />
  );
};

const colorMap = {
  default: 'foreground',
  emphasis: 'foregroundEmphasis'
} as const;
