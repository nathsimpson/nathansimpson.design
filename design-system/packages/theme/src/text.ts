export const fontSizes = {
  xsmall: '0.75rem',
  small: '0.875rem',
  medium: '1rem',
  large: '1.25rem',
  xlarge: '1.5rem',
  xxlarge: '1.875rem',
  xxxlarge: '2.5rem'
} as const;

export const fontFamilies = {
  heading:
    "-apple-system, BlinkMacSystemFont, 'SF Pro Display','roboto',sans-serif",
  body:
    "-apple-system, BlinkMacSystemFont, 'SF Pro Display','roboto',sans-serif",
  mono:
    'Monaco,Menlo,Consolas,"Droid Sans Mono","Inconsolata","Courier New",monospace'
};

export const fontWeight = {
  regular: 400,
  medium: 500,
  strong: 700
} as const;

export const lineHeights = {
  xsmall: '1',
  small: '1.25',
  medium: '1.5',
  large: '1.75',
  xlarge: '2',
  xxlarge: '2.25',
  xxxlarge: '2.75'
} as const;

export const textStyles = {
  xsmall: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.xsmall,
    lineHeight: lineHeights.xsmall
  },
  small: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.small,
    lineHeight: lineHeights.small
  },
  medium: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.medium,
    lineHeight: lineHeights.medium
  },
  large: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.large,
    lineHeight: lineHeights.medium
  },
  h1: {
    fontSize: fontSizes.xxxlarge,
    fontWeight: 900,
    fontFamily: fontFamilies.heading,
    lineHeight: 1.1
  },
  h2: {
    fontSize: fontSizes.xxlarge,
    fontWeight: 900,
    fontFamily: fontFamilies.heading,
    lineHeight: 1.1
  },
  h3: {
    fontSize: fontSizes.xlarge,
    fontWeight: 900,
    fontFamily: fontFamilies.heading,
    lineHeight: 1.1
  },
  h4: {
    fontSize: fontSizes.xlarge,
    fontWeight: 600,
    fontFamily: fontFamilies.heading,
    lineHeight: 1.1
  },
  h5: {
    fontSize: fontSizes.large,
    fontWeight: 600,
    fontFamily: fontFamilies.heading,
    lineHeight: 1.1
  },
  h6: {
    fontSize: fontSizes.medium,
    fontWeight: 600,
    fontFamily: fontFamilies.heading,
    lineHeight: 1.1
  }
};
