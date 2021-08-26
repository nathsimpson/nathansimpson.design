/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactNode, ElementType, StyleHTMLAttributes } from 'react';

import {
  BoxMarginProps,
  BoxPaddingProps,
  BoxRadiiProps,
  getMarginStyles,
  getPaddingStyles,
  getRadiiStyles,
  useBoxColors
} from './utils';
import { forwardRefWithAs } from '../utils';

export const Box = forwardRefWithAs<'div', BoxProps>(
  ({ as: Tag = 'div', bg = 'none', style, ...props }, ref) => {
    const boxStyles = useBoxStyles(props);
    return <Tag {...props} css={boxStyles} ref={ref} />;
  }
);

export const useBoxStyles = ({
  bg = 'none',
  height,
  width,
  ...props
}: BoxProps) => {
  const margin = getMarginStyles(props);
  const padding = getPaddingStyles(props);
  const radii = getRadiiStyles(props);
  const colors = useBoxColors();

  return {
    backgroundColor: colors[bg],
    height,
    ...margin,
    ...padding,
    ...radii,
    width
  };
};

export type BoxProps = BoxMarginProps &
  BoxPaddingProps &
  BoxRadiiProps & {
    as?: ElementType;
    /** Background color */
    bg?: 'none' | 'base' | 'emphasis';
    /** The content of this container. */
    children?: ReactNode | ReactNode[] | string;
    /** Height */
    height?: number;
    /** Width */
    width?: number;
    /** The regular style prop */
    style?: StyleHTMLAttributes<'div'>;
  };
