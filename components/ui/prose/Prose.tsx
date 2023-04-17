import { ReactNode } from 'react';
import { css } from '@emotion/react';
import { useTheme } from '../../../lib/theme';
import { useLinkStyles } from '../styles/useLinkStyles';

type ProseProps = {
  children: ReactNode;
};

export const Prose = ({ children }: ProseProps) => {
  const styles = useProseStyles();
  return <div css={styles}>{children}</div>;
};

const useProseStyles = () => {
  const { spacing, fontSizes, fontFamilies, lineHeights, colors } = useTheme();
  const linkStyles = useLinkStyles();

  const standardHeadingStyles = {
    fontFamily: fontFamilies.heading,
    lineHeight: 1.1,
    color: colors.text.default
  };

  return css({
    p: {
      fontFamily: fontFamilies.body,
      lineHeight: lineHeights.medium,
      marginBottom: spacing.medium
    },

    [`* + p`]: {
      marginTop: spacing.medium
    },

    a: {
      ...linkStyles
    },

    h1: {
      ...standardHeadingStyles,
      fontSize: fontSizes.xxxlarge,
      fontWeight: 900,
      color: colors.text.default
    },
    h2: {
      ...standardHeadingStyles,
      fontSize: fontSizes.xxlarge,
      fontWeight: 900,
      marginTop: spacing.xxlarge,
      marginBottom: spacing.medium
    },
    h3: {
      ...standardHeadingStyles,
      fontSize: fontSizes.xlarge,
      fontWeight: 900,
      marginTop: spacing.xlarge,
      marginBottom: spacing.medium
    },
    h4: {
      ...standardHeadingStyles,
      fontSize: fontSizes.xlarge,
      fontWeight: 600,
      marginTop: spacing.large
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
