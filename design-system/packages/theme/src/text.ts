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
  xsmall: '1rem',
  small: '1.25rem',
  medium: '1.5rem',
  large: '1.75rem',
  xlarge: '2rem',
  xxlarge: '1: 2.25rem',
  xxxlarge: '2.75rem'
} as const;

export const textStyles = {
  small: { fontSize: fontSizes.small },
  medium: { fontSize: fontSizes.medium },
  large: { fontSize: fontSizes.large },
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
