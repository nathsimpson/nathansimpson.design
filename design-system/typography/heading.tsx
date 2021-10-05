/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Box, BoxMarginProps, BoxPaddingProps, BoxRadiiProps } from '../box';
import { useTheme } from '@nathsimpson/theme';

type HeadingProps = BoxMarginProps &
  BoxPaddingProps &
  BoxRadiiProps & {
    children: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
  };

export const Heading = ({ level = 1, ...props }: HeadingProps) => {
  const { colors, textStyles } = useTheme();
  const tag = tagMap[level];

  return (
    <Box
      {...props}
      as={tag}
      css={{
        color: colors.text.emphasis,
        margin: 0,
        ...textStyles[tag]
      }}
    />
  );
};

const tagMap = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6'
} as const;
