export { default as hexAlpha } from 'hex-alpha';
export { getContrastColor, getContrastRatio, getWcagScore } from 'hex-a11y';

export { forwardRefWithAs } from './forwardRefWithAs';
export { useMediaQuery } from './useMediaQuery';
export { getTintColor } from './getTintColor';

export type ResponsiveProp<T> = T | readonly (T | null)[];
