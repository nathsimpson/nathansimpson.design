/** @jsxImportSource @emotion/react */
import { Box, BoxMarginProps, BoxPaddingProps, BoxRadiiProps } from '../box';
import { useTheme, fontsizes, fontFamilies } from '@nathsimpson/theme';

type HeadingProps = BoxMarginProps &
  BoxPaddingProps &
  BoxRadiiProps & {
    children: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
  };

export const Heading = ({ level = 1, ...props }: HeadingProps) => {
  const { colors } = useTheme();
  const tag = tagMap[level];

  return (
    <Box
      {...props}
      as={tag}
      css={{
        fontFamily: fontFamilies.heading,
        lineHeight: 1.1,
        color: colors.text.emphasis,
        margin: 0,
        ...headings[level]
      }}
    />
  );
};

const headings = {
  1: {
    fontSize: fontsizes.xxxlarge,
    fontWeight: 900
  },
  2: {
    fontSize: fontsizes.xxlarge,
    fontWeight: 900
  },
  3: {
    fontSize: fontsizes.xlarge,
    fontWeight: 900
  },
  4: {
    fontSize: fontsizes.xlarge,
    fontWeight: 600
  },
  5: {
    fontSize: fontsizes.large,
    fontWeight: 600
  },
  6: {
    fontSize: fontsizes.medium,
    fontWeight: 600
  }
};

const tagMap = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6'
} as const;
