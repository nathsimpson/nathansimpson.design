import { darkColors, lightColors } from './colors';
import { fontFamilies, fontSizes, fontWeights, lineHeights } from './text';

export const spacing = {
  none: 0,
  xsmall: 4,
  small: 8,
  medium: 12,
  large: 16,
  xlarge: 24,
  xxlarge: 32,
  xxxlarge: 40
} as const;

export const maxWidth = {
  // fill: '86rem',
  page: '62rem',
  content: '45rem'
};

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
