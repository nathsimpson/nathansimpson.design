/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useMediaQuery, forwardRefWithAs } from '@design-system/utils';
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
      bg,
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
      width,
      ...props
    },
    ref
  ) => {
    const boxStyles = useBoxStyles({
      bg,
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
      width
    });
    return <Tag css={boxStyles} ref={ref} {...props} />;
  }
);

export const useBoxStyles = ({
  bg = 'none',
  height,
  width,
  ...props
}: BoxProps) => {
  const { mq, mapResponsiveProp } = useMediaQuery();
  const margin = getMarginStyles(props);
  const padding = getPaddingStyles(props);
  const radii = getRadiiStyles(props);
  const colors = useBoxColors();

  return mq({
    background: mapResponsiveProp(bg, colors),
    height,
    ...margin,
    ...padding,
    ...radii,
    width
  });
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
  };
