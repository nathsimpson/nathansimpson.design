/** @jsx jsx */
import { ReactNode } from 'react';
import { jsx, css } from '@emotion/core';
import { useTheme } from '@nathsimpson/theme';

type ProseProps = {
  children: ReactNode;
};

export const Prose = ({ children }: ProseProps) => {
  const styles = useProseStyles();
  return <div css={styles}>{children}</div>;
};

const useProseStyles = () => {
  const { spacing, fontSizes, fontFamilies, lineHeights, colors } = useTheme();

  const standardHeadingStyles = {
    fontFamily: fontFamilies.heading,
    lineHeight: 1.1,
    color: colors.text.emphasis
  };

  return css({
    p: {
      fontFamily: fontFamilies.body,
      marginTop: spacing.large,
      marginBottom: spacing.large,
      lineHeight: lineHeights.medium
    },
    h1: {
      ...standardHeadingStyles,
      fontSize: fontSizes.xxxlarge,
      fontWeight: 900,
      color: colors.text.emphasis
    },
    h2: {
      ...standardHeadingStyles,
      fontSize: fontSizes.xxlarge,
      fontWeight: 900,
      marginTop: spacing.xxxlarge,
      marginBottom: spacing.large
    },
    h3: {
      ...standardHeadingStyles,
      fontSize: fontSizes.xlarge,
      fontWeight: 900,
      marginTop: spacing.xxlarge,
      marginBottom: spacing.large
    },
    h4: {
      ...standardHeadingStyles,
      fontSize: fontSizes.xlarge,
      fontWeight: 600,
      marginTop: spacing.xlarge
    },
    h5: {
      ...standardHeadingStyles,
      fontSize: fontSizes.large,
      fontWeight: 600
    },
    h6: {
      ...standardHeadingStyles,
      fontSize: fontSizes.medium,
      fontWeight: 600
    },
    hr: {
      marginTop: spacing.large,
      marginBottom: spacing.large
    }
  });
};
