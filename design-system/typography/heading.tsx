/** @jsx jsx */
import { jsx } from '@emotion/core';

import { colors, fontsizes, fontFamilies } from '../theme';

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Heading = ({ level = 1, ...props }: HeadingProps) => {
  const Tag = `h${level}`;

  return (
    <Tag
      {...props}
      css={{
        fontFamily: fontFamilies.heading,
        lineHeight: 1.1,
        color: colors.foregroundEmphasis,
        margin: 0,
        ...headings[level]
      }}
    />
  );
};

const headings = {
  1: {
    fontSize: fontsizes.xxxxlarge,
    fontWeight: 900
  },
  2: {
    fontSize: fontsizes.xxxlarge,
    fontWeight: 900
  },
  3: {
    fontSize: fontsizes.xlarge,
    fontWeight: 600
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
