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
  colorMap
} from './utils';
import { forwardRefWithAs } from '../utils';

export const Box = forwardRefWithAs<'div', BoxProps>(
  (
    {
      as: Tag = 'div',
      bg = 'none',
      children,
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

    return (
      <Tag
        {...props}
        css={{
          backgroundColor: colorMap[bg],
          ...radiiObj,
          ...marginObj,
          ...paddingObj,
          height,
          width
          // ...style
        }}
      >
        {children}
      </Tag>
    );
  }
);

export type BoxProps = BoxMarginProps &
  BoxPaddingProps &
  BoxRadiiProps & {
    as?: ElementType;
    /** Background color */
    bg?: 'none' | 'base' | 'emphasis';
    /** The content of this flex container. */
    children?: ReactNode | string;
    /** Height */
    height?: number;
    /** Width */
    width?: number;
    /** The regular style prop */
    style?: StyleHTMLAttributes<'div'>;
  };
