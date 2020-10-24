export const colors = {
  orange: '#fa6d01',
  white: '#ffffff',
  slate: {
    '0': '#0c0f13',
    '10': '#13181d',
    '20': '#171d22',
    '30': '#1e242a',
    '40': '#272f37',
    '50': '#353f47',
    '60': '#48535d',
    '70': '#616e79',
    '80': '#808d99',
    '90': '#a0aeba'
  },
  green: '#52e409',
  purple: '#E509E3'
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
    boxShadow: `0px 6px 12px ${colors.slate[0]}`
  }
};

export const fontsizes = {
  xsmall: 12,
  small: 14,
  medium: 16,
  large: 18,
  xlarge: 24,
  xxlarge: 32,
  xxxlarge: 48
};

export const headings = {
  1: {
    fontSize: 70,
    lineHeight: 1.2,
    color: 'white',
    margin: 0,
    marginTop: spacing.xlarge,
    fontWeight: 900
  },
  2: {
    fontSize: fontsizes.xxxlarge,
    lineHeight: 1.2,
    color: 'white',
    margin: 0,
    marginTop: spacing.xlarge,
    fontWeight: 800
  },
  3: {
    fontSize: fontsizes.xxlarge,
    lineHeight: 1.2,
    color: 'white',
    margin: 0,
    marginTop: spacing.xlarge,
    fontWeight: 600
  },
  4: {
    fontSize: fontsizes.xlarge,
    lineHeight: 1.2,
    color: 'white',
    margin: 0,
    marginTop: spacing.xlarge,
    fontWeight: 600
  }
};
