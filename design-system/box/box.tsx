/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactNode, ElementType, StyleHTMLAttributes } from 'react';
import { forwardRefWithAs } from '@nathsimpson/utils';

import {
  BoxMarginProps,
  BoxPaddingProps,
  BoxRadiiProps,
  getMarginStyles,
  getPaddingStyles,
  getRadiiStyles,
  useBoxColors
} from './utils';

export const Box = forwardRefWithAs<'div', BoxProps>(
  (
    {
      as: Tag = 'div',
      bg = 'none',
      height,
      margin,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      marginX,
      marginY,
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingX,
      paddingY,
      rounding,
      roundingBottom,
      roundingLeft,
      roundingRight,
      roundingTop,
      style,
      width,
      ...props
    },
    ref
  ) => {
    const marginObj = getMarginStyles({
      margin,
      marginBottom,
      marginLeft,
      marginRight,
      marginTop,
      marginX,
      marginY
    });

    const paddingObj = getPaddingStyles({
      padding,
      paddingBottom,
      paddingLeft,
      paddingRight,
      paddingTop,
      paddingX,
      paddingY
    });
    const radiiObj = getRadiiStyles({
      rounding,
      roundingBottom,
      roundingLeft,
      roundingRight,
      roundingTop
    });

    const colors = useBoxColors();
    return (
      <Tag
        {...props}
        css={{
          backgroundColor: colors[bg],
          ...radiiObj,
          ...marginObj,
          ...paddingObj,
          height,
          width
        }}
        ref={ref}
      />
    );
  }
);

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
