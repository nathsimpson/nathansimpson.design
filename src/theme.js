export const fontFamilies = {
  heading:
    "-apple-system, BlinkMacSystemFont, 'SF Pro Display','roboto',sans-serif",
  body:
    'Monaco,Menlo,Consolas,"Droid Sans Mono","Inconsolata","Courier New",monospace'
};

export const palette = {
  orange: '#fa6d01',
  green: '#52e409',
  purple: '#E509E3',
  neutral0: '#0c0f13',
  neutral10: '#13181d',
  neutral20: '#171d22',
  neutral30: '#1e242a',
  neutral40: '#272f37',
  neutral50: '#353f47',
  neutral60: '#48535d',
  neutral70: '#616e79',
  neutral80: '#808d99',
  neutral90: '#a0aeba',
  neutral100: '#ffffff'
};

export const colors = {
  brand: palette.orange,
  brandSecondary: palette.neutral100,
  link: palette.orange,
  linkHover: palette.white,
  background: palette.neutral10,
  backgroundEmphasis: palette.neutral30,
  border: palette.neutral50,
  foregroundEmphasis: palette.neutral100,
  foreground: palette.neutral90,
  input: {
    background: palette.neutral40,
    foreground: palette.neutral90,
    hover: {
      background: palette.neutral50,
      foreground: palette.neutral100
    },
    active: {
      background: palette.neutral30,
      foreground: palette.neutral100
    }
  }
};

export const spacing = {
  none: 0,
  xsmall: 4,
  small: 8,
  medium: 12,
  large: 16,
  xlarge: 24,
  xxlarge: 32,
  xxxlarge: 40
};

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
};

export const borderRadius = {
  sm: 3,
  md: 6,
  lg: 12
};

export const boxShadow = {
  1: {
    boxShadow: `0px 6px 12px ${palette.neutral0}`
  }
};

export const fontsizes = {
  xsmall: 12,
  small: 14,
  medium: 16,
  large: 18,
  xlarge: 24,
  xxlarge: 32,
  xxxlarge: 38,
  xxxxlarge: 52
};

const baseHeadingStyle = {
  fontFamily: fontFamilies.heading,
  lineHeight: 1.1,
  color: colors.foregroundEmphasis,
  margin: 0,
  marginTop: spacing.xlarge
};

export const headings = {
  1: {
    ...baseHeadingStyle,
    fontSize: fontsizes.xxxxlarge,
    fontWeight: 900
  },
  2: {
    ...baseHeadingStyle,
    fontSize: fontsizes.xxxlarge,
    fontWeight: 900
  },
  3: {
    ...baseHeadingStyle,
    fontSize: fontsizes.xlarge,
    fontWeight: 600
  },
  4: {
    ...baseHeadingStyle,
    fontSize: fontsizes.xlarge,
    fontWeight: 600
  }
};
