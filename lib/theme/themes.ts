import { darkColors, lightColors } from './colors';

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
  body: "-apple-system, BlinkMacSystemFont, 'SF Pro Display','roboto',sans-serif",
  mono: 'Monaco,Menlo,Consolas,"Droid Sans Mono","Inconsolata","Courier New",monospace'
};

export const fontWeights = {
  regular: 400,
  medium: 500,
  strong: 700,
  heading: 900
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

export const spacing = {
  none: 0,
  xxsmall: 4,
  xsmall: 8,
  small: 12,
  medium: 16,
  large: 24,
  xlarge: 32,
  xxlarge: 64,
  xxxlarge: 128
} as const;

export const maxWidth = {
  // fill: '86rem',
  page: '62rem',
  content: '45rem'
};
export type MaxWidthType = keyof typeof maxWidth;

export const breakpoints = {
  sm: 640,
  md: 768, // tablet
  lg: 1024, // desktop
  xl: 1280
} as const;

export const radii = {
  none: 0,
  small: 3,
  medium: 6,
  large: 12,
  circle: 99
} as const;

export type SpacingType = keyof typeof spacing;
export type RadiiType = keyof typeof radii;
export type FontSizeType = keyof typeof fontSizes;
export type Theme = typeof themeDark;

export const themeDark = {
  spacing,
  maxWidth,
  breakpoints,
  radii,
  boxShadow: {
    1: {
      boxShadow: `0px 6px 12px ${darkColors.shadow}`
    }
  },
  fontSizes,
  fontFamilies,
  fontWeights,
  lineHeights,
  colors: darkColors
};

export const themeLight = {
  spacing,
  maxWidth,
  breakpoints,
  radii,
  boxShadow: {
    1: {
      boxShadow: `0px 6px 12px ${lightColors.shadow}`
    }
  },
  fontSizes,
  fontFamilies,
  fontWeights,
  lineHeights,
  colors: lightColors
};
