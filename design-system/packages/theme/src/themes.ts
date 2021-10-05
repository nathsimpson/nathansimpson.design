import { darkColors, lightColors } from './colors';

export const fontFamilies = {
  heading:
    "-apple-system, BlinkMacSystemFont, 'SF Pro Display','roboto',sans-serif",
  body:
    "-apple-system, BlinkMacSystemFont, 'SF Pro Display','roboto',sans-serif",
  mono:
    'Monaco,Menlo,Consolas,"Droid Sans Mono","Inconsolata","Courier New",monospace'
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
} as const;

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

export const fontSizes = {
  xsmall: '0.75rem',
  small: '0.875rem',
  medium: '1rem',
  large: '1.25rem',
  xlarge: '1.5rem',
  xxlarge: '1.875rem',
  xxxlarge: '2.5rem'
} as const;

export type SpacingType = keyof typeof spacing;
export type RadiiType = keyof typeof radii;
export type FontSizeType = keyof typeof fontSizes;
export type Theme = typeof themeDark;

export const themeDark = {
  spacing,
  breakpoints,
  radii,
  boxShadow: {
    1: {
      boxShadow: `0px 6px 12px ${darkColors.shadow}`
    }
  },
  fontSizes,
  fontFamilies,
  colors: darkColors
};

export const themeLight = {
  spacing,
  breakpoints,
  radii,
  boxShadow: {
    1: {
      boxShadow: `0px 6px 12px ${lightColors.shadow}`
    }
  },
  fontSizes,
  fontFamilies,
  colors: lightColors
};
